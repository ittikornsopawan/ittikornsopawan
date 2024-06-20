document.addEventListener("DOMContentLoaded", () => {
  const init_cursor = () => {
    const cursor = document.querySelector(".circular-cursor");

    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const xPos = clientX - cursor.offsetWidth / 2;
      const yPos = clientY - cursor.offsetHeight / 2;
      cursor.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });

    const handleHover = () => {
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
  };

  init_cursor();
});
