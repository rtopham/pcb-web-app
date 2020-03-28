import React, {Component} from 'react'
import PublicEditImage from './../image/PublicEditImage'
import '.././App.css';
import './Core.css'
import GoogleAd from './GoogleAd'
import Instructions from './Instructions'

class Home extends Component {

    state = {
        response: ''
      };

  render() {
    return (
        <div className="globalCore">
          <GoogleAd/>
          <PublicEditImage/>
          <Instructions />
          </div>
        
    )
  }
}


export default Home
