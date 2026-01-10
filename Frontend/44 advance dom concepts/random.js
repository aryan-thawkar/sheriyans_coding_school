var btn = document.querySelector('button');
var body = document.querySelector('body');
var imgarr = ['1.png' , '2.png' , '3.png' , '4.png', '5.png' , '6.png' , '7.png' , '8.png', '9.png' , '10.png' , '11.png' , '12.png']


btn.addEventListener('click' , ()=> {
    var x = Math.random()*100;
    var y = Math.random()*100;
    var rot = Math.random()*360;
    var rand = Math.floor(Math.random()*12)
    var img = document.createElement('img');
    img.setAttribute('src' , imgarr[rand]);
    img.style.width = '200px';
    img.style.position = 'absolute';
    img.style.left = x+'%';
    img.style.top = y+'%';
    img.style.rotate = rot+'deg';


    body.append(img);
})