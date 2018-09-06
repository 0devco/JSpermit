let crabs = require('@0devco/crabs')

let authUserRole = [1,2,3,4,'admin']
let afterCheck = []
let hasAnyRole = (t) => {
  t.forEach(me=>{
    let a = crabs(authUserRole).contains(me)
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
console.log(hasAnyRole(['editor','sp','admin']))
console.log(afterCheck)
