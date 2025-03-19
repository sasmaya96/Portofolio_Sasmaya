document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
});

document.querySelector(".toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
