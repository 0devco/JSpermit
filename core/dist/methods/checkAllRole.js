let crabs = require('@0devco/crabs')

let authUserRole = [1,2,3,4,'admin']
let afterCheck = []
let hasAllRole = (t) => {
  t.forEach(me=>{
    let a = crabs(authUserRole).contains(me)
     afterCheck.push(a)
  })
  /* check all are true */
  if(crabs(afterCheck).contains(false) === false){
  // console.log('you have permit all full fill')
  return true
  } else {
    // console.log('not permit')
    return false
  }
}
console.log(hasAllRole([2,3,4,'admin']))
console.log(afterCheck)
