const signin = (user) => {
    
  return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  const signout = () => {
    return fetch('/auth/signout/', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
  }
  
  const resetRequest = (user) => {
    
    return fetch('/auth/password-reset-request/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
//        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  const validateToken = (user) => {
    
    return fetch('/auth/validate-token/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
//        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  } 

  const changePassword = (user) => {
    
    return fetch('/auth/change-password/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
//        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json() 
      }).catch((err) => console.log(err))
  } 


  export {
    signin,
    signout,
    resetRequest,
    validateToken,
    changePassword
  }
  