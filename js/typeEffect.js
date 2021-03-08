const objectText = document.getElementsByClassName("typeEffect")

for (let i = 0; i< objectText.length; i++){
    objectText[i].innerHTML = objectText[i].textContent.replace(/\S/g, "<span>$&</span>")
}


let delay = 0
document.querySelectorAll('span').forEach((span, index)=>{
    delay += 0.1

    span.style.setProperty('--delay', `${delay}s`)
})