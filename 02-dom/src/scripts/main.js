import functions from './functions.js';

let closebtns = document.getElementsByClassName("close");
let showbtn = document.getElementById("show");
let addbtn = document.getElementById("add");
let ol = document.querySelector('ol');
let div = document.getElementById('border')
let i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = 'none';

  });
}

div.addEventListener("click", function () {
  console.log('click');
})

showbtn.addEventListener("click", function () {
  ol.classList.toggle("mystyle");
})

addbtn.addEventListener("click", function () {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode('Item'));
  li.classList.add('close')
  ol.appendChild(li);
  console.log(i);
  //  document.getElementById('hello').classList.add('someClass');
})