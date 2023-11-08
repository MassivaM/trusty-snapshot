import background from "../../assets/background4.png";
import creddy from "../../assets/creddy.png";
import SmallTallPlatform from "../../assets/platform-small-tall.png";
import platform from "../../assets/platform6.png";
import trees from "../../assets/trees.png";
import "../styles.css";
import intro from "./intro.js";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.imageSmoothingEnabled = false;

const gravity = 1.5;
class Player {
  constructor() {
    this.position = { x: 100, y: 100 };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.speed = 5;
    this.width = 63;
    this.height = 66;
    this.image = createImage(creddy);
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
    }
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  image.style.height = "125px";
  image.style.width = "525px";
  return image;
}

let platformImage = createImage(platform);
let player = new Player();
let platforms = [];

let genericObjects = [];
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);
  player = new Player();
  platforms = [
    new Platform({
      x: platformImage.width * 4 + 585,
      y: 275,
      image: createImage(SmallTallPlatform),
    }),
    new Platform({ x: -12, y: 510, image: platformImage }),
    new Platform({ x: 550, y: 510, image: platformImage }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 492,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 492,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 299,
      y: 492,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 5 + 620,
      y: 492,
      image: platformImage,
    }),
  ];

  genericObjects = [
    // new GenericObject({ x: 0, y: 0, image: createImage(background) }),
    new GenericObject({ x: 0, y: 240, image: createImage(trees) }),
  ];

  scrollOffset = 0;
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#fbf9f4";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObjects) => {
    genericObjects.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });

  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed;
      });
    }
  }

  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x + player.width <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //win condition
  if (scrollOffset > 2000) {
    console.log("you win");
  }

  //lose condition
  if (player.position.y > canvas.height) {
    console.log("you lose");
    init();
  }
}
init();
animate();

//EVENT LISTENERS

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;
    case 40:
      break;
    case 39:
      keys.right.pressed = true;
      break;
    case 38:
      player.velocity.y -= 25;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;
    case 40:
      break;
    case 39:
      keys.right.pressed = false;
      break;
    case 38:
      break;
  }
});
