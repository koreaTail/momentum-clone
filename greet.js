const 인사 = 메인섹션.querySelector(".인사")


if (new Date().getHours() > 21) {
    인사.innerHTML = "Good night"
} else if (new Date().getHours() > 17) {
    인사.innerHTML = "Good evening"
} else if (new Date().getHours() > 11) {
    인사.innerHTML = "Good afternoon"
} else if (new Date().getHours() > 4) {
    인사.innerHTML = "Good morning"
} else {
    인사.innerHTML = "Good night"
}