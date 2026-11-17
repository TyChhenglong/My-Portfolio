
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        function closeMenu() {
            nav.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }

        function openMenu() {
            nav.classList.add("active");

            menuBtn.setAttribute("aria-expanded", "true");
            menuBtn.setAttribute("aria-label", "Close navigation");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';
        }

        // Toggle menu
        menuBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen = nav.classList.contains("active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        // Close menu when clicking a navigation link
        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                closeMenu();
            });

        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {

            if (
                !nav.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                closeMenu();
            }

        });

        // Close menu when pressing Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        // Reset menu when returning to desktop
        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                closeMenu();
            }

        });

    }


    // =====================================
    // ACTIVE NAVIGATION ON SCROLL
    // =====================================

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

        // Update navbar links
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
    window.addEventListener("load", updateActiveSection);

    updateActiveSection();


    // =====================================
    // CURRENT YEAR
    // =====================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
