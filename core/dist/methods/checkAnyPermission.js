/* import @0devco/crabs */
let crabs = require('@0devco/crabs')

/* fetch auth user permissions */
let authUserPermissions = [1,2,3,4,'admin']

/* main acl process */
let afterCheck = []

let hasAnyPermission = (t) => {
  t.forEach(me=>{
    let a = crabs(authUserPermissions).contains(me)
     afterCheck.push(a)
  })
  /* check all are true */
  if(crabs(afterCheck).contains(true) === true){
  // console.log('you have permit at least one full fill')
    return true
  } else {
    // console.log('not permit')
    return false
  }
}
console.log(hasAnyPermission(['editor','sp','admin']))
console.log(afterCheck)
