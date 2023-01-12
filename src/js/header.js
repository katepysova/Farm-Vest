export const headerScroll = (headerElem) => {
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    headerElem.classList.add("scrolled");
  } else {
    headerElem.classList.remove("scrolled");
  }
};

export const headerCollapse = (headerElem) => {
  if (headerElem.classList.contains("collapsed")) {
    headerElem.classList.toggle("collapsed");
  }
};
