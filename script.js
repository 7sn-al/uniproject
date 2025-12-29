const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile_links");
const readBtn=document.querySelectorAll(".read_btn")


btn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains('open')) {
        btn.textContent = '✕';
        btn.style.color="rgb(2, 150, 137)"
    } else {
        btn.textContent = '☰';
        btn.style.color="rgba(255, 255, 255, 1)"
    }
});


readBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".container-card");
    const monumentId = card.dataset.id;

    window.location.href = `monument.html?id=${monumentId}`;
  });
});





