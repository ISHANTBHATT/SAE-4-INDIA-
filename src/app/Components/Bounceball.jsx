import React, { useRef, useState, useEffect } from "react";

const BallGame = () => {
  const canvasRef = useRef(null);
  //   const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const ballRadius = 20;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const gravity = 0.1; // Gravity effect
    const friction = 0.98; // Friction to slow down the ball

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();

      // Bounce off the left or right walls
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx * friction; // Reverse direction and apply friction
      }

      // Bounce off the top wall
      if (y + dy < ballRadius) {
        dy = -dy * friction; // Reverse direction and apply friction
      } else if (y + dy > canvas.height - ballRadius) {
        dy = -dy * friction; // Reverse direction and apply friction
        y = canvas.height - ballRadius; // Ensure it stays within the canvas

        // Stop the ball if it's moving very slowly
        if (Math.abs(dy) < 0.5) {
          dy = 0;
        }
        if (Math.abs(dx) < 0.5) {
          dx = 0;
        }
      } else {
        // Apply gravity only when not hitting the top boundary
        dy += gravity;
      }

      x += dx;
      y += dy;
    };

    const handleCanvasClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Check if the click is inside the ball's current position
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (distance <= ballRadius) {
        dy = -10; // Make the ball bounce by giving it an upward velocity
      }
    };

    canvas.addEventListener("click", handleCanvasClick);
    const intervalId = setInterval(draw, 10);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
      canvas.removeEventListener("click", handleCanvasClick); // Cleanup click event listener
    };
  }, []);

  //   const startGame = () => {
  //     setGameStarted(true);
  //   };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="480"
        height="320"
        className="bg-gray-200"
      />
      {/* <button onClick={startGame} disabled={gameStarted}>
        Start game
      </button> */}
    </div>
  );
};

export default BallGame;
