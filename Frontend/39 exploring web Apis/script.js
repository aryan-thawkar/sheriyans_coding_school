let btn = document.querySelector('button');
let progress = document.querySelector('.progress');
let num = document.querySelector('.num');
let a = 0;


btn.addEventListener('click' , () => {
    let int = setInterval(() => {
        a++;
        num.innerHTML = a + "%";
        progress.style.width = a + "%"
    },50)

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 0.5;
        
    },5000)
})