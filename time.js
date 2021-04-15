const 메인섹션 = document.querySelector(".메인섹션")
const 현재시간 = 메인섹션.querySelector(".현재시간")

function clockHandler() {
    if (new Date().getHours() < 10 && new Date().getMinutes() < 10) {
        현재시간.innerHTML = `0${Date().getHours()}:0${new Date().getMinutes()}`
    } else if (new Date().getHours() < 10) {
        현재시간.innerHTML = `0${Date().getHours()}:${new Date().getMinutes()}`
    } else if (new Date().getMinutes() < 10) {
        현재시간.innerHTML = `${Date().getHours()}:0${new Date().getMinutes()}`
    } else {
        현재시간.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}`
    }
}

setInterval(clockHandler, 1000);