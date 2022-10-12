#! /usr/bin/node

let p = Promise.reject(15);

let a = p.then(i => {
	console.log('Jammer dan: '+i);
}).catch(error => {
  console.log("foutje");
})
