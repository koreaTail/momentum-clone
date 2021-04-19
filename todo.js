// 할일버튼 누르면, 숨겨진 할일박스가 나오도록

const 할일버튼 = document.querySelector(".할일버튼")
const 할일박스 = document.querySelector(".할일박스")

할일버튼.addEventListener("click", 할일박스버튼작동)

function 할일박스버튼작동() {
    할일박스.classList.toggle("hide")
}