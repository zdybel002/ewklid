let form = document.querySelectorAll(".input");
let futter_btm = document.querySelector(".btm-footer");

futter_btm.onclick = function () {
  if (form[1].value != 0 && form[2].value != 0 && form[3].value != 0)
    for (let i = 0; i < form.length; i++) {
      form[i].value = "";
    }
};

let buttons = document.querySelectorAll(".sectionQestionIcon");
let paragraphs = document.querySelectorAll(".sectionQustionHidePagraf");

buttons.forEach((button, cout) => {
  button.onclick = function () {
    paragraphs[cout].classList.toggle("classOn");
  };
});

let tabs = document.querySelectorAll(".tabs_btn");
let img = document.querySelector(".sectionWorkImg");
// let heading = document.querySelectorAll(".sectionWorkHeading");

tabs.forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;
    console.log(path);

    // usuwamy clase active ze wszystkich elementów
    document
      .querySelectorAll(".sectionWorkContentRight")
      .forEach(function (tabContent) {
        console.log(9);
        tabContent.classList.remove("paragfActive");
      });

    // dodajemy active do konkretnego elementu
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("paragfActive");

    img.src = `img/Rectangle ${path}.svg`;
  });
});
