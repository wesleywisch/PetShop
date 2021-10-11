let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () =>{
    menuSection.classList.toggle("on", show); 
    show = !show;
    // show serve para ter segurança que nao vai houver um bug.
})