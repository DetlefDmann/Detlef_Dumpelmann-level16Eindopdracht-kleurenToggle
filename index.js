const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".color__menu--hide");
const colorHome = document.querySelector(".color__home");
const colorRed = document.querySelector(".color__red");
const colorOrange = document.querySelector(".color__orange");
const colorYellow = document.querySelector(".color__yellow");
const colorGreen = document.querySelector(".color__green");
const colorBlue = document.querySelector(".color__blue");
const colorPurple = document.querySelector(".color__purple");

const showMenu = () => {
  menu.classList.remove("color__menu--hide");
  menu.classList.add("color__menu");
  // clearTimeout(delayhideMenu);
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

//let delayhideMenu = () => setTimeout(hideMenu, 1000);

hamburger.addEventListener("mouseover", showMenu);
hamburger.addEventListener("mouseout", hideMenu);
menu.addEventListener("mouseover", showMenu);
menu.addEventListener("mouseout", hideMenu);

colorHome.addEventListener("click", function () {
  setColor("color__home");
  hideMenu();
});
colorRed.addEventListener("click", function () {
  setColor("color__red");
  hideMenu();
});
colorOrange.addEventListener("click", function () {
  setColor("color__orange");
  hideMenu();
});
colorYellow.addEventListener("click", function () {
  setColor("color__yellow");
  hideMenu();
});
colorGreen.addEventListener("click", function () {
  setColor("color__green");
  hideMenu();
});
colorBlue.addEventListener("click", function () {
  setColor("color__blue");
  hideMenu();
});
colorPurple.addEventListener("click", function () {
  setColor("color__purple");
  hideMenu();
});
