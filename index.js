const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".color__menu--hide");
const colorHome = document.querySelector(".color__home");
const colorRed = document.querySelector(".color__red");
const colorOrange = document.querySelector(".color__orange");
const colorYellow = document.querySelector(".color__yellow");
const colorGreen = document.querySelector(".color__green");
const colorBlue = document.querySelector(".color__blue");
const colorPurple = document.querySelector(".color__purple");
const text = document.querySelector(".text");

const showMenu = () => {
  menu.classList.remove("color__menu--hide");
  menu.classList.add("color__menu");
};
const hideMenu = () => {
  menu.classList.remove("color__menu");
  menu.classList.add("color__menu--hide");
};

const setColor = (color) => {
  document
    .querySelector("body")
    .classList.remove(
      "color__home",
      "color__red",
      "color__orange",
      "color__yellow",
      "color__green",
      "color__blue",
      "color__purple"
    );
  document.querySelector("body").classList.add(color);
};

const setText = (e) => {
  text.innerHTML = `Background color selected: ${e}`;
};

hamburger.addEventListener("mouseover", showMenu);
hamburger.addEventListener("mouseout", hideMenu);

const keyHandler = (e) => {
  switch (e) {
    case "1":
      colorHandler("gray");
      break;
    case "2":
      colorHandler("red");
      break;
    case "3":
      colorHandler("orange");
      break;
    case "4":
      colorHandler("yellow");
      break;
    case "5":
      colorHandler("green");
      break;
    case "6":
      colorHandler("blue");
      break;
    case "7":
      colorHandler("purple");
      break;
    default:
      break;
  }
};

const colorHandler = (setEvent) => {
  switch (setEvent) {
    case "gray":
      setColor("color__home");
      hideMenu();
      setText("gray");
      break;
    case "red":
      setColor("color__red");
      hideMenu();
      setText("red");
      break;
    case "orange":
      setColor("color__orange");
      hideMenu();
      setText("orange");
      break;
    case "yellow":
      setColor("color__yellow");
      hideMenu();
      setText("yellow");
      break;
    case "green":
      setColor("color__green");
      hideMenu();
      setText("green");
      break;
    case "blue":
      setColor("color__blue");
      hideMenu();
      setText("blue");
      break;
    case "purple":
      setColor("color__purple");
      hideMenu();
      setText("purple");
      break;
    default:
      setColor("color__home");
      hideMenu();
      setText("gray");
      break;
  }
};

colorHandler();

colorHome.addEventListener("click", function () {
  colorHandler("gray");
});
colorRed.addEventListener("click", function () {
  colorHandler("red");
});
colorOrange.addEventListener("click", function () {
  colorHandler("orange");
});
colorYellow.addEventListener("click", function () {
  colorHandler("yellow");
});
colorGreen.addEventListener("click", function () {
  colorHandler("green");
});
colorBlue.addEventListener("click", function () {
  colorHandler("blue");
});
colorPurple.addEventListener("click", function () {
  colorHandler("purple");
});
document.addEventListener("keydown", (event) => {
  keyHandler(event.key);
  console.log(event.key);
});
