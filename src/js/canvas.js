import buildings from "../../assets/buildings.png";
import contact from "../../assets/contact.png";
import creddy from "../../assets/creddy.png";
import hiContact from "../../assets/hi-contact.png";
import hiPalette from "../../assets/hi-palette.png";
import hiPhone from "../../assets/hi-phone.png";
import hiWand from "../../assets/hi-wand.png";
import palette from "../../assets/palette.png";
import phone from "../../assets/phone.png";
import platform from "../../assets/platform6.png";
import sky from "../../assets/sky.png";
import SmallTallPlatform from "../../assets/smallTall.png";
import trees from "../../assets/trees2.png";
import wand from "../../assets/wand.png";
import "../styles.css";
import intro from "./intro.js";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let pause = true;
let phoneSelected = false;
let wandSelected = false;
let contactSelected = false;
let paletteSelected = false;
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
class ClickableObject {
  constructor({ x, y, image, hiImage, original }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.hiImage = hiImage;
    this.original = original;
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
let clickableObjects1 = [];
let clickableObjects2 = [];
let clickableObjects3 = [];
let clickableObjects4 = [];
let genericObjects = [];
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  enter: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);
  player = new Player();
  platforms = [
    new Platform({
      x: platformImage.width * 4 + 573,
      y: 295,
      image: createImage(SmallTallPlatform),
    }),
    new Platform({ x: -12, y: 510, image: platformImage }),
    new Platform({ x: 662, y: 510, image: platformImage }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 510,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 200,
      y: 510,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 299,
      y: 510,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 5 + 450,
      y: 510,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 6 + 400,
      y: 510,
      image: platformImage,
    }),
  ];

  genericObjects = [
    new GenericObject({ x: -10, y: -150, image: createImage(sky) }),
    new GenericObject({ x: 0, y: -30, image: createImage(buildings) }),
    new GenericObject({ x: 0, y: 200, image: createImage(trees) }),
  ];

  clickableObjects1 = [
    new ClickableObject({
      x: 800,
      y: 430,
      image: createImage(phone),
      hiImage: createImage(hiPhone),
      original: createImage(phone),
    }),
  ];
  clickableObjects2 = [
    new ClickableObject({
      x: 1400,
      y: 430,
      image: createImage(wand),
      hiImage: createImage(hiWand),
      original: createImage(wand),
    }),
  ];
  clickableObjects3 = [
    new ClickableObject({
      x: 2300,
      y: 430,
      image: createImage(contact),
      hiImage: createImage(hiContact),
      original: createImage(contact),
    }),
  ];
  clickableObjects4 = [
    new ClickableObject({
      x: 3400,
      y: 430,
      image: createImage(palette),
      hiImage: createImage(hiPalette),
      original: createImage(palette),
    }),
  ];

  scrollOffset = 0;
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#FFFAF0";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObjects) => {
    genericObjects.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  clickableObjects1.forEach((clickableObject) => {
    clickableObject.draw();
  });
  clickableObjects2.forEach((clickableObject) => {
    clickableObject.draw();
  });
  clickableObjects3.forEach((clickableObject) => {
    clickableObject.draw();
  });
  clickableObjects4.forEach((clickableObject) => {
    clickableObject.draw();
  });
  if (!pause) {
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
        clickableObjects1.forEach((clickableObject) => {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects2.forEach((clickableObject) => {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects3.forEach((clickableObject) => {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects4.forEach((clickableObject) => {
          clickableObject.position.x -= player.speed;
        });
        genericObjects.forEach((genericObject) => {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach((platform) => {
          platform.position.x += player.speed;
        });
        clickableObjects1.forEach((clickableObject) => {
          clickableObject.position.x += player.speed;
        });
        clickableObjects2.forEach((clickableObject) => {
          clickableObject.position.x += player.speed;
        });
        clickableObjects3.forEach((clickableObject) => {
          clickableObject.position.x += player.speed;
        });
        clickableObjects4.forEach((clickableObject) => {
          clickableObject.position.x += player.speed;
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
    clickableObjects1.forEach((clickableObject, index) => {
      if (
        player.position.x >= clickableObject.position.x - 100 &&
        player.position.x <=
          clickableObject.position.x + clickableObject.width + 100
      ) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;

        document.getElementById("caption1").innerHTML = "Press Enter";

        phoneSelected = true;
      } else if (
        player.position.x >
          clickableObject.position.x + clickableObject.width + 100 ||
        player.position.x < clickableObject.position.x - 100
      ) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;
        if (phoneSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects2.forEach((clickableObject, index) => {
      if (
        player.position.x >= clickableObject.position.x - 100 &&
        player.position.x <=
          clickableObject.position.x + clickableObject.width + 100
      ) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;

        document.getElementById("caption1").innerHTML = "Press Enter";

        wandSelected = true;
      } else if (
        player.position.x >
          clickableObject.position.x + clickableObject.width + 100 ||
        player.position.x < clickableObject.position.x - 100
      ) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;
        if (wandSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects3.forEach((clickableObject, index) => {
      if (
        player.position.x >= clickableObject.position.x - 100 &&
        player.position.x <=
          clickableObject.position.x + clickableObject.width + 100
      ) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;

        document.getElementById("caption1").innerHTML = "Press Enter";

        contactSelected = true;
      } else if (
        player.position.x >
          clickableObject.position.x + clickableObject.width + 100 ||
        player.position.x < clickableObject.position.x - 100
      ) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;
        if (contactSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects4.forEach((clickableObject, index) => {
      if (
        player.position.x >= clickableObject.position.x - 100 &&
        player.position.x <=
          clickableObject.position.x + clickableObject.width + 100
      ) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;

        document.getElementById("caption1").innerHTML = "Press Enter";

        paletteSelected = true;
      } else if (
        player.position.x >
          clickableObject.position.x + clickableObject.width + 100 ||
        player.position.x < clickableObject.position.x - 100
      ) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;
        if (paletteSelected) {
          document.getElementById("caption1").style.display = "none";
        }
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
    case 13:
      keys.enter.pressed = true;
      console.log("space");
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
    case 13:
      keys.enter.pressed = false;
      break;
  }
});

//UI

function getUserName() {
  var nameField = document.getElementById("nameField").value;
  var result = document.getElementById("username");

  if (nameField.length > 0) {
    result.textContent = nameField;
    document.querySelector("#right").style.display = "flex";
    document.querySelector("#bottom").style.display = "flex";
    document.querySelector("#small-overlay").style.display = "none";
    document.querySelector("#overlay").style.backgroundColor = "transparent";
    pause = false;
  } else {
    document.getElementById("nameField").style.borderBottom =
      "4px solid #E66363";
  }
}
var subButton = document.getElementById("cr-btn");
subButton.addEventListener("click", getUserName, false);
