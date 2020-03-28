import React from 'react';
import {ButtonGroup, Button, Container, Row, Col, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import './Image.css'

const ButtonBar=(props)=>{

    return(
      <Container>
      <Row>
      <Col>
        <ButtonGroup>
        <Button id="reset"  onClick={props.onClick} active={props.pageObject.reset}>Reset</Button>
        <Button id="smooth" onClick={props.onClick} active={props.pageObject.smooth}>Smooth</Button>
        <Button id="invert" onClick={props.onClick} active={props.pageObject.invert}>Invert</Button>
        </ButtonGroup>
      </Col>    
      <Col>
        <ButtonGroup>
        <Button id="gray" onClick={props.onClick} active={props.pageObject.gray}>Gray</Button>
        <Button id="monoR" onClick={props.onClick} active={props.pageObject.mono}>Mono(R)</Button>
        <Button id="monoG" onClick={props.onClick} active={props.pageObject.mono}>Mono(G)</Button>
        <Button id="monoB" onClick={props.onClick} active={props.pageObject.mono}>Mono(B)</Button>
        </ButtonGroup>
      </Col>
      <Col>
        <ButtonGroup>
        <Button variant="success" id="plus" onClick={props.onClick} active={false} disabled={props.pageObject.size===100}>+</Button>
        <Button variant="success" id="minus" onClick={props.onClick} active={false}disabled={props.pageObject.size<=10}>-</Button>    
      </ButtonGroup>
      </Col>
      <Col>
        <ButtonGroup>
        {!props.public&&<Button variant="primary" id="save" onClick={props.onClick} active={false}>Save</Button>}
        {props.public&&<React.Fragment>
                <span className="NewPhoto">
                <input accept="image/*" onChange={props.upLoad} id="icon-button-file-2" type="file" />
                <label htmlFor="icon-button-file-2">
                <Button variant="primary" id="load" className="" as="span">
                Load Image
                </Button>
                </label>
                </span>
                </React.Fragment>}
      </ButtonGroup>
      </Col>
      </Row>
      </Container>
        )
  }
  

const ThresholdSlider=(props)=>{
  
      return(
     <FormGroup>
     <FormLabel>Threshold: {props.pageObject.threshold}</FormLabel> 
     <FormControl as="input" type="range"
                  disabled={props.pageObject.edgeDetector==='Edge Detector'}
                  id="threshold"
                  value={props.pageObject.threshold}
                  min='0' max='255'
                  onChange={props.onChange}
                   />
     </FormGroup>
          )
    }

  const MultiplierSlider=(props)=>{

      return(
        <FormGroup>
        <FormLabel>Scale (Multiplier): {props.pageObject.multiplier}</FormLabel> 
        <FormControl as="input" type="range"
                     disabled={props.pageObject.edgeDetector==='Edge Detector'}
                     id="multiplier"
                     value={props.pageObject.multiplier}
                     min='0.1' max='5' step=".01"
                     onChange={props.onChange}
                      />
        </FormGroup>
          )
    }

  const T2Slider=(props)=>{

      return(
     <FormGroup>
     <FormLabel hidden={props.pageObject.edgeDetector!=='Canny'}>Threshold (T2): {props.pageObject.T2}</FormLabel> 
     <FormControl as="input" type="range"
                  disabled={props.pageObject.edgeDetector!=='Canny'}
                  hidden={props.pageObject.edgeDetector!=='Canny'}
                  id="T2"
                  value={props.pageObject.T2}
                  min='0' max='255'
                  onChange={props.onChange}
                   />
     </FormGroup>
          )
    }
    

const EdgeDetectorSelect=(props)=>{
//  const selectvals=['Edge Detector','Sobel', 'Laplace', 'Prewitt', 'Robinson', 'Kirsch', 'Roberts Cross', 'Canny' ]
  const selectvals=['Edge Detector','Sobel', 'Laplace', 'Prewitt', 'Robinson', 'Kirsch', 'Roberts Cross']
      return(   
        <FormGroup>
         <FormLabel>Edge Detector</FormLabel>
        <FormControl as="select" id="edgeDetector" value={props.pageObject.edgeDetector} onChange={props.onChange}>
        {selectvals.map((option, index)=>{
            return <option  value= {option} key={index}>{option}</option>;
           })}
        </FormControl>
        </FormGroup>
      )   
    }
    
  

const Controls=(props)=>{
//console.log(props.pageObject)
    return(
   
    <Container>
      <Row>
        <ButtonBar public={props.public} upLoad={props.upLoad} onClick={props.onClick} pageObject={props.pageObject}/>
      </Row>
      <Row>
        <hr className="centerthis"/>
        </Row>

      <Row>
        <Col lg={3}>
          <EdgeDetectorSelect pageObject={props.pageObject} onChange={props.onChange}/>   
        </Col>
        <Col lg={3}>
          <ThresholdSlider pageObject={props.pageObject} onChange={props.onChange}/>
        </Col>
        <Col lg={3}>
          <MultiplierSlider pageObject={props.pageObject} onChange={props.onChange}/>
        </Col>
        <Col lg={3}>
          <T2Slider pageObject={props.pageObject} onChange={props.onChange}/>
        </Col>

      </Row>
    </Container>
        
        )
  }
  
export default Controls

  