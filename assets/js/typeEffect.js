const objectText = document.getElementById("typeEffect");
// console.log(objectText)

objectText.innerHTML = objectText.textContent
  .replace(/\S/g, "<span>$&</span>")
  .replace(/\s/g, "<span>&nbsp;</span>");

let delay = 0;
document.querySelectorAll("span").forEach((span, index) => {
  delay += 0.1;
  if (index === 10) delay += 0.3
  span.style.setProperty("--delay", `${delay}s`);
});

objectText.addEventListener('animationend', (e) => {
    if (e.target === document.querySelector('#typeEffect span:last-child')) {
        console.log(e.target)
      objectText.classList.add('ended')
    }
  })