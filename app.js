const mainBody = document.querySelector("main");

let toggleBtn;
let wholePage;
let hamburgerMenu;

function declare(){
    toggleBtn = document.querySelector(".toggle-button");
    wholePage = document.querySelector(".whole-page");
    hamburgerMenu = document.querySelector(".hamburger-menu");
}

let dark = false;
declare();

function toggleAnimation() {
    document.body.classList.add("stop-scrolling");
    dark = !dark;
    let clone = wholePage.cloneNode(true);   
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    mainBody.appendChild(clone);

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        wholePage.remove();
        clone.classList.remove("copy");
        declare();
        toggleEvents();
    });
}

function toggleEvents(){
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAnimation);
    }
    hamburgerMenu.addEventListener("click", () => {
        wholePage.classList.toggle("active");
    });
}

toggleEvents();