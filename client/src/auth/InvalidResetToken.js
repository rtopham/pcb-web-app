import React, {Component} from 'react'
import {Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
import "./Signin.css";

class InvalidResetToken extends Component {
 render() {

  return (

      <div className="Signin">
      <Card>
        <Card.Header>Invalid or Expired Token</Card.Header>
        <Card.Body>
          <p>
          Your password reset link is invalid or it has expired.
          </p>
          <p>
          Please submit a new request: <Link to="/password-reset-request">Request Reset Link.</Link>
          </p>

      </Card.Body>
      </Card>
                                  
      
</div>
    )
  }
}

export default InvalidResetToken
