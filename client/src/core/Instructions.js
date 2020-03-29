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
        <p>
        Photo Coloring Books is a simple free web app that creates a coloring book page from your favorite photo in a few easy steps. Use one of six edge detection algorithms to turn your photograph into a printed page suitable for coloring with crayons, markers or colored pencils.
        </p>
        <p>
          Photo Coloring Books was originally developed as a Windows application to turn pictures into coloring pages. Thousands of people downloaded Photo Coloring Books to covert photos to coloring pages. Now, you can create the same great coloring books from your photos with a free online app.
        </p>
      </Card.Body>
    </Card>
  )
}

export default Instructions