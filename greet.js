const 인사말 = 메인섹션.querySelector(".인사말")


function 인사말체크() {
    if (new Date().getHours() > 21) {
        인사말.innerHTML = "Good night,"
    } else if (new Date().getHours() > 17) {
        인사말.innerHTML = "Good evening,"
    } else if (new Date().getHours() > 11) {
        인사말.innerHTML = "Good afternoon,"
    } else if (new Date().getHours() > 4) {
        인사말.innerHTML = "Good morning,"
    } else {
        인사말.innerHTML = "Good night,"
    }
}

setInterval(인사말체크, 60000);