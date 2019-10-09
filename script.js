let container = document.querySelector(".container");
let resetButton = document.querySelector("button[class~='reset']");
let reSizeButton = document.querySelector("button[class~='resize']");
let lastSize;

drawSqaures(16);

resetButton.addEventListener("click", event => {
  reset();
});

reSizeButton.addEventListener("click", event => {
  let input = window.prompt("please enter the size of the grid");
  reset();
  drawSqaures(input);
});

function reset() {
  getSqaures().forEach(square => {
    square.style.opacity = 1;
  });
}

function drawSqaures(size) {

  if (lastSize != null) {
    let divs = document.querySelectorAll(".square");
    divs.forEach(div => {
      div.parentNode.removeChild(div);
    });
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


  for (let i = 0; i < size * size; i++) {
    let k = document.createElement("div");
    k.classList.add("square");
    container.appendChild(k);
  }

  lastSize = size;
  addListener();
}

function getSqaures() {
  return document.querySelectorAll(".square");
}

function addListener() {
  getSqaures().forEach(square => {
    square.addEventListener("mouseenter", event => {
      event.target.style.opacity = 0;
    });
  });
}
