let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear(); // 

  // 新增一個粒子到陣列
  if (frameCount % 2 === 0) { // 控制產生頻率
    let symbol = random(["*", "+"]);
    let col = color(random(100, 255), random(100, 255), random(100, 255)); // 隨機顏色
    particles.push(new Particle(mouseX, mouseY, symbol, col));
  }

  // 更新和顯示粒子
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    // 如果超出畫布則刪除
    if (particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}

// 粒子類別
class Particle {
  constructor(x, y, symbol, col) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.col = col;
    this.alpha = 255; // 初始透明度
    this.velY = random(0.5, 2); // 緩慢下降速度
  }

  update() {
    this.y += this.velY; // 下降
    this.alpha -= 2; // 漸漸消失
  }

  show() {
    fill(this.col.levels[0], this.col.levels[1], this.col.levels[2], this.alpha);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.symbol, this.x, this.y);
  }
}
