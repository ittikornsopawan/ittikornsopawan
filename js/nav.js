document.addEventListener("DOMContentLoaded", () => {
  const init_nav = () => {
    const mainContainer = document.querySelector(".is-main");
    const navLinks = document.querySelectorAll(".is-nav a");
    const sections = document.querySelectorAll(".is-section");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href").charAt(0) === "#") {
          e.preventDefault();
        }

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // targetSection.scrollIntoView({ behavior: "smooth" });
          targetSection.scrollIntoView();

          navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
          });

          link.classList.add("active");
        }
      });
    });

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - mainContainer.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (
          mainContainer.scrollTop >= sectionTop &&
          mainContainer.scrollTop < sectionBottom
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      if (currentSection) {
        const activeLink = document.querySelector(
          `.is-nav a[href="#${currentSection}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    };

    mainContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set active link based on initial scroll position
  };

  init_nav();
});
