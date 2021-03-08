const objectText = document.getElementsByClassName("typeEffect")

objectText.innerHTML = objectText.textContent.replace(/\S/g, "<span>$&</span>")

let delay = 0
document.querySelectorAll('span').forEach((span, index)=>{
    delay += 0.1

    span.style.setProperty('--delay', `${delay}s`)
})