

window.addEventListener('load',()=>{
    const path = document.querySelector('.S-word');
    console.log(path.getTotalLength())

setTimeout(() => {
    const svg = document.querySelector('.svg-style');
    svg.style.width = "100"
    svg.style.height = "100"
    setTimeout(() => {
        svg.style.width = "133.51"
        svg.style.height = "130.448"
    setTimeout(() => {
        // svg.style.transform = "translate(0px,0px) scale(0.2)"
        svg.style.top = "10vh"
        svg.style.left = "10vw"
        svg.style.width = "40"
        svg.style.height = "40"
        setTimeout(() => {
            svg.style.width = "70px"
            svg.style.height = "70px"
        }, 1000);

    }, 500);
    
    }, 1000);
}, 2000);

setTimeout(() => {
const svgPath = document.querySelectorAll('.defs-svg path');

    svgPath.forEach((element)=>{
        element.style.stroke = "#156de0"
    })
}, 3800);

})

window.addEventListener('load',()=>{
    const sideBar = document.querySelector('#sidebar');
    sideBar.style.transform = `translate(-50%,-50%) rotateY(0deg)`;
})


// window.addEventListener('load',()=>{
//     const sidebar = document.querySelector("#sidebar");
//     sidebar.addEventListener("mouseenter",()=>{
//         console.log("over")
//     })
//     sidebar.addEventListener("mouseleave",()=>{
//         console.log("leave")
//     })
// })


// window.addEventListener('mouseleave')





window.addEventListener("scroll",()=>{
    const backgoundObject1 = document.querySelector('.backgound-svg .object-1')
    const backgoundObject2 = document.querySelector('.backgound-svg .object-2')
    const backgoundObject3 = document.querySelector('.backgound-svg .object-3')
    const backgoundObject4 = document.querySelector('.backgound-svg .object-4')
    const backgoundObject5 = document.querySelector('.backgound-svg .object-5')
    const backgoundObject6 = document.querySelector('.backgound-svg .object-6')

    const aboutSection = document.querySelector('#about')
    const about = document.querySelector('#about h1')


    if(window.scrollY <= 438){
        let trans = window.scrollY*0.5;
        backgoundObject1.style.transform = `translate(-${trans}px, ${-trans*0.001}px)`
        backgoundObject2.style.transform = `translate(${trans}px, ${trans}px)`
        backgoundObject3.style.transform = `translate(-${trans}px, -${trans}px)`
        backgoundObject4.style.transform = `translate(-${trans}px, -${trans*0.5}px)`
        backgoundObject5.style.transform = `translate(${trans}px, -${trans}px)`
        backgoundObject6.style.transform = `translate(${200+trans}px, -${trans+100}px)`
    }else{
        let aboutX = window.scrollY- 438;
        console.log("else: " + aboutX)
        about.style.transform = `translate(-${aboutX*4}px, -${aboutX}px)`
        // about.style.left = `${aboutX}px`

    }
})