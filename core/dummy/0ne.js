/* import @0devco/crabs */
let crabs = require('@0devco/crabs')
var debounce = require('debounce');
import axios from 'axios'
/* fetch auth user permissions */
// let authUserPermissions = [1,2,3,4,'admin']

/* main acl process */
// let afterCheck = []

let hasAllPermission = (permissions) => {
  let tamal = async() => {
    let authUserPermissions = []
    let afterCheck = []

    var wh = axios.get('https://raw.githubusercontent.com/0devco/JSpermit/master/authUserPermissions.json')
    .then(response =>{
      // handle success
       let auth = response.data
      auth.forEach(t=> {
        authUserPermissions.push(t)
      })
      permissions.forEach(t => {
        let a = crabs(authUserPermissions).contains(t)
        afterCheck.push(a)
      })
      if(crabs(afterCheck).contains(false) === false){
        console.log('you have permit all full fill')
          return true
        } else {
          // console.log('not permit')
          return false
        }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    return wh
  }

let r
  tamal().then(t =>{
    r=t
  })


setTimeout(() => {
  console.log(r)
},1000)







}
// console.log(hasAllPermission([2,3,4,'admin']))
// console.log(afterCheck)


export default hasAllPermission
