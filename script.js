

const create = document.getElementById('create');
const refresh = document.getElementById('refresh');
const go = document.getElementById('go');

create.addEventListener('click', () => {
    let timeline2 = new TimelineMax();
    timeline2.set('.box1', {
        display: 'none',
    })

    timeline2.set('.box2', {
        display: 'none',
    })
    

    timeline2.set('.box3', {
        display: 'flex'
    })

gsap.from(".mandala21", 1, {
delay: 0.3,
opacity: 0, 
ease: Expo.easeInOut
});

gsap.from(".mandala20", 1, {
    delay: 0.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala19", 1, {
    delay: 1,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala18", 1, {
    delay: 1.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala17", 1, {
    delay: 1.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala16", 1, {
    delay: 2,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala15", 1, {
    delay: 2.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala14", 1, {
    delay: 2.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala13", 1, {
    delay: 3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala12", 1, {
    delay: 3.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala11", 1, {
    delay: 3.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala10", 1, {
    delay: 4,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala9", 1, {
    delay: 4.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala8", 1, {
    delay: 4.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala7", 1, {
    delay: 5,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala6", 1, {
    delay: 5.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala5", 1, {
    delay: 5.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala4", 1, {
    delay: 6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala3", 1, {
    delay: 6.3,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala2", 1, {
    delay: 6.6,
    opacity: 0, 
    ease: Expo.easeInOut
});

gsap.from(".mandala1", 1, {
    delay: 7,
    opacity: 0, 
    ease: Expo.easeInOut
});

timeline2.to('.btn',{
    display: 'flex',
    delay: 7.5,
    opacity: 1,
    ease: Expo.easeInOut
});

});

document.getElementById('rotate').addEventListener('click', function(){

gsap.to(".mandala18", 3, {
    delay: 1,
    rotation: "360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala13", 3, {
    delay: 2,
    rotation: "-360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala11", 3, {
    delay: 3,
    rotation: "360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala7", 3, {
    delay: 4,
    rotation: "-360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala6", 3, {
    delay: 5,
    rotation: "360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala5", 3, {
    delay: 6,
    rotation: "-360",
    ease:Linear.easeNone,
    repeat:-1
});

gsap.to(".mandala2", 3, {
    delay: 7,
    rotation: "360",
    ease:Linear.easeNone,
    repeat:-1
});
refresh.addEventListener('click', () => {
    location.reload();
})
})

var rotate = gsap.timeline({paused:true, timeScale:0.1, onUpdate:timescale})
.to('.box3', {rotation:360, duration:1, repeat:-1, ease:'none'})


var start = document.querySelector("#go");
start.addEventListener("click", function (){ 
  rotate.play();
  var smooth = gsap.to(rotate, {timeScale: 3, duration: 3});
});

var stop = document.querySelector("#stop");
stop.addEventListener("click", function (){ 
  gsap.to(rotate, {timeScale: 0, duration: 3});
});

function timescale(){
    var currentTimeScale = rotate.timeScale(); 
  }



// document.getElementById('go').addEventListener('click', function(){



// })

