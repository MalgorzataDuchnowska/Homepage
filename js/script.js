console.log("Hej!");

let button = document.querySelector(".js-button");
let pictures = document.querySelector(".js-pictures")
let themeButton = document.querySelector(".js-themeButton")
let body = document.querySelector(".body")
let themeName = document.querySelector(".themeName")
let darkTheme = document.querySelector(".darkTheme")

button.addEventListener("click", () => {
    pictures.hidden = !pictures.hidden;
    button.innerText = pictures.hidden ? "Zobacz Zazu" : "Schowaj Zazu";
});

themeButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    themeName.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
}
);

// themeButton.addEventListener("click", () => {
//     body.classList.toggle("darkTheme");
//     if (body.classList.contains("darkTheme")) {
//         themeName.innerText = "jasny";
//     } else {
//         themeName.innerText = "ciemny";
//     }
// });