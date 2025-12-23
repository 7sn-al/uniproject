const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile_links");
const logo =document.querySelector(".logo");
const logoImg=document.querySelector(".logo-image");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains('open')) {
        btn.innerHTML = '✕';
        btn.style.color="rgb(2, 150, 137)"
    } else {
        btn.innerHTML = '☰';
        btn.style.color="rgba(255, 255, 255, 1)"
    }
});

let propertiesAfter=(e) =>{
    e.style.backgroundColor = "transparent";
    e.style.boxShadow = "none";
    e.style.backdropFilter = "none";
}

let propertiesBefore=(e) =>{
    e.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; 
    e.style.boxShadow = "0 4px 12px rgba(0, 0, 0,0.3)";
    e.style.backdropFilter="blur(5px)";
}


/**const header = document.querySelector(".logodiv");

    window.addEventListener('scroll', function() {
    if (window.scrollY > 70) { 

        header.classList.add('scrolled');

        propertiesAfter(btn);
        propertiesAfter(logo);
        propertiesAfter(logoImg);


    } else {

        header.classList.remove('scrolled');

        propertiesBefore(btn);
        propertiesBefore(logo);
        propertiesBefore(logoImg);
    }
});
**/
