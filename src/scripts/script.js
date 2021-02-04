const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");
  if (header.classList.contains("open")) {
    //close hamburger toggle
    header.classList.remove("open");
  } else {
    //open hamburger toggle
    header.classList.add("open");
  }
});
