import React, { Component } from 'react'
import * as pcbImage from './../lib/pcb-image-processing'
import * as pcbEdge from './../lib/pcb-edge-detection'

class Canvas extends Component {
    constructor(props) {
          super(props)
          this.mainCanvas=React.createRef()
          this.mainImage=React.createRef() 
          this.state= {
              image:{},
              ctx:{},
              minHeight:0
           }
    }

componentDidMount=()=>{
this.loadImage()
}

loadImage=()=>{
    let img= new Image()
    img.src=this.props.image
    img.onload=()=>{
    const canvas=this.mainCanvas.current
    const aspectRatio=img.naturalWidth/img.naturalHeight
    canvas.height=Math.floor(928/aspectRatio)
    const ctx= canvas.getContext("2d")
    ctx.drawImage(img,0,0,canvas.width,canvas.height) 
    this.setState({ctx, image:img,minHeight:canvas.height})
    }
}

componentDidUpdate=(prevProps)=>{
    if(this.props.image!==prevProps.image) this.loadImage()
    this.processImage()
    this.detectEdges()
    this.postProcessing()
}

processImage=()=>{
    const canvas=this.mainCanvas.current
    const scale=this.props.pageObject.size/100
//    console.log('scale = '+scale)
    const width=Math.floor(928*scale)
    const aspectRatio=this.state.image.naturalWidth/this.state.image.naturalHeight
    canvas.width=width
    canvas.height=Math.floor(width/aspectRatio)
    this.state.ctx.drawImage(this.state.image,0,0,canvas.width,canvas.height)
    //console.log(this.props.pageObject)
    
        if(this.props.pageObject.gray){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.grayScaleImage(imageData)
            this.state.ctx.putImageData(imageData,0,0)
    }

        if(this.props.pageObject.monoR){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.monoImageR(imageData)
            this.state.ctx.putImageData(imageData,0,0)
    }

        if(this.props.pageObject.monoG){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.monoImageG(imageData)
            this.state.ctx.putImageData(imageData,0,0)
    }

        if(this.props.pageObject.monoB){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.monoImageB(imageData)
            this.state.ctx.putImageData(imageData,0,0)
    }
    
        if(this.props.pageObject.smooth){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            let newData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.gaussianSmooth(imageData, newData)
            this.state.ctx.putImageData(newData,0,0)
    }
}

detectEdges=()=>{
    const canvas=this.mainCanvas.current
    let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
    let newData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
        switch(this.props.pageObject.edgeDetector){
            case 'Sobel': pcbEdge.sobelImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            case 'Laplace': pcbEdge.laplaceImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            case 'Prewitt': pcbEdge.prewittImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            case 'Robinson': pcbEdge.robinsonImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            case 'Kirsch': pcbEdge.kirschImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            case 'Roberts Cross': pcbEdge.robertsCrossImage(imageData,newData,this.props.pageObject.multiplier,this.props.pageObject.threshold)
            break
            default: 

        }
    this.state.ctx.putImageData(newData,0,0)
}

postProcessing=()=>{
    const canvas=this.mainCanvas.current
        if(this.props.pageObject.invert){
            let imageData=this.state.ctx.getImageData(0,0,canvas.width,canvas.height)
            pcbImage.invertImage(imageData)
            this.state.ctx.putImageData(imageData,0,0)
            
    }
    if(this.props.print)this.props.printPage(canvas.toDataURL())
    

    
}

    render(){
        return(
        
        <div className="centerthis centerchildvert" style={{height: this.state.minHeight}} >
        <canvas id="pageCanvas" className="imageCanvas" ref={this.mainCanvas} width={928} height={0} />
        </div>
        
        )
    }
    }


    export default Canvas
