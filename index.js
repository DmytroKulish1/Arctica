const cards = [...document.querySelectorAll(".col-sm-12")];
const topBlock = document.getElementById("card");
cards.forEach(item => item.addEventListener("click", function() {
  topBlock.innerHTML = item.innerHTML;
}))
