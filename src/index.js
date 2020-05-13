import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

let color = "#000000";

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = true;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const eraserButton = document.querySelector("#eraser-button");
eraserButton.addEventListener("click", () => {
  color = "rgb(255,255,255)";
});

let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }

  context.strokeStyle = color;
  context.lineWidth = 10;
  context.lineTo(x, y);
  context.stroke();
}
