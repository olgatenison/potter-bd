document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".js-play-music");
  const icon = document.querySelector(".music-icon");
  if (!btn) return;

  const audio = new Audio("img/harry.mp3");
  audio.loop = true;

  let isPlaying = false;

  const setPlayUI = () => {
    if (icon) icon.src = "img/icons/play.svg";
    btn.classList.remove("ring-2", "ring-[#3a2a1c]/40");
  };

  const setPauseUI = () => {
    if (icon) icon.src = "img/icons/pause.svg";
    btn.classList.add("ring-2", "ring-[#3a2a1c]/40");
  };

  setPlayUI();

  btn.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await audio.play();
        isPlaying = true;
        setPauseUI();
      } else {
        audio.pause();
        isPlaying = false;
        setPlayUI();
      }
    } catch (e) {
      // Автовоспроизведение может быть заблокировано — но по клику обычно ок
      console.log("Audio play blocked:", e);
    }
  });

  // если музыка закончится/остановится неожиданно
  audio.addEventListener("pause", () => {
    if (isPlaying) return;
    setPlayUI();
  });
});
