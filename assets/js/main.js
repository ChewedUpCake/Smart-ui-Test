let burger_content = document.getElementById("burger-content");
let menu_header = document.getElementById("burger-menu");

function burger_click() {
    if (burger_content.classList.contains("burger-open")) {
        burger_content.classList.remove("burger-open");
        menu_header.classList.remove("burger-open");
    }
    else {
        burger_content.classList.add("burger-open");
        menu_header.classList.add("burger-open");
    }
}
