import axios from 'axios';

export const contactService = {
    getcontacts,
    getcontact,
    createcontact,
    updatecontact,
    deletecontact
};

const client = axios.create({
    baseURL: '/cbtest/api/v1',
    json: true
  })
  
     async function execute (method, resource, data) {
      // inject the accessToken for each request
      //from helper
      return client({
        method,
        url: resource,
        data,
        //headers: {
         // Authorization: `Bearer ${accessToken}`
        //}
      }).then(req => {
        return req.data
      })
    }
    function getcontacts () {
      return execute('get', '/contacts')
    }
    function getcontact (id) {
      return execute('get', `/contacts/${id}`)
    }
    function createcontact (data) {
      return execute('post', '/contacts', data)
    }
    function updatecontact (id, data) {
      return execute('put', `/contacts/${id}`, data)
    }
    function deletecontact (id) {
      return execute('delete', `/contacts/${id}`)
    }


