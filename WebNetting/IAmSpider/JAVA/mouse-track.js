let particles = [];

function setup() {
  // canvas; mouse track is on the top
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('position', 'absolute'); // 使畫布絕對定位
  cnv.style('top', '0px');
  cnv.style('left', '0px');
  cnv.style('z-index', '-1'); // 設置畫布的層級，使其在頁面背景
}

function draw() {
  background(255); // white background

  // particles
  if (frameCount % 2 === 0) {
    let symbol = random(["*", "+"]);
    let col = color(random(100, 255), random(100, 255), random(100, 255));
    particles.push(new Particle(mouseX, mouseY, symbol, col));
  }

  // show particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    // if over the canvas, remove it
    if (particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}

// define particle;
class Particle {
  constructor(x, y, symbol, col) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.col = col;
    this.alpha = 255;
    this.velY = random(0.5, 2);
  }

  update() {
    this.y += this.velY;
    this.alpha -= 2;
  }

  show() {
    fill(this.col.levels[0], this.col.levels[1], this.col.levels[2], this.alpha);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.symbol, this.x, this.y);
  }
}
