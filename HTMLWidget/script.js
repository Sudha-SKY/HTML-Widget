"use strict";
const ratingEl = document.getElementById("ratingId");
const starsEl = document.getElementsByTagName("i");

ratingEl.addEventListener("click", activateStar);

function activateStar(e) {
  console.log(starsEl);
  console.log(ratingEl);

  const star = e.target;
  console.log(star);
  for (let index = 0; index < starsEl.length; index++) {
    //Check for current active star
    if (starsEl[index] === star) {
      let countAdd = index;
      let countRemove = index + 1;
      //add active class
      while (countAdd >= 0) {
        starsEl[countAdd].classList.add("active");
        countAdd--;
      }
      //remove active class
      while (countRemove < 5) {
        console.log(starsEl[countRemove]);
        if (starsEl[countRemove].classList.contains("active"))
          starsEl[countRemove].classList.remove("active");
        countRemove++;
      }
    }
  }
}
