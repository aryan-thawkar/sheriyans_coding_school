let btn = document.querySelector('button');
let progress = document.querySelector('.progress');
let num = document.querySelector('.num');
let a = 0;
let time = Math.floor(Math.random()*100);
console.log(time);


btn.addEventListener('click' , () => {
    let int = setInterval(() => {
        a++;
        num.innerHTML = a + "%";
        progress.style.width = a + "%"
    },time)

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 0.5;
        
    },(time*100))
})