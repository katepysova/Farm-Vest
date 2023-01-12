export const parallaxWindowScroll = (selector, movementConstant = 5) => {
  const scrollPosition = document.documentElement.scrollTop;
  const scrollingItems = document.querySelectorAll(selector);
  scrollingItems.forEach((item) => {
    item.setAttribute(
      "style",
      `transform: translate(0, ${scrollPosition / movementConstant}px)`
    );
  });
};

let x = "";
let y = "";

export const parallaxMouseMove = (event, selector, movementConstant = 1.1) => {
  const parallaxIcons = document.querySelectorAll(selector);

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
