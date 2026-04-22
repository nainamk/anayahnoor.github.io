const canvas = document.getElementById("cartoonCanvas");
const ctx = canvas.getContext("2d");

// Sky
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 800, 500);

// Sun
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

// Ground
ctx.fillStyle = "green";
ctx.fillRect(0, 350, 800, 150);

// House
ctx.fillStyle = "brown";
ctx.fillRect(300, 250, 200, 150);

// Roof
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(400, 180);
ctx.lineTo(500, 250);
ctx.fillStyle = "red";
ctx.fill();

// Door
ctx.fillStyle = "black";
ctx.fillRect(380, 320, 40, 80);

// Window
ctx.fillStyle = "lightblue";
ctx.fillRect(320, 280, 40, 40);

// Text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("My Cartoon 🌞", 320, 40);

// Fence (loop + translate)
for (let i = 0; i < 10; i++) {
  ctx.save();
  ctx.translate(i * 40, 360);
  ctx.fillStyle = "tan";
  ctx.fillRect(0, 0, 10, 40);
  ctx.restore();
}
