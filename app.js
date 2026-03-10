window.addEventListener('load', function() {
    const savedScroll = sessionStorage.getItem("scrollPos");
    if (savedScroll) window.scrollTo(0, parseInt(savedScroll));

    window.addEventListener("scroll", () => {
        sessionStorage.setItem("scrollPos", window.scrollY);
    });

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

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        dark = savedTheme === "dark";
        wholePage.classList.toggle("dark", dark);
        wholePage.classList.toggle("light", !dark);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dark = true;
      wholePage.classList.remove("light");
      wholePage.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.setAttribute("aria-label", "Toggle Light Mode");
    }

    function toggleAnimation() {
        const scrollPos = window.scrollY;
        document.body.classList.add("stop-scrolling");
        dark = !dark;
        let clone = wholePage.cloneNode(true);   
        if (dark) {
            clone.classList.remove("light");
            clone.classList.add("dark");
            localStorage.setItem("theme", "dark");
            clone.querySelector(".toggle-button").setAttribute("aria-label", "Toggle Light Mode");
        } else {
            clone.classList.remove("dark");
            clone.classList.add("light");
            localStorage.setItem("theme", "light");
            clone.querySelector(".toggle-button").setAttribute("aria-label", "Toggle Dark Mode");
        }
        clone.classList.add("copy");
        mainBody.appendChild(clone);

        clone.addEventListener("animationend", () => {
            document.body.classList.remove("stop-scrolling");
            wholePage.remove();
            clone.classList.remove("copy");
            declare();
            toggleEvents();
            window.scrollTo(0, scrollPos);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && wholePage.classList.contains("active")) {
            wholePage.classList.remove("active");
            hamburgerMenu.setAttribute("aria-expanded", "false");
        }
    });

    function toggleEvents(){
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleAnimation);
        }
        hamburgerMenu.addEventListener("click", () => {
            wholePage.classList.toggle("active");
            const isOpen = wholePage.classList.contains("active");
            hamburgerMenu.setAttribute("aria-expanded", isOpen);
        });
        const overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", () => {
            wholePage.classList.remove("active");
            hamburgerMenu.setAttribute("aria-expanded", "false");
        });

        document.querySelectorAll(".links a").forEach(link => {
            link.addEventListener("click", () => {
                wholePage.classList.remove("active");
                hamburgerMenu.setAttribute("aria-expanded", "false");
            });
        });

    }

    toggleEvents();

});