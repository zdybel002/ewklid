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
