const 바디마진 = document.querySelector(".바디마진")
const 이름묻기 = document.querySelector(".이름묻기")
const 이름묻기폼 = 이름묻기.querySelector("form")
const 이름묻기인풋 = 이름묻기폼.querySelector("input")
const 이름 = 메인섹션.querySelector(".이름")


// 이름을 쓰고, 엔터를 누르면, 해결!!
// 이름을 띄워줘. 해결!!
// 이름 묻는 화면은 안보이게 해결!!
// 로컬스토리지에 이름 저장해줘 해결!!
// 맨 처음에 이름이 로컬 스토리지에 있는지 물어봐줘 
// 있으면 4번5번 실행해

// 없으면 이름쓰게해

if (localStorage.getItem('이름') !== null) {
    이름있을때할일();
} else {
    // 이름없을 때 할일
    이름묻기폼.addEventListener("submit", 이름들어올때할일);
}

function 이름있을때할일() {
    이름묻기.classList.add("hide");
    이름.innerText = localStorage.getItem("이름");
    바디마진.classList.remove("hide");
}

function 이름들어올때할일(e) {
    e.preventDefault();
    localStorage.setItem("이름", 이름묻기인풋.value);
    이름있을때할일();
}
