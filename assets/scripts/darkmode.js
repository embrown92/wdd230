const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const section = document.querySelector("section");
const card = document.querySelector(".card");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        header.style.background = "#000";
        section.style.background = "#000";
        card.style.background = "#000";
        main.style.color = "#fff";
        section.style.color = "fff";
        modeButton.textContent = "🔆";

    } else {
        main.style.background = "#eee";
        header.style.background = "#fff";
        section.style.background = "#fff";
        card.style.background = "#fff";
        main.style.color = "#000";
        section.style.color = "#3c564a";
        modeButton.textContent = "🌙";
    }
});




