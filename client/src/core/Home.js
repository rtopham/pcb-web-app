import React, {Component} from 'react'
import PublicEditImage from './../image/PublicEditImage'
import '.././App.css';
import './Core.css'
import GoogleAd from './GoogleAd'

class Home extends Component {

    state = {
        response: ''
      };

  render() {
    return (
        <div className="globalCore">
          <GoogleAd/>
          <PublicEditImage/>
          </div>
        
    )
  }
}


export default Home
