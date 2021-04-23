// 할일버튼 누르면, 숨겨진 할일박스가 나오도록

const 할일버튼 = document.querySelector(".할일버튼")
const 할일박스 = document.querySelector(".할일박스")

const newTodo = 할일박스.querySelector(".할일시작버튼")
const todoFooter = 할일박스.querySelector(".todo-footer")
const todoForm = todoFooter.querySelector("form")
const todoInput = todoForm.querySelector("input")


const 할일section = 할일박스.querySelector("section")
const 할일sectionH4 = 할일section.querySelector("h4")
const 할일sectionH5 = 할일section.querySelector("h5")
const 할일Ol = 할일section.querySelector("ol")



할일버튼.addEventListener("click", 할일박스버튼작동)

function 할일박스버튼작동() {
    할일박스.classList.toggle("hide")
    if (할일박스.classList.contains("hide")) {
        localStorage.setItem("할일박스상태", "숨겨짐")
    } else {
        localStorage.setItem("할일박스상태", "보여짐")
    }
}

if (localStorage.getItem("할일박스상태") == "보여짐") {
    할일박스버튼작동();
}


newTodo.addEventListener("click", newTodo눌림시할일)

function newTodo눌림시할일() {
    newTodo.classList.add("누름")
    todoForm.classList.remove("hide")
}

todoForm.addEventListener("submit", 할일입력되면할일)

function 클래스할일입력됨추가하기() {
    할일박스.classList.add("할일입력됨")
    할일section.classList.add("할일입력됨")
    할일sectionH4.classList.add("할일입력됨")
    할일sectionH5.classList.add("할일입력됨")
    newTodo.classList.add("할일입력됨")
}


// 여기서 부터 고민해보자... 클래스 아이디는.. 1씩증가해야해. 중복되지 않아야해..


function 할일입력되면할일(e) {

    e.preventDefault();
    클래스할일입력됨추가하기();

    let makeLi = document.createElement("li")
    할일Ol.appendChild(makeLi);
    makeLi.innerHTML =
        `<span class= "todo${할일Ol.childElementCount}">
            <div class="left">
                <input type="checkbox">
                <span>${todoInput.value}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </span>`



    const localValue = {
        title: todoInput.value,
        체크: false,
        삭제: false
    }

    localStorage.setItem(`todo${할일Ol.childElementCount}`, JSON.stringify(localValue))

    todoInput.value = "";
}

for (let i = 1; i < localStorage.length; i++) {
    let todo = localStorage.getItem(`todo${i}`)
    if (todo !== null) {
        newTodo눌림시할일();
        클래스할일입력됨추가하기();
        let makeLi = document.createElement("li")
        makeLi.innerHTML = `<span class="todo${i}">
        <div class="left">
            <input type="checkbox">
                <span>${JSON.parse(todo).title}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </span>`
        할일Ol.appendChild(makeLi);
    }
}

할일Ol.addEventListener("change", 체크)

function 체크(e) {

    const targetLocalKey = e.target.parentElement.parentElement.className
    // 체크안되어있으면, 체크 되도록
    // 체크되어있으면, 체크 안되도록
    if (e.target.checked) {
        e.target.parentElement.children[1].style.color = "#7f8c8d"
        e.target.parentElement.children[1].classList.add("strikethrough")

        JSON.parse(localStorage.setItem(targetLocalKey)).체크 = "true"
        console.log(JSON.parse(localStorage.getItem(targetLocalKey)).체크)
    } else {
        e.target.parentElement.children[1].style.color = "#000000"
        e.target.parentElement.children[1].classList.remove("strikethrough")

        JSON.parse(localStorage.getItem(targetLocalKey)).체크 = false
    }

}



// 아이디를 넣어주지 않으면.. 구분하기가 힘들어.. ㅡㅡ;
// 아이디를 어떻게 넣어주냐는 중요해.. 겹치지 않아야해..

// key 이름을 어떻게 할지 고민중