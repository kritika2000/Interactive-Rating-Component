let ratingItems = document.querySelectorAll(".ratingContainer div");
let thankYouContainer = document.querySelector(".thankYouContainer");
let displayRating = document.createElement("div");
let ratingText = "";
let isAnyItemSelected = false;

function toggleColor(classList) {
  !classList.contains("selected")
    ? classList.add("selected")
    : classList.remove("selected");
}

function removeOtherRatingColor(i) {
  for (let j = 0; j < ratingItems.length; j++) {
    ratingItems[j].classList.remove("selected");
  }
}

for (let i = 0; i < ratingItems.length; i++) {
  let classList = ratingItems[i].classList;

  ratingItems[i].addEventListener("click", () => {
    removeOtherRatingColor(i);
    toggleColor(classList);
    let rating = ratingItems[i].querySelector("span").textContent;
    ratingText = `You Selected ${rating} out of 5`;
  });
}

let submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".thankYouContainer").style.display = "flex";
  displayRating.textContent = ratingText;
  thankYouContainer.insertBefore(
    displayRating,
    document.querySelector(".thankYouDiv")
  );
});
