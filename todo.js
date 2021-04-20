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


function 할일입력되면할일(e) {

    e.preventDefault();
    클래스할일입력됨추가하기();

    let makeLi = document.createElement("li")
    makeLi.innerHTML =
        `<span class="할일하나">
            <div class="left">
                <input type="checkbox">
                <span>${todoInput.value}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </span>`
    할일Ol.appendChild(makeLi);

    localStorage.setItem(`todo-${할일Ol.childElementCount}`,
        `<span class="할일하나">
        <div class="left">
            <input type="checkbox">
            <span>${todoInput.value}</span>
        </div>
        <i class="fas fa-ellipsis-h"></i>
    </span>`)

    todoInput.value = "";
}

for (let i = 1; i < 100; i++)
    if (localStorage.getItem(`todo-${i}`) !== null) {
        newTodo눌림시할일();
        클래스할일입력됨추가하기();
        let makeLi = document.createElement("li")
        makeLi.innerHTML = localStorage.getItem(`todo-${i}`)
        할일Ol.appendChild(makeLi);
    }


