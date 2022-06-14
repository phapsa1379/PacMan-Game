confirm("Are you ready to start?");

let object = document.querySelector(".object");
let enemy = document.querySelector(".enemy");
let enemy2 = document.querySelector("#enemy2");
let enemy3 = document.querySelector("#enemy3");
let enemy4 = document.querySelector("#enemy4");
const boardGame = document.querySelector(".board-game");
let positionX = object.getBoundingClientRect().x,
  positionY = object.getBoundingClientRect().y;

let positionEnemyX = enemy.getBoundingClientRect().x,
  positionEnemyY = enemy.getBoundingClientRect().y,
  positionEnemy2X = enemy2.getBoundingClientRect().x,
  positionEnemy2Y = enemy2.getBoundingClientRect().y,
  positionEnemy3X = enemy3.getBoundingClientRect().x,
  positionEnemy3Y = enemy3.getBoundingClientRect().y,
  positionEnemy4X = enemy4.getBoundingClientRect().x,
  positionEnemy4Y = enemy4.getBoundingClientRect().y;

let stepMoving = 10;

let music = document.querySelector("#musicplay");
document.documentElement.addEventListener("keydown", (e) => {
  if ((e.keyCode = 13)) music.play();
});
let musicEatingFodd = document.querySelector("#eatingfood");
let loose = document.querySelector("#loose");

let foods = {};
let foodNumber = 40,
  foodCounter = 0;

const looseFunction = () => {
  loose.play();

  setTimeout(() => {
    loose.pause();
  }, 1000);
};

window.addEventListener("keydown", (e) => {
  //follow();
  for (let food in foods) {
    if (
      Math.abs(positionX - foods[food][0]) <= 35 &&
      Math.abs(positionY - foods[food][1]) <= 35
    ) {
      document.getElementById(food).style.display = "none";
      musicEatingFodd.play();
      delete foods[food];
      setTimeout(() => {
        musicEatingFodd.pause();
      }, 1000);
    }
  }

  if (Object.keys(foods).length === 0) {
    alert("You Won!");
    location.reload();
  }
  switch (e.keyCode) {
    case 38:
      if (positionY >= 8) {
        positionY -= stepMoving;
        object.style.top = positionY + "px";
      }
      break;
    case 40:
      if (positionY <= window.innerHeight - 80) {
        positionY += stepMoving;
        object.style.top = positionY + "px";
      }

      break;
    case 37:
      if (positionX >= 8) {
        positionX -= stepMoving;
        object.style.left = positionX + "px";
      }
      break;
    case 39:
      if (positionX <= window.innerWidth - 80) {
        positionX += stepMoving;
        object.style.left = positionX + "px";
      }
      break;
  }
});

const buildFoods = function () {
  let x, y;

  for (let i = 0; i < foodNumber; i++) {
    x = Math.floor(Math.random() * (window.innerWidth - 100)) + 1;
    y = Math.floor(Math.random() * (window.innerHeight - 100)) + 1;
    boardGame.innerHTML += `<div id="food${i}" class='food' style="background-color:rgb(${
      Math.floor(Math.random() * 255) + 1
    },${Math.floor(Math.random() * 255) + 1},${
      Math.floor(Math.random() * 255) + 1
    });left:${x}px;top:${y}px"></div>`;
    foods[`food${i}`] = [x, y];
  }
};

buildFoods();
object = document.querySelector(".object");
enemy = document.querySelector(".enemy");
enemy2 = document.querySelector("#enemy2");
enemy3 = document.querySelector("#enemy3");
enemy4 = document.querySelector("#enemy4");
music = document.querySelector("#musicplay");
musicEatingFodd = document.querySelector("#eatingfood");
loose = document.querySelector("#loose");

const follow = () => {
  let idInterval = setInterval(() => {
    if (
      Math.abs(positionEnemyY - positionY) > 25 ||
      Math.abs(positionEnemyX - positionX) > 25
    ) {
      let differenceX = positionEnemyX - positionX;
      let differenceY = positionEnemyY - positionY;

      if (differenceX < 0) {
        positionEnemyX += 1;
        enemy.style.left = positionEnemyX + "px";
      } else {
        positionEnemyX -= 1;
        enemy.style.left = positionEnemyX + "px";
      }
      if (differenceY < 0) {
        positionEnemyY += 1;
        enemy.style.top = positionEnemyY + "px";
      } else {
        positionEnemyY -= 1;
        enemy.style.top = positionEnemyY + "px";
      }
    } else {
      clearInterval(idInterval);
      looseFunction();
      alert("Game Over");

      location.reload();
    }
  }, 15);
};

const follow2 = () => {
  let idInterval2 = setInterval(() => {
    if (
      Math.abs(positionEnemy2Y - positionY) > 25 ||
      Math.abs(positionEnemy2X - positionX) > 25
    ) {
      let differenceX = positionEnemy2X - positionX;
      let differenceY = positionEnemy2Y - positionY;

      if (differenceX < 0) {
        positionEnemy2X += 1;
        enemy2.style.left = positionEnemy2X + "px";
      } else {
        positionEnemy2X -= 1;
        enemy2.style.left = positionEnemy2X + "px";
      }
      if (differenceY < 0) {
        positionEnemy2Y += 1;
        enemy2.style.top = positionEnemy2Y + "px";
      } else {
        positionEnemy2Y -= 1;
        enemy2.style.top = positionEnemy2Y + "px";
      }
    } else {
      clearInterval(idInterval2);
      looseFunction();
      alert("Game Over");
      location.reload();
    }
  }, 15);
};
const follow3 = () => {
  let idInterval3 = setInterval(() => {
    if (
      Math.abs(positionEnemy3Y - positionY) > 25 ||
      Math.abs(positionEnemy3X - positionX) > 25
    ) {
      let differenceX = positionEnemy3X - positionX;
      let differenceY = positionEnemy3Y - positionY;

      if (differenceX < 0) {
        positionEnemy3X += 1;
        enemy3.style.left = positionEnemy3X + "px";
      } else {
        positionEnemy3X -= 1;
        enemy3.style.left = positionEnemy3X + "px";
      }
      if (differenceY < 0) {
        positionEnemy3Y += 1;
        enemy3.style.top = positionEnemy3Y + "px";
      } else {
        positionEnemy3Y -= 1;
        enemy3.style.top = positionEnemy3Y + "px";
      }
    } else {
      clearInterval(idInterval3);
      looseFunction();
      alert("Game Over");
      location.reload();
    }
  }, 15);
};

const follow4 = () => {
  let idInterval = setInterval(() => {
    if (
      Math.abs(positionEnemy4Y - positionY) > 25 ||
      Math.abs(positionEnemy4X - positionX) > 25
    ) {
      let differenceX = positionEnemy4X - positionX;
      let differenceY = positionEnemy4Y - positionY;

      if (differenceX < 0) {
        positionEnemy4X += 1;
        enemy4.style.left = positionEnemy4X + "px";
      } else {
        positionEnemy4X -= 1;
        enemy4.style.left = positionEnemy4X + "px";
      }
      if (differenceY < 0) {
        positionEnemy4Y += 1;
        enemy4.style.top = positionEnemy4Y + "px";
      } else {
        positionEnemy4Y -= 1;
        enemy4.style.top = positionEnemy4Y + "px";
      }
    } else {
      clearInterval(idInterval);
      looseFunction();
      alert("Game Over");
      location.reload();
    }
  }, 15);
};

follow();
follow2();
follow3();
follow4();
