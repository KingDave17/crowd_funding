// const menu=document.querySelector("icon-menu img")
// const nav=document.querySelector(".header nav")

// menu.onclick=()=>{
//     nav.style.transform="translateY(0)"
// }
const button=document.querySelector(".alt")
const nav=document.querySelector(".header nav")

button.onclick=()=>{
    // nav.style.display="block"
    if(nav.style.display == "block"){
        nav.style.display = "none"
        button.setAttribute("src", "./images/icon-hamburger.svg")
    }else{
        nav.style.display="block"
        button.setAttribute("src", "images/icon-close-menu.svg")
    }
    if(nav.style.display == "none"){
        console.log("ok")
    }
}