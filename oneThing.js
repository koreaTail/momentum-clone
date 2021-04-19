const oneThingDiv = document.querySelector(".oneThing")
const oneThing = oneThingDiv.querySelector(".list")
const 핵심일질문 = 메인섹션.querySelector(".핵심일질문")
const 핵심일폼 = 메인섹션.querySelector(".핵심일폼")
const 핵심일인풋 = 핵심일폼.querySelector(".핵심일인풋")

const oneThingModify = oneThingDiv.querySelector(".oneThing-Modify")
const oneThingLabel = oneThingModify.querySelector("label")
const oneThingCheckIcon = oneThingModify.querySelector("i")

const oneThingCloseBtn = oneThingModify.querySelector("button")
const compliment = oneThingDiv.querySelector(".compliment")


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


    if (localStorage.getItem("oneThingCheck") !== null) {
        체크표시하기();
    }
}


function 핵심일폼에서밋되면할일(e) {
    e.preventDefault();
    localStorage.setItem("oneThing", 핵심일인풋.value)
    원띵저장되어있으면할일();
}

function 체크표시하기() {
    oneThingCheckIcon.classList.remove("hide")
    oneThing.classList.add("strikethrough")
    oneThingCloseBtn.classList.add("rotate")
}

// 체크박스를 누르면
// 체크모양이 보이도록
// 다시 누르면 안보이도록

// 완료선(취소선) 추가


// 체크가 되어있는 상태를 저장해야해
// 원띵이 체크되어있다고 입력하고, 불러와도 되고 '''이걸로 고고
// 원띵 today에 같이 추가해서 forecah 로 불러와도 돼 '''쉽게가자 이건 말고

// 체크 할 때 체크했다고 저장
// 체크 취소하면 체크했다고 저장한거 삭제
// 처음시작하면 체크했다고 저장한 기록 있으면 체크해줘
// 없으면 말고

// 좀 바꿔보자.
// 로컬에 저장된걸 불러오는 방식으로
// 클릭되면, 로컬에 저장해. 그리고 불러와.

oneThingLabel.addEventListener("click", 체크표시핸들러)

function 체크표시핸들러() {
    if (localStorage.getItem("oneThingCheck") == null) {
        // 체크표시하기
        localStorage.setItem("oneThingCheck", true)
        체크표시하기();
        칭찬해주기();
    } else {
        // 체크없애기
        체크표시해제하기();
    }
}

function 체크표시해제하기() {
    oneThingCheckIcon.classList.add("hide")
    oneThing.classList.remove("strikethrough")
    oneThingCloseBtn.classList.remove("rotate")
    localStorage.removeItem("oneThingCheck")
}

// 엑스버튼을 누르면
// 원띵 로컬에서사라지게
// 원띵체크도 로컬에서 사라지게


oneThingCloseBtn.addEventListener("click", 닫기버튼핸들러)

function 닫기버튼핸들러() {
    localStorage.removeItem("oneThing")

    핵심일질문.classList.remove("hide");
    핵심일폼.classList.remove("hide");
    oneThingDiv.classList.add("hide");
    체크표시해제하기();

    핵심일인풋.value = ``;
}


// // 마우스 오버시  아이콘 보이게
oneThingDiv.addEventListener("mouseover", 마우스오버핸들러)
oneThingDiv.addEventListener("mouseout", 마우스아웃핸들러)

function 마우스오버핸들러() {
    oneThingLabel.classList.remove("hide")
    oneThingCloseBtn.classList.remove("hide")
}

function 마우스아웃핸들러() {

    oneThingLabel.classList.add("hide")
    oneThingCloseBtn.classList.add("hide")
}



// 완료 누르면, 말 나오게
function 칭찬해주기() {
    const ran = Math.floor(Math.random() * 4)
    const 칭찬말보이기 = compliment.children[ran]

    칭찬말보이기.classList.remove("hide")

    function 칭찬말숨기기() {
        칭찬말보이기.classList.add("hide")
    }

    setTimeout(칭찬말숨기기, 1500)
}