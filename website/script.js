const queHeaders = document.querySelectorAll(".question-bar");
const answers = document.querySelectorAll(".answer");

queHeaders.forEach((queHeader) => {
  queHeader.addEventListener("click", () => {
    let answer = queHeader.parentElement.lastElementChild;
    let icon = queHeader.lastElementChild.firstElementChild;
    if (answer.classList.length >= 2) {
      answer.classList.remove("hide");
      icon.src = "../assets/images/icon-minus.svg";
    } else {
      answer.classList.add("hide");
      icon.src = "../assets/images/icon-plus.svg";
    }
  });
});
