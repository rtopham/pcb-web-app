import React, { Component } from 'react'
import {OverlayTrigger, Popover} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {getAnImage} from './api-image'
import auth from '../auth/auth-helper'


class ImageThumbnail extends Component {
constructor({match}) {
    super()
    this.state = {
        image:{}
    }
    this.match = match
    }

componentDidMount=()=>{
    this.getImage()
}

getImage=()=>{
        let jwt=auth.isAuthenticated()
        getAnImage(
            {userId: this.props.userId,imageId:this.props.image._id},
            {t: jwt.token}
            ).then((data) => {
              if (data.error) {
                console.log(data.error)
              } else {
                this.setState({image: URL.createObjectURL(data)}) 
               }
            })
          }

render(){
const popover = (
  <Popover id="modal-popover" title="Create">
      View or create pages based on this image.
  </Popover>);
if(!this.state.image) return null
return(

<OverlayTrigger overlay={popover}>
<Link to={`/image/${this.props.userId}/${this.props.image._id}`}><img src={this.state.image} alt={this.props.image.title} style={{width: '185px', height: '185px'}}  className="img-thumbnail"/></Link>
</OverlayTrigger>

)
}
}
export default ImageThumbnail