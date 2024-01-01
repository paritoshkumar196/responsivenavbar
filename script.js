let hamburger = document.querySelector(".hamburger");
let navmenu = document.querySelector(".navmenu");
let navitem = document.querySelectorAll(".navitem");

let flag = 0;

function closemenu() {
  navmenu.style.left = "-100%";
  flag = 0;
  hamburger.innerHTML = "&#9776";
}

hamburger.addEventListener("click", function () {
  if (flag === 0) {
    navmenu.style.position = "fixed";
    navmenu.style.left = "0";
    hamburger.innerHTML = "&#10006";
    flag = 1;
  } else {
    closemenu();
  }
});
navitem.forEach(function (navitem) {
  navitem.addEventListener("click", function () {
    closemenu();
  });
});
