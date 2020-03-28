import React from 'react';
import {Row, Col} from 'react-bootstrap'
import ImageThumbnail from './ImageThumbnail'

   
const ImageRow=(props)=>{
 
        const imageCells = props.images.map(image => (
            <ImageThumbnail key={image._id} image={image} userId={props.userId} />
        ));
    return (
        <Row>
        <Col sm={12}>
        {imageCells}
        </Col>
        </Row>
    )
    }


const GalleryImages=(props)=>{

return(
<React.Fragment>
<ImageRow images={props.images} userId={props.userId}/>
</React.Fragment>
)
}

export default GalleryImages