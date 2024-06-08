document.querySelectorAll(".circle").forEach((elem) => {
  var dots = parseInt(elem.getAttribute("data-dots"), 10);
  var marked = parseInt(elem.getAttribute("data-percent"), 10);
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < percent; i++) {
    points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  pointsMarked.forEach((point, index) => {
    if (index < percent) {
      point.classList.add("marked");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input-custom");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});

var mixer = mixitup(".portofolio-gallery");

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// let menuIcon = document.querySelector("#menu");
// let navbar = document.querySelector(".bar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark");
//   navbar.classList.toggle("active");
// };

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       // Fixed syntax error here
//       navLinks.forEach((links) => {
//         // Fixed syntax error here
//         links.classList.remove("active");
//       });
//       document
//         .querySelector("header nav a[href*=" + id + "]")
//         .classList.add("active");
//     }
//   });
// };

// let header = document.querySelector("header");
// header.classList.toggle("sticky", window.scrollY > 100);

// menuIcon.classList.remove("fa-xmark");
// bar.classList.remove("active");

let menuIcon = document.getElementById("menu");
let navbar = document.querySelector(".bar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};
