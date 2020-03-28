import React, {Component} from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {list} from './api-user.js'
import "./Users.css";

class Users extends Component {
  state = {
      users: []
  }

  componentDidMount() {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({users: data})
        
      }
    })
  }

  render() {
//  console.log(this.state.users[1])
//const photoUrl = `/api/users/photo/${this.state.users[1]._id}?${new Date().getTime()}`
    return (
 <div className="globalCore">
<Card>
  <Card.Header>All Users</Card.Header>
  <ListGroup>        

         {this.state.users.map((item, i) => {
          return<ListGroup horizontal={'sm'} key={i}>
          {<ListGroupItem className="UserPhoto"><img alt="User " src={`/api/users/photo/${item._id}?${new Date().getTime()}`}/></ListGroupItem>}  
          <ListGroupItem className="UserData"><Link to={"/user/" + item._id}>{item.name}</Link></ListGroupItem>
          <ListGroupItem className="UserData">{item.email}</ListGroupItem>
          </ListGroup>

               })
             }
             </ListGroup>
</Card>
 </div>
    )
  }
}

export default Users
