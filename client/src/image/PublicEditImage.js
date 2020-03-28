import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPrint} from '@fortawesome/free-solid-svg-icons'
import {getAnImage} from './api-image'
import auth from '../auth/auth-helper'
import Canvas from './Canvas'
import Controls from './Controls'
import './Image.css'
import initialImage from './../assets/sample.jpg'


class PublicEditImage extends Component {
constructor({match}) {
    super()
    this.mainImage=React.createRef()
    this.iframe=React.createRef() 
    this.state = {
        image:'',
        pageSrcUrl:'',
        print:false,
        pageObject:{
          image_id:'public',//match.params.imageId,
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
    }
    this.match = match
    }

componentDidMount=()=>{
//    this.getImage()
this.imageData = new FormData()
this.setState({image: initialImage})
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
    image_id: 'public',//this.match.params.imageId,
    pageSrcUrl:'',
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

upLoadImage = event => {
  let pageObject={
    image_id: 'public',//this.match.params.imageId,
    pageSrcUrl:'',
    title:event.target.files[0].name,
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
  let reader=new FileReader()
  reader.onload=(e)=>{
    let image = e.target.result
    this.setState({image: image, pageObject})
  }
  if(event.target.files[0]) reader.readAsDataURL(event.target.files[0])

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

clickPrint=()=>{
  this.setState({print:true})
}

printPage=(srcUrl)=>{
  this.setState({print:false, pageSrcUrl:srcUrl})
  const iframe1=this.iframe.current
  iframe1.srcdoc=`<html><body><img src='${srcUrl}'/></body></html>`
  iframe1.onload=()=>{
    iframe1.focus()
    iframe1.contentWindow.print()
  }


}

render(){
  if(!this.state.image||!this.state.pageObject) return null

const printerIcon = (
    <Button className="float-right"  variant="link" size='sm' onClick={this.clickPrint}>
      <FontAwesomeIcon icon={faPrint}/>
    </Button>
  )   

return(
<div className="globalCore">
<Card bg="dark" text="white" className="imageCard">
<Card.Header>
  {this.state.pageObject.title||"sample.jpg by Lady Bugz on Unsplash"}{printerIcon}
  </Card.Header>
<Canvas image={this.state.image} pageObject={this.state.pageObject} print={this.state.print} printPage={this.printPage}/>
<Card.Footer>
  <Controls public={true} upLoad={this.upLoadImage} onClick={this.handleButtons} onChange={this.handleChange} pageObject={this.state.pageObject}/>
</Card.Footer>
</Card>
<iframe ref={this.iframe} title="print" hidden/>
</div>
)
}
}
export default PublicEditImage