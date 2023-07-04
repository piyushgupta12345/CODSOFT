const menubar = document.getElementsByClassName('menubar');
const ul = document.getElementsByName('ul');

menubar.addEventListener("click", ()=>{
    ul.classList.toggle('ul')
})
console.log(menubar)