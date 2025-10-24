let btn = document.querySelector('button');
let color = document.querySelector('div');

btn.addEventListener('click' , function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    color.style.backgroundColor = `rgb(${c1},${c2},${c3})`
} )