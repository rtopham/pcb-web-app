const recordLogAction = (data) => {
    
  return fetch('/api/log/record-action/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
        })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  const listAllLogs = (credentials) => { 
    return fetch('/api/log/list-all/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }      
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const calculateStats = (credentials) => {
    return fetch('/api/log/calculate-stats/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }      
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const sendContactMessage = (message) => {
    
    return fetch('/api/admin/send-contact-message/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }


  export {
    recordLogAction, 
    listAllLogs,
    calculateStats,
    sendContactMessage

  }
  