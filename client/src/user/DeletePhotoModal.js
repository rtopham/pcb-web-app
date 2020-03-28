import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'

class DeletePhotoModal extends Component {
  
  render() {

    return (

<div>
  <Modal show={true}>
    <Modal.Header>
      <Modal.Title>Delete Photo</Modal.Title>
    </Modal.Header>

    <Modal.Body>Confirm to delete your current photo.</Modal.Body>

    <Modal.Footer>
      <Button onClick={this.props.handleRequestClose}>Cancel</Button>
      <Button variant="primary" onClick={this.props.handleDelete}>Delete</Button>
    </Modal.Footer>
  </Modal>
</div>


    )

  }
}

export default DeletePhotoModal
