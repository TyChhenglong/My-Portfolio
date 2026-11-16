
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    // Check if navbar elements exist
    if (menuBtn && nav) {

        // Toggle mobile menu
        menuBtn.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

            menuBtn.setAttribute("aria-expanded", isOpen);

            menuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close menu after clicking navigation links
        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });

        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {

            if (
                !nav.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                nav.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        });

        // Close menu when resizing to desktop
        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                nav.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        });

    }


    // =========================
    // ACTIVE NAVIGATION ON SCROLL
    // =========================

    const sections = document.querySelectorAll(
        "#home, #about, #skills, #projects, #contact"
    );

    const navLinks = document.querySelectorAll(
        ".navbar nav a"
    );

    const indicators = document.querySelectorAll(
        ".side-indicators a"
    );

    function updateActiveSection() {

        let current = "home";

        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {

            if (scrollPosition >= section.offsetTop) {
                current = section.id;
            }

        });

        // Update navbar active links
        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );

        });

        // Update side indicators
        indicators.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );

        });

    }

    window.addEventListener("scroll", updateActiveSection);

    // Initial active section
    updateActiveSection();


    // =========================
    // CURRENT YEAR
    // =========================

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});
