import { useRef, useEffect } from "react";

const HexGrid = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawGrid(context, width, height);
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default HexGrid;

const a = (2 * Math.PI) / 6;
const r = 50;

function drawGrid(context, width, height) {
  for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
    for (
      let x = r, j = 0;
      x + r * (1 + Math.cos(a)) < width;
      x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)
    ) {
      drawHexagon(context, x, y);
    }
  }
}

function drawHexagon(context, x, y) {
  context.beginPath();
  for (let i = 0; i < 6; i++) {
    context.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  context.closePath();
  context.stroke();
}
