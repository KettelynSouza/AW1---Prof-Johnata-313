const fs = require('fs')

/*
console.log(1)

fs.readFile('./in1.txt', (err, contents ) =>  {
fs.readFile('./in2.txt', (err2, contents2 ) =>  {    
 
       console.log(err, String(contents))
       console.log(err2, String(contents2))

      })
})
*/


const readFile = file => new Promise((resolve, reject) => {

       fs.readFile(file, (err, contents) => {
       if(err){
       reject(err)
}
       else {
       resolve(contents)
}
})
})


  /*  readFile('./in1.txt')
    .then(constents => {
        console.log(String(contents))


    })

.the( contents => {
console.log( String(contents))
return readFile('./int2.txt')
})

.then(contents => {
   console.log(promessa)
})*/

const init = async => {
  try {

    const contents = await readFile('./in1.txt')
    const contents2 = await readFile('./in2.txt')
    return String(contents) + '\n' + String(contents2)
  }

  catch(err) {
    console.log(err)
  }
}

init().then(contents => console.log(contents))

console.log(2)


console.log(3)