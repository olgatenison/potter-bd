document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const fallback = document.getElementById("heroFallback");

  if (!video || !fallback) return;

  const showFallback = () => {
    fallback.classList.remove("hidden");
    video.classList.add("hidden");
  };

  const hideFallback = () => {
    fallback.classList.add("hidden");
    video.classList.remove("hidden");
  };

  // По умолчанию показываем fallback, пока видео не готово
  showFallback();

  // Если видео реально загружается/можно воспроизводить — показываем видео
  video.addEventListener("canplay", () => {
    hideFallback();
    // иногда autoplay блокируется — пробуем, но не ломаем верстку
    video.play().catch(() => {
      // если хочешь в таком случае показывать картинку — раскомментируй:
      // showFallback();
    });
  });

  // Если ошибка — оставляем картинку
  video.addEventListener("error", showFallback);

  // Таймаут-подстраховка
  setTimeout(() => {
    if (video.readyState < 2) showFallback();
  }, 2500);
});
