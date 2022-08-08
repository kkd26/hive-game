import React from "react";
import { useRef, useEffect } from "react";

type HexGridProps = {
  width: number;
  height: number;
};

const HexGrid = ({ width, height }: HexGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != null) {
      const context = canvas.getContext("2d");
      context && drawGrid(context, width, height);
    }
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default HexGrid;

const a = (2 * Math.PI) / 6;
const r = 50;

const drawGrid = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
    for (
      let x = r, j = 0;
      x + r * (1 + Math.cos(a)) < width;
      x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)
    ) {
      drawHexagon(context, x, y);
    }
  }
};

function drawHexagon(context: CanvasRenderingContext2D, x: number, y: number) {
  context.beginPath();
  for (let i = 0; i < 6; i++) {
    context.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  context.closePath();
  context.stroke();
}
