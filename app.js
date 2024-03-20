'use strict'
// const headingTag =document.querySelector ('h1')
// headingTag.innerText =`Bukola`

// let dec = document.querySelector('.dec');
// let h1 = document.querySelector('h1');
// let inc = document.querySelector('.inc')

// dec.addEventListener('click',function(){
//     h1.innerText = "Steff"
// })


// // line 6
// function bodyChanger(){
//     document.body.style.backgroundColor = "red"
// }

// inc.addEventListener('click',bodyChanger)

let dec = document.querySelector (".dec")
let h1 = document.querySelector("h1")

//function to update background color based on value
function updatebackgroundcolor() {
    if(parseInt(h1.innerText) < 0){
      document.body.style.backgroundColor= "red";
  
    }else if (parseInt(h1.innerText)===0){
      document.body.style.backgroundColor= "yellow";
      
    }else {
      document.body.style.backgroundColor= "green";
  }
  }
// decrease
function decremental (){
    h1.innerText --;
    updatebackgroundcolor()
}
dec.addEventListener ("click", decremental);

let inc = document.querySelector (".inc")
let header = document.querySelector("h1")
// increase
function incremental (){
    header.innerText ++;
    updatebackgroundcolor()
}
inc.addEventListener ("click", incremental);

// reset
let res = document.querySelector (".res")
let header1 = document.querySelector("h1")
function reset (){
    header1.innerText = 0;
    updatebackgroundcolor()
}
res.addEventListener ("click", reset);
