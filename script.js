// Flower animation
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

const petals = [];
const petalImage = new Image();
petalImage.src = "assets/Petals.avif"; // Using your petal image

for (let i = 0; i < 40; i++) {
  petals.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 15 + 15,
    d: Math.random() * 2 + 1,
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    ctx.drawImage(petalImage, p.x, p.y, p.r, p.r);
    p.y += p.d;
    p.x += Math.sin(p.y * 0.01);

    if (p.y > H) {
      p.y = -10;
      p.x = Math.random() * W;
    }
  }
  requestAnimationFrame(drawPetals);
}

petalImage.onload = () => drawPetals();

// Start experience on key press
document.addEventListener('keydown', () => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('bgMusic').play();
});

window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});
