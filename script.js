const headLine = new SplitType('h1')
const myText2 = new SplitType('p', {charClass:'char2'})
var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

tl.from('.char', {
    y: -70,
    stagger: 0.05,
    delay: 1
})
.from('.char2', {
    y: -100,
    stagger: 0.05,
    duration: .4
}, "-=1.2")
.to('h1,p', {
    y: 100,
    delay: .8,
    duration: 1.4
})