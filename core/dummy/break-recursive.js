
var count = 0
let me = (t) => {
  console.log(t)
  if(count == 1){
    console.log("this is one")
  }

  if(count == 0){
    count += 1
    me("hur")
  }

//   let his = () => {
//    me("jamal")
//  }
}
me("kamal")
