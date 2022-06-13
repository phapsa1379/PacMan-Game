let object = document.querySelector(".object");
let enemy = document.querySelector(".enemy");
const boardGame = document.querySelector(".board-game");
let positionX = object.getBoundingClientRect().x,
  positionY = object.getBoundingClientRect().y;

let positionEnemyX = enemy.getBoundingClientRect().x,
  positionEnemyY = enemy.getBoundingClientRect().y;

let stepMoving = 40;

let foods = {};

const setDelay = (time) => {
  setTimeout(() => {}, time * 1000);
};

window.addEventListener("keydown", (e) => {
  //follow();
  for (let food in foods) {
    if (
      positionX >= foods[food][0] - 35 &&
      positionX <= foods[food][0] + 35 &&
      positionY >= foods[food][1] - 35 &&
      positionY <= foods[food][1] + 35
    ) {
      document.getElementById(food).style.display = "none";
    }
  }
  switch (e.keyCode) {
    case 38:
      if (positionY >= 30) {
        positionY -= stepMoving;
        object.style.top = positionY + "px";
      }
      break;
    case 40:
      if (positionY <= window.innerHeight - 30) {
        positionY += stepMoving;
        object.style.top = positionY + "px";
      }

      break;
    case 37:
      if (positionX >= 30) {
        positionX -= stepMoving;
        object.style.left = positionX + "px";
      }
      break;
    case 39:
      if (positionX <= window.innerWidth - 30) {
        positionX += stepMoving;
        object.style.left = positionX + "px";
      }
      break;
  }
});

const buildFoods = function () {
  let x, y;

  for (let i = 0; i < 20; i++) {
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
// enemy.style.top = enemy.getBoundingClientRect().y;
// enemy.style.left = enemy.getBoundingClientRect().x;
// object.style.left = object.getBoundingClientRect().x;
// object.style.top = object.getBoundingClientRect().y;

const follow = () => {
  let idInterval = setInterval(() => {
    if (positionEnemyY !== positionY || positionEnemyX !== positionX) {
      // setTimeout(() => {
      console.log("yook");
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
      alert("you are loose");
    }
  }, 20);
};
follow();