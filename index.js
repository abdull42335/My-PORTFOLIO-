const textElements = document.querySelectorAll('.contain-2-text');

let index = 0;

setInterval(() => {
  textElements[index].style.opacity = 0;
  index = (index + 1) % textElements.length;
  textElements[index].style.opacity = 1;
}, 2000);



