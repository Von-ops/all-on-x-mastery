(function () {
  const ANSWERS = {
    q1: { correct: "b", explain: "Immediate loading (ITI definition) means the prosthesis is connected in occlusion within 1 week of implant placement. Same-day conversion is common clinically but the formal window is ≤7 days." },
    q2: { correct: "c", explain: "ITI consensus literature commonly cites insertion torque ≥30 Ncm and ISQ ≥60 as inclusion criteria used in many immediate-load full-arch studies. Confirm primary stability for each implant before loading." },
    q3: { correct: "a", explain: "FP1 replaces crown contours only (natural soft tissue). FP2 has longer crowns (partial root form). FP3 replaces teeth + gingival tissues with prosthetic pink—most typical for All-on-X hybrids after ridge reduction." },
    q4: { correct: "d", explain: "Severe untreated parafunction, uncontrolled medical disease, and inability to achieve primary stability are classic reasons to redirect to staged or removable options. Wanting fixed teeth alone does not make someone a GO." },
    q5: { correct: "b", explain: "All-on-4 classically uses two anterior axial and two posterior distally tilted implants to increase A-P spread, avoid anatomic structures, and support immediate function—often reducing grafting needs." },
    q6: { correct: "c", explain: "Restorative space, smile line / transition zone, lip support, and hygiene access drive FP design and whether bone reduction is needed. Implant brand is secondary to the prosthetic blueprint." },
    q7: { correct: "a", explain: "Long-term Maló series and multiple reviews report high implant survival (often mid-90%s to high-90%s) for All-on-4 with immediate function when case selection and primary stability are respected." },
    q8: { correct: "b", explain: "Simultaneous major grafting / sinus elevation is generally a relative contraindication for immediate loading of a full-arch fixed provisional (ITI). Stage or choose a graftless plan when possible." },
    q9: { correct: "c", explain: "Overdentures remain excellent when bone is limited, patient prefers removable, cost/maintenance favor locators, or medical/parafunction risk makes fixed immediate load unwise." },
    q10: { correct: "d", explain: "All-on-XYZ thinking plans implants, bone (volume/quality/reduction), AND soft tissue (biotype, keratinized tissue, transition) together—not implants alone." }
  };

  function grade() {
    let score = 0;
    const total = Object.keys(ANSWERS).length;
    Object.keys(ANSWERS).forEach((qid) => {
      const block = document.getElementById(qid);
      if (!block) return;
      const chosen = block.querySelector('input[type="radio"]:checked');
      const explain = block.querySelector(".quiz-explain");
      const labels = block.querySelectorAll(".quiz-options label");
      labels.forEach((lab) => {
        lab.classList.remove("correct-reveal", "wrong-reveal");
        const inp = lab.querySelector("input");
        if (inp && inp.value === ANSWERS[qid].correct) lab.classList.add("correct-reveal");
      });
      if (chosen) {
        const lab = chosen.closest("label");
        if (chosen.value === ANSWERS[qid].correct) {
          score++;
        } else if (lab) {
          lab.classList.add("wrong-reveal");
        }
      }
      if (explain) {
        explain.textContent = ANSWERS[qid].explain;
        explain.classList.add("show");
      }
    });
    const result = document.getElementById("quiz-result");
    const big = document.getElementById("score-big");
    const msg = document.getElementById("score-msg");
    if (result && big && msg) {
      result.classList.add("show");
      big.textContent = score + " / " + total;
      const pct = Math.round((score / total) * 100);
      if (pct >= 80) msg.textContent = "Strong foundation — ready to drill into Week 2 surgical planning.";
      else if (pct >= 60) msg.textContent = "Solid start. Revisit FP concepts, red flags, and ITI loading criteria, then retry.";
      else msg.textContent = "Review the Week 1 module and study sheet, then retake. Case selection is non-negotiable.";
      result.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    try { localStorage.setItem("aox-week1-quiz", JSON.stringify({ score, total, at: Date.now() })); } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("grade-quiz");
    const reset = document.getElementById("reset-quiz");
    if (btn) btn.addEventListener("click", grade);
    if (reset) reset.addEventListener("click", () => {
      document.querySelectorAll('.quiz-options input').forEach((i) => { i.checked = false; });
      document.querySelectorAll(".quiz-explain").forEach((e) => { e.classList.remove("show"); e.textContent = ""; });
      document.querySelectorAll(".quiz-options label").forEach((l) => l.classList.remove("correct-reveal", "wrong-reveal"));
      const result = document.getElementById("quiz-result");
      if (result) result.classList.remove("show");
    });
  });
})();
