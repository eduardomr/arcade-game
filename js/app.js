// Character
class Character {
  constructor(x, y, sprite) {
    this.x = x; // position on horizontal axis
    this.y = y; // position on vertical axis
    this.sprite = sprite; // load images
  }
  // draw the character on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Enemies
class Enemy extends Character {
  constructor(x, y, sprite, speed) {
    super(x, y, sprite = 'img/enemy-bug.png');
    this.speed = Math.floor((Math.random() * 400) + 100); // speed alternation
  }
  // update the enemy's position
  update(dt) { // Parameter: dt, a time delta between ticks
    this.x += this.speed * dt; // the same speed for all computers
    if (this.x > 500) { // when a bug reaches the right edge
      this.x = -100; // a new bug appears at the left edge
      this.speed = Math.floor((Math.random() * 400) + 100); // speed alternation
    }
  }
  // draw the enemy on the screen
  render() {
    super.render();
  }
}

// Player
class Player extends Character {
  constructor(x, y, sprite, score) {
    super(x, y, sprite = 'img/char-boy.png');
    this.score = score; // player's score
  }
  // update the player's position
  update() {
    if (this.y <= 50) { // when the player reaches the water
      this.y = 400; // back to the starting position on the vertical axis
      this.score += 1; // player's score increases
      document.querySelector('.score').textContent = "Score: " + player.score; // the score display increases
    }
  }
  // draw the player on the screen
  render() {
    super.render();
  }
  // how the user controls the player, using arrow keys
  handleInput(move) {
    if (move === 'left' && this.x > 0)
      this.x = this.x - 40;
    else if (move === 'right' && this.x < 400)
      this.x = this.x + 40;
    else if (move === 'up' && this.y > -50)
      this.y = this.y - 40;
    else if (move === 'down' && this.y < 400)
      this.y = this.y + 40;
  }
}

// Instantiating all enemy objects
const allEnemies = [];
const bug0 = new Enemy(-100, 145);
const bug1 = new Enemy(-100, 145);
const bug2 = new Enemy(-350, 62);
const bug3 = new Enemy(-100, 62);
const bug4 = new Enemy(-10, 230);
const bug5 = new Enemy(-100, 230);
allEnemies.push(bug0, bug1, bug2, bug3, bug4, bug5);

// Instantiating the player object
const player = new Player(200, 400, 0);

// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  // Player.handleInput() method
  player.handleInput(allowedKeys[e.keyCode]);
});
