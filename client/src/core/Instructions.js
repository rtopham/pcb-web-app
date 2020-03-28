import React from 'react'
import {Card} from 'react-bootstrap'
const Instructions=(props)=>{
  return(
    <Card>
      <Card.Body>
        Create a coloring book page from your favorite photo in a few easy steps:
        <ul>
          <li>
          Load your image
          </li>
          <li>
          Choose an edge detector
          </li>
          <li>
          Invert image and apply smoothing and gray/mono options if desired
          </li>
          <li>
          Adjust threshold and scale
          </li>
          <li>
          Click the blue printer icon to print
          </li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Instructions