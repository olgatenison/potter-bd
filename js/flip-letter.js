document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".js-flip-card");
  if (!card) return;

  let flipped = false;

  card.addEventListener("click", () => {
    flipped = !flipped;
    card.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
  });
});
