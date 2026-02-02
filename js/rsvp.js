document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rsvpForm");
  const btn = document.getElementById("rsvpBtn");

  const modal = document.getElementById("sadModal");
  const overlay = document.getElementById("sadOverlay");
  const closeBtn = document.getElementById("sadClose");

  const TG_INVITE_LINK = "https://t.me/+-oMsPqTOxb05ODQy"; // твоя ссылка

  const openModal = () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (overlay) overlay.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = form.querySelector('input[name="presence"]:checked')?.value;
    if (!value) return;

    // имитация “отправки” (если нужно — можно добавить реальную запись в Google Sheets)
    btn.disabled = true;
    btn.textContent = "Готово…";

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Відправити";

      if (value === "yes") {
        window.location.href = TG_INVITE_LINK; // добавляйся в группу
      } else {
        openModal(); // “як шкода”
      }
    }, 250);
  });
});
