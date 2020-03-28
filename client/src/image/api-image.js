const create = (params, credentials, upload) => {
  return fetch('/api/images/new/'+ params.userId, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: upload
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const listImagesByUser = (params, credentials) => {
  return fetch('/api/images/by/'+ params.userId, {
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

const imageById = (params, credentials) => {
  return fetch('/api/image/by/'+ params.imageId, {
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

const listBannerLinksByUserNoAuth = (params) => {
  return fetch('/api/bannerlinks/by/'+ params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const remove = (params, credentials) => {
  return fetch('/api/bannerlinks/' + params.bannerId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const getAnImage = (params, credentials) => {
  return fetch('/api/images/get/'+ params.userId+'/'+params.imageId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
//    return response.json()
    return response.blob()
 
  }).catch((err) => console.log(err))
}

export {
  listImagesByUser,
  imageById,
  listBannerLinksByUserNoAuth,
  create,
  remove,
  getAnImage,
  
}
