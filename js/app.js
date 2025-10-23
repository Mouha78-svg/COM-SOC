// ********** set date ************
// select span
// const date = (document.querySelector(".date").innerHTML =
//   new Date().getFullYear());
const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// btn select
const btnSelect = document.querySelector(".btn-select");
const suitsSelect = document.querySelector(".suits");
btnSelect.addEventListener("click", function () {
  suitsSelect.classList.toggle("visible");
  // console.log(btnSelect);
  // console.log(suitsSelect);
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
