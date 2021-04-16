const oneThingDiv = document.querySelector(".oneThing")
const oneThing = oneThingDiv.querySelector(".list")
const 핵심일질문 = 메인섹션.querySelector(".핵심일질문")
const 핵심일폼 = 메인섹션.querySelector(".핵심일폼")
const 핵심일인풋 = 핵심일폼.querySelector(".핵심일인풋")


// 핵심일폼에 서밋되면 -1
// 일단 새로고침 막고 -2
// 질문과 인풋 숨기고 -3
// 원띵디브 보여주고  -4
// 원띵 로컬스토리지에 저장하고 -5
// 저장된 원띵 보여주고 -6

// 처음에 시작하면 저장된 원띵있는지 확인하고
// 있으면 3,4,6 실행
// 없으면 1 실행

if (localStorage.getItem("oneThing") !== null) {
    원띵저장되어있으면할일();
} else {
    핵심일폼.addEventListener("submit", 핵심일폼에서밋되면할일)
}

function 원띵저장되어있으면할일() {
    핵심일질문.classList.add("hide");
    핵심일폼.classList.add("hide");
    oneThingDiv.classList.remove("hide");
    oneThing.innerText = localStorage.getItem("oneThing")
}

function 핵심일폼에서밋되면할일(e) {
    e.preventDefault();
    localStorage.setItem("oneThing", 핵심일인풋.value)
    원띵저장되어있으면할일();
}

