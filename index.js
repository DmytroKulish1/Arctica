const cards = [...document.querySelectorAll(".col")];
const topBlock = document.getElementById("card");
cards.forEach(item => item.addEventListener("click", function() {
  topBlock.innerHTML = item.innerHTML;
}))