import people from "../data.js";
// ********** set date ************
// select span
// const date = (document.querySelector(".date").innerHTML =
//   new Date().getFullYear());
const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
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
container.innerHTML = people
  .map((person, slideindex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideindex === 0) {
      position = "active";
    }
    if (slideindex === people.length - 1) {
      position = "last";
    }
    return `
    <article class="slide ${position}">
           <img src="${img}" class="slide-img" alt="${name}">
           <h4 >${name}</h4>
           <p class="title-slide">${job}</p>
           <p class="text-slide">
           <span><i class="fa fa-phone"></i></span>
            ${text}
           </p>
           <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
           </div>
          </article>
  `;
  })
  .join(" ");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
nextBtn.addEventListener("click", () => {
  startSlider();
});
