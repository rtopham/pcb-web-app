import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import {getAnImage} from './api-image'
import auth from '../auth/auth-helper'
import Canvas from './Canvas'
import Controls from './Controls'
import './Image.css'


class EditImage extends Component {
constructor({match}) {
    super()
    this.mainImage=React.createRef()
    this.state = {
        image:'',
        pageObject:{
          image_id:match.params.imageId,
          title:'',
//          png_url:  "",
          threshold:50,
          T2:42,
          multiplier: 1,
          edgeDetector: 'Edge Detector',
          gray:false,
          smooth:false,
          invert: false,
          monoR:false,
          monoG:false,
          monoB:false,
          size:100
        }        
    }
    this.match = match
    }

componentDidMount=()=>{
    this.getImage()
}

getImage=()=>{
        let jwt=auth.isAuthenticated()
        getAnImage(
            {userId: this.match.params.userId,imageId:this.match.params.imageId},
            {t: jwt.token}
            ).then((data) => {
              if (data.error) {
                console.log(data.error)
              } else {
 
                this.setState({image: URL.createObjectURL(data)}) 
               }
            })
            
          }

resetPageObject=()=>{

  let pageObject={
    image_id:this.match.params.imageId,
//    png_url:  "",
    title:'',
    threshold:50,
    T2:42,
    multiplier: 1,
    edgeDetector: 'Edge Detector',
    gray:false,
    smooth:false,
    invert: false,
    monoR:false,
    monoG:false,
    monoB:false,
    size:100
    }
    this.setState({pageObject})
}

toggleButton=(button)=>{
  let pageObject= {...this.state.pageObject}
  pageObject[button]=!pageObject[button]
  this.setState({pageObject})
//  console.log(pageObject)
}

setGrayMono=(button)=>{
  const buttonValue=!this.state.pageObject[button]
  let pageObject= {...this.state.pageObject}
  pageObject.gray=false
  pageObject.monoR=false
  pageObject.monoG=false
  pageObject.monoB=false
  pageObject[button]=buttonValue
  this.setState({pageObject})
//  console.log(pageObject)
}

setSize=(size)=>{
  let pageObject= {...this.state.pageObject}
  pageObject.size=size
  this.setState({pageObject})
}

handleButtons=(e)=>{
  switch(e.currentTarget.id){
  case 'reset':this.resetPageObject()
  break
  case 'smooth':this.toggleButton('smooth')
  break
  case 'invert':this.toggleButton('invert')
  break
  case 'gray':this.setGrayMono('gray')
  break
  case 'monoR':this.setGrayMono('monoR')
  break
  case 'monoG':this.setGrayMono('monoG')
  break
  case 'monoB':this.setGrayMono('monoB')
  break
  case 'plus':this.setSize(this.state.pageObject.size+10)
  break
  case 'minus':this.setSize(this.state.pageObject.size-10)
  break
  default: this.setSize(100)

  }
  
}

handleChange=(e)=>{

  let pageObject= {...this.state.pageObject}
  pageObject[e.currentTarget.id]=e.target.value
  this.setState({pageObject})
}

render(){
  if(!this.state.image||!this.state.pageObject) return null

return(
<div className="globalCore">
<Card bg="dark" text="white" className="imageCard">
<Card.Header>{this.state.pageObject.title||"Untitled Image"}</Card.Header>
<Canvas image={this.state.image} pageObject={this.state.pageObject}/>
<Card.Footer>
  <Controls onClick={this.handleButtons} onChange={this.handleChange} pageObject={this.state.pageObject}/>
</Card.Footer>
</Card>
</div>
)
}
}
export default EditImage