(function () {
  const KEYS = {
    p1: { answer: "caution", tip: "CAUTION is the best teaching score: uncontrolled diabetes + smoking + high smile push you toward medical optimization, possible staging, and careful FP3/transition planning—not a casual same-day GO." },
    p2: { answer: "go", tip: "GO (with disciplined protocol): healthy, good bone, low smile, motivated—classic All-on-X immediate-load candidate if torque/ISQ confirm and conversion is ready." },
    p3: { answer: "no", tip: "NO for immediate fixed full-arch today: severe untreated OSA + extreme bruxism + poor hygiene compliance. Treat airway / habits first; consider overdenture or staged after risk reduction." }
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-patient]").forEach((card) => {
      const id = card.getAttribute("data-patient");
      const fb = card.querySelector(".score-feedback");
      card.querySelectorAll(".score-btns button").forEach((btn) => {
        btn.addEventListener("click", () => {
          card.querySelectorAll(".score-btns button").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          const pick = btn.getAttribute("data-score");
          const meta = KEYS[id];
          if (!fb || !meta) return;
          fb.classList.add("show");
          fb.classList.remove("correct", "partial", "wrong");
          if (pick === meta.answer) {
            fb.classList.add("correct");
            fb.innerHTML = "<strong>Aligned with teaching key.</strong> " + meta.tip;
          } else {
            fb.classList.add(pick === "caution" || meta.answer === "caution" ? "partial" : "wrong");
            fb.innerHTML = "<strong>Teaching key: " + meta.answer.toUpperCase() + ".</strong> " + meta.tip;
          }
        });
      });
    });
  });
})();
