import Image from '../models/image.model'
import _ from 'lodash'
import path from 'path'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable' 
import fs from 'fs'

const create = (req, res, next) => {
 
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }
 
    let image = new Image(fields)
    image.postedBy= req.profile
    let imgUrl = ''
//    console.log('getting here')
const saveImage =() =>{    
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for(let i=0; i<6; i+=1){
      imgUrl += possible.charAt(Math.floor(Math.random()*possible.length));
  }

  Image.find({filename: imgUrl}, (err, images)=>{

    if(images.length>0){
        saveImage();
    }else{
    
    const tempPath= files.photo.path
    const ext = path.extname(files.photo.name).toLowerCase()
//    let imgUrl=path.basename(files.photo.name.toLowerCase(),ext)

//use following for production
    const targetPath = path.resolve(`client/uploads/images/${imgUrl}${ext}`); 

//use following for production--docker valume
//const targetPath = path.resolve(`public/images/${imgUrl}${ext}`);

    image.filename=imgUrl+ext
//    fs.rename(tempPath,targetPath, (err) =>{
//      if (err) throw err
//    })

    fs.copyFile(tempPath,targetPath, (err) =>{
      if (err) throw err
    })

    image.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  
  }//end of generateName
  })
}
saveImage()
})
}

const imageByID = (req, res, next, id) => {
  Image.findById(id).populate('postedBy', '_id name').exec((err, image) => {
    if (err || !image)
      return res.status('400').json({
        error: "Image not found"
      })
    req.image = image
    next()
  })
}

const listImagesByUser = (req, res) => {
  Image.find({postedBy: req.profile._id})
  .populate('postedBy', '_id name')
//  .sort('-created')
  .exec((err, images) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(images)
  })
}

const getImageByID = (req, res) => {
  console.log("called")
  Image.findById(req.params.imageId).populate('postedBy', '_id name').exec((err, image) => {
    if (err || !image)
      return res.status('400').json({
        error: "Image not found"
      })
    res.json(image)
  })
}

const listBannerLinksByUserNoAuth = (req, res) => {
  BannerLink.find({postedBy: req.profile._id})
  .populate('postedBy', '_id name')
//  .sort('-created')
  .exec((err, bannerLinks) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(bannerLinks)
  })
}


const remove = (req, res) => {
  let bannerLink = req.bannerLink
    bannerLink.remove((err, deletedBanner) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      } else{ 
      fs.unlink(path.resolve(`client/public/banners/${bannerLink.filename}`), (err =>{if(err) throw err})) 

      res.json(deletedBanner)
      }
    })
}

const isPoster = (req, res, next) => {
  let isPoster = req.bannerLink && req.auth && req.bannerLink.postedBy._id == req.auth._id
  if(!isPoster){
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}


const getAnImage = (req, res, next) => {
  if(req.image) return res.sendFile(process.cwd()+`/client/uploads/images/${req.image.filename}`)
    next()
  }


export default {
  listImagesByUser,
  getImageByID,
//  listBannerLinksByUserNoAuth,
  create,
  imageByID,
  remove,
//  isPoster,
  
  getAnImage
}
