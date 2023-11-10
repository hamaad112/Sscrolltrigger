var tl = gsap.timeline();

tl.from("nav img, nav h4,nav button",{
    y:-100,
    duration: 1,
    delay:0.5,
    opacity: 0,
    stagger: 0.2
})

tl.from("h1",{
    y:100,
    opacity:0,
    stagger: 0.2
})

tl.from(".content img",{
    scale: 0,
    stagger:0.2
})

tl.from("h5",{
    y:50,
    repeat: -1,
    duration: 1,
    opacity: 0,
    yoyo: true
})