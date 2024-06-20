document.addEventListener("DOMContentLoaded", () => {
  const init_gototop = () => {
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
      mainContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  init_gototop();
});
