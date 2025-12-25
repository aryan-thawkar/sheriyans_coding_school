gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

function firstPageAnimation(){
    var tl = gsap.timeline();
    tl.from("#nav" ,{
        y: '-10',
        opacity : 0,
        duration : 1.5,
        ease : Expo.easeInOut
    } )
    .to(".boundingelem" ,{
        y: '0',
        ease : Expo.easeInOut,
        delay : -1,
        duration : 2,
        stagger : 0.2
    } )
    .from("#herofooter" ,{
        y: '-10',
        opacity : 0,
        duration : 1.5,
        delay : -1,
        ease : Expo.easeInOut
    } )
}

function circleMouseFollower(xscale, yscale){
    gsap.to("#minicircle", {
        x: gsap.utils.pipe(
            gsap.utils.mapRange(0, window.innerWidth, 0, window.innerWidth),
            gsap.utils.snap(0.1)
        ),
        y: gsap.utils.pipe(
            gsap.utils.mapRange(0, window.innerHeight, 0, window.innerHeight),
            gsap.utils.snap(0.1)
        ),
        scaleX: xscale,
        scaleY: yscale,
        duration: 0.1,
        ease: "power1.out"
    });
}

var timeout;
function circleSkew(){
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        
        xscale = gsap.utils.clamp(0.8, 1.2, Math.abs(xdiff) * 0.05);
        yscale = gsap.utils.clamp(0.8, 1.2, Math.abs(ydiff) * 0.05);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        gsap.to("#minicircle", {
            x: dets.clientX,
            y: dets.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 0.6,
            ease: "power3.out"
        });

        timeout = setTimeout(function(){
            gsap.to("#minicircle", {
                scaleX: 1,
                scaleY: 1,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)"
            });
        }, 100);
    });
}


// Enhanced cursor with text display
function enhancedCursor(){
    const minicircle = document.querySelector("#minicircle");
    
    // Expand cursor on interactive elements
    document.querySelectorAll("a, button, .elem").forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to("#minicircle", {
                scale: 3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        elem.addEventListener("mouseleave", function(){
            gsap.to("#minicircle", {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Magnetic effect for buttons and links
function magneticButtons(){
    document.querySelectorAll("a, button").forEach(function(button){
        button.addEventListener("mousemove", function(e){
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener("mouseleave", function(){
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

// Scroll-triggered animations
function scrollAnimations(){
    gsap.from("#second .elem", {
        scrollTrigger: {
            trigger: "#second",
            scroller: "#main",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    gsap.from("#about img", {
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from("#about #textabout", {
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from("#subscribe", {
        scrollTrigger: {
            trigger: "#subscribe",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from("#footer a", {
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
    });
}

// Parallax effect for about image
function parallaxEffect(){
    gsap.to("#about img", {
        scrollTrigger: {
            trigger: "#about",
            scroller: "#main",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -50,
        ease: "none"
    });
}

// Hover effects for footer links
function footerAnimations(){
    document.querySelectorAll("#footer a").forEach(function(link){
        link.addEventListener("mouseenter", function(){
            gsap.to(link, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        link.addEventListener("mouseleave", function(){
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Initialize all functions
circleMouseFollower();
firstPageAnimation();
circleSkew();
enhancedCursor();
magneticButtons();
scrollAnimations();
parallaxEffect();
footerAnimations();

document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3.out",
            duration: 0.5,
            scale: 0.8
        });
    });

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        var img = elem.querySelector("img");
        
        gsap.to(img, {
            opacity: 1,
            ease: "power3.out",
            top: diff - (img.offsetHeight / 2),
            left: dets.clientX - elem.getBoundingClientRect().left - (img.offsetWidth / 2),
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            duration: 0.3,
            scale: 1
        });
    });
});