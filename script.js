

var tl =gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers:true
    }
})

tl.to("#bottle1",{
    width:"35%",
    top:"120%",
    left:"0%",
    
},"floweranim")

tl.to("#flower1",{
    top:"140%",
    left:"23%"
},"floweranim")

tl.to("#flower2",{
    width:"12%",
    top:"160%",
    right:"10%"
},"floweranim")

tl.to("#leaf1",{ 
    top:"100%",
    left:"10%"
},"floweranim")

tl.to("#leaf2",{ 
     rotate: '190deg',
    top:"120%",
    right:"10%"
},"floweranim")

tl.to("#leaf3",{ 
    rotate: '180deg',
    width:"15%",
    top:"110%",
    right:"45%"
},"floweranim")

var tl2 =gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers:true
    }
})

tl2.from(".smallleaf1",{
    rotate:'-90deg',
    left:'-100vw',
    top:"110%",
      
})
tl2.from("#bottle2",{
    rotate:'90deg',
    left:'100%',
    top:"110%"
},"bottleanim")
tl2.from("#bottle4",{
    rotate:'90deg',
    right:'100%',
    top:"110%"
},"bottleanim")

tl2.to("#bottle1",{
    width:"28vw",
    left:'36%',
    top:"215%"
},"bottleanim")