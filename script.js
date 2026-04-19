function breakTheText() {
  let pft_text = document.querySelector(".pft").textContent;
  let sep_pft = pft_text.split("");

  let spanText = "";

  let spanDivider = pft_text.length / 2;
  sep_pft.forEach((elem, index) => {
    if (index < spanDivider) {
      spanText += `<span class="ft">${elem}</span>`;
    } else {
      spanText += `<span class="bt">${elem}</span>`;
    }
  });
  document.querySelector(".pft").innerHTML = spanText;
}
breakTheText();

gsap.from(".pft .ft", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from(".pft .bt", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
