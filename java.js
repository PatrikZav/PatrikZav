


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const headerName = document.querySelector(".headerName");

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("show"); // Přepíná třídu "show" pro zobrazení/skrytí menu

        // Skrytí .headerName, když je menu otevřeno
        if (menu.classList.contains("show")) {
            headerName.style.display = "none";
        } else {
            headerName.style.display = "block";
        }
    });
});

