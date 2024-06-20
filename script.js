document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".circular-cursor");

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xPos = clientX - cursor.offsetWidth / 2;
    const yPos = clientY - cursor.offsetHeight / 2;
    cursor.style.transform = `translate(${xPos}px, ${yPos}px)`;
  });

  const handleHover = (event) => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
  };

  const handleReset = () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
  };

  const handleClick = () => {
    cursor.style.backgroundColor = "#ff0000";
  };

  const handleRelease = () => {
    cursor.style.backgroundColor = "#ffffff";
  };

  const buttons = document.querySelectorAll("button, a");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", handleHover);
    button.addEventListener("mouseleave", handleReset);
    button.addEventListener("mousedown", handleClick);
    button.addEventListener("mouseup", handleRelease);
    button.addEventListener("mouseleave", handleRelease);
  });

  // const links = document.querySelectorAll("a");
  // links.forEach((link) => {
  //   link.addEventListener("mouseenter", handleHover);
  //   link.addEventListener("mouseleave", handleReset);
  //   link.addEventListener("mousedown", handleClick);
  //   link.addEventListener("mouseup", handleRelease);
  //   link.addEventListener("mouseleave", handleRelease);
  // });

  const scrollToTopBtn = document.querySelector(".is-goto-top");
  const mainContainer = document.querySelector(".is-main");

  mainContainer.addEventListener("scroll", () => {
    if (mainContainer.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    mainContainer.scrollTo({ top: 0 });
  });

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

        // Remove active class from all navigation links
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });

        // Add active class to the clicked link
        link.classList.add("active");
      }
    });
  });

  const handleScroll = () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (
        mainContainer.scrollTop >= sectionTop &&
        mainContainer.scrollTop < sectionBottom
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Remove active class from all navigation links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to the corresponding navigation link
    const activeLink = document.querySelector(
      `.is-nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  mainContainer.addEventListener("scroll", handleScroll);
});
