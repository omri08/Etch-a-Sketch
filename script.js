let container = document.querySelector(".container");
for (let i = 0; i < 16 * 16; i++) {
  let i = document.createElement("div");
  i.classList.add("square");
  i.style.gridColumn = i;
  i.style.gridRow = i;
  container.appendChild(i);
}

let squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener('mouseenter', event => {
  //event.target.classList.add('fadeOut');
  event.target.style.opacity = 0;
  console.log(event.target);
  });
});
