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
    cursor.style.opacity = "0.25";
  };

  const handleReset = () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
    cursor.style.opacity = "0.1";
  };

  const handleClick = () => {
    cursor.style.backgroundColor = "#ff0000";

    setTimeout(() => {
      cursor.style.backgroundColor = "#ffffff";
    }, 100);
  };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", handleHover);
    button.addEventListener("mouseleave", handleReset);
    button.addEventListener("click", handleClick);
  });

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", handleHover);
    link.addEventListener("mouseleave", handleReset);
    link.addEventListener("click", handleClick);
  });
});
