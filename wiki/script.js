// JavaScript for responsive sidebar toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("mw-panel");

    menuToggle.addEventListener("click", () => {
        const isVisible = sidebar.style.display === "block";
        sidebar.style.display = isVisible ? "none" : "block";
    });
});
