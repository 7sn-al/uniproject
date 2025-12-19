const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile_links");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});
