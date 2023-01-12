export const parallaxWindowScroll = () => {
  const scrollPosition = document.documentElement.scrollTop;
  const scrollingItems = document.querySelectorAll(".parallax-item");
  scrollingItems.forEach((item) => {
    item.setAttribute(
      "style",
      `transform: translate(0, ${scrollPosition / 5}px)`
    );
  });
};

let x = "";
let y = "";

export const parallaxMouseMove = (event) => {
  const movementConstant = 1.1;
  const parallaxIcons = document.querySelectorAll(".parallax-item");

  if (x === "") {
    x = event.pageX;
  }

  if (y === "") {
    y = event.pageY;
  }

  const diffX = x - event.pageX;
  const diffY = y - event.pageY;

  x = event.pageX;
  y = event.pageY;

  parallaxIcons.forEach((icon) => {
    const moveX = diffX * movementConstant;
    const moveY = diffY * movementConstant;

    icon.setAttribute("style", `transform: translate(${moveX}px, ${moveY}px);`);
  });
};
