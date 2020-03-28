import React, { Component } from 'react'

class GoogleAd extends Component {

componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

    render(){
        return(
    <div className='ad'>
    <ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-7288454427087847"
     data-ad-slot="6536318459"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
     </div>
        )
    }
}

export default GoogleAd