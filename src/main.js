import './main.css';

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// whoami-микроинтеракция: hover/focus бейджа печатает ответ по кругу.
const badgeEl = document.querySelector(".whoami-badge");
const whoamiOut = document.getElementById("whoami-out");
if (badgeEl && whoamiOut) {
  const answers = ["koljasha", "arch linux user", "open source", "gigaam author"];
  const reduceMotionOut = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let answerIndex = 0;
  let typeTimer = 0;

  const stopTyping = () => {
    window.clearInterval(typeTimer);
  };

  const renderOut = (text) => {
    whoamiOut.textContent = text;
    const caret = document.createElement("span");
    caret.className = "whoami-out-caret";
    caret.setAttribute("aria-hidden", "true");
    caret.textContent = "▊";
    whoamiOut.appendChild(caret);
  };

  const showAnswer = () => {
    const answer = answers[answerIndex];
    answerIndex = (answerIndex + 1) % answers.length;
    whoamiOut.classList.add("is-visible");
    stopTyping();
    if (reduceMotionOut) {
      whoamiOut.textContent = answer;
      return;
    }
    let i = 0;
    renderOut("");
    typeTimer = window.setInterval(() => {
      i += 1;
      if (i >= answer.length) {
        renderOut(answer);
        stopTyping();
        return;
      }
      renderOut(answer.slice(0, i));
    }, 35);
  };

  const hideAnswer = () => {
    stopTyping();
    whoamiOut.classList.remove("is-visible");
  };

  badgeEl.addEventListener("mouseenter", showAnswer);
  badgeEl.addEventListener("focus", showAnswer);
  badgeEl.addEventListener("mouseleave", hideAnswer);
  badgeEl.addEventListener("blur", hideAnswer);
}

// Spotlight-блик за курсором: координаты в CSS-переменные --mx/--my.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (!reduceMotion && finePointer) {
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    });
  });
}
