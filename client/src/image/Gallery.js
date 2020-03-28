import React, { Component } from 'react'
import UploadImageForm from './UploadImageForm'
import GalleryImages from './GalleryImages'
import {listImagesByUser} from './api-image'
import auth from '../auth/auth-helper'


class Gallery extends Component {
constructor({match}) {
    super()
    this.state = {
        images:[],
    }
    this.match = match
    }

componentDidMount=()=>{
    this.loadGallery()
}

loadGallery= ()=>{
    let jwt=auth.isAuthenticated()
    listImagesByUser(
        {userId: this.match.params.userId},
        {t: jwt.token}
        ).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
//              console.log(data)
              this.setState({images: data}) 
           }
        })       
      }
    


render(){

return(
<div className="globalCore">
<UploadImageForm reloadImages={this.loadGallery}/>
<GalleryImages userId={this.match.params.userId} images={this.state.images} jwt={auth.isAuthenticated()}/>
</div>
)
}
}
export default Gallery