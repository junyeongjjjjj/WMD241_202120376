let elemBody = document.body;
elemBody.style.backgroundColor = "#00ff00";
let.container = document.querySelectorAll;
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListener("click", function () {
    container.dataset.selected = evt.currentTarget.dated.nth;
  });
}
