// 할일버튼 누르면, 숨겨진 할일박스가 나오도록

const 할일버튼 = document.querySelector(".할일버튼");
const 할일박스 = document.querySelector(".할일박스");

const newTodo = 할일박스.querySelector(".할일시작버튼");
const todoFooter = 할일박스.querySelector(".todo-footer");
const todoForm = todoFooter.querySelector("form");
const todoInput = todoForm.querySelector("input");

const 할일section = 할일박스.querySelector("section");
const 할일sectionH4 = 할일section.querySelector("h4");
const 할일sectionH5 = 할일section.querySelector("h5");
const 할일Ol = 할일section.querySelector("ol");

할일버튼.addEventListener("click", 할일박스버튼작동);

function 할일박스버튼작동() {
  할일박스.classList.toggle("hide");
  if (할일박스.classList.contains("hide")) {
    localStorage.setItem("할일박스상태", "숨겨짐");
  } else {
    localStorage.setItem("할일박스상태", "보여짐");
  }
}

if (localStorage.getItem("할일박스상태") == "보여짐") {
  할일박스버튼작동();
}

newTodo.addEventListener("click", newTodo눌림시할일);

function newTodo눌림시할일() {
  newTodo.classList.add("누름");
  todoForm.classList.remove("hide");
}

todoForm.addEventListener("submit", 할일입력되면할일);

function 클래스할일입력됨추가하기() {
  할일박스.classList.add("할일입력됨");
  할일section.classList.add("할일입력됨");
  할일sectionH4.classList.add("할일입력됨");
  할일sectionH5.classList.add("할일입력됨");
  newTodo.classList.add("할일입력됨");
}

function 할일입력되면할일(e) {
  e.preventDefault();
  클래스할일입력됨추가하기();

  let makeLi = document.createElement("li");

  makeLi.innerHTML = `<span>
            <div class="left">
                <input type="checkbox">
                <span>${todoInput.value}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </span>`;
  할일Ol.appendChild(makeLi);

  const localValue = {
    title: todoInput.value,
    체크: false,
    삭제: false
    // ID: new Date(),
  };

  localStorage.setItem(
    `todo-${할일Ol.childElementCount}`,
    JSON.stringify(localValue)
  );

  todoInput.value = "";
}

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage[key];
  console.log(`localStorage ${key}:  ${value}`);
  if (localStorage.getItem(`todo-${i}`) !== null) {
    newTodo눌림시할일();
    클래스할일입력됨추가하기();
    let makeLi = document.createElement("li");
    const todo = JSON.parse(localStorage.getItem(`todo-${i}`));
    makeLi.innerHTML = `<span id="todo-${i}">
        <div class="left">
            <input type="checkbox">
                <span>${todo.title}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </span>`;
    할일Ol.appendChild(makeLi);

    if (todo.체크) {
      const checkbox = makeLi.querySelector("input");
      checkbox.checked = true;
      취소선넣기(checkbox);
    }
  }
}

할일Ol.addEventListener("change", 체크);

function 체크(e) {
  const checkbox = e.target;

  if (checkbox.checked) {
    취소선넣기(checkbox);
  } else {
    취소선빼기(checkbox);
  }
}

function 취소선넣기(checkbox) {
  checkbox.parentElement.children[1].style.color = "#7f8c8d";
  checkbox.parentElement.children[1].classList.add("strikethrough");

  // localStorage 수정
  const id = checkbox.parentElement.parentElement.id;
  const todo = JSON.parse(localStorage.getItem(id));
  todo.체크 = true;
  localStorage.setItem(id, JSON.stringify(todo));
}

function 취소선빼기(checkbox) {
  checkbox.parentElement.children[1].style.color = "#000000";
  checkbox.parentElement.children[1].classList.remove("strikethrough");

  // localStorage 수정
  const id = checkbox.parentElement.parentElement.id;
  const todo = JSON.parse(localStorage.getItem(id));
  todo.체크 = false;
  localStorage.setItem(id, JSON.stringify(todo));
}

// 아이디를 넣어주지 않으면.. 구분하기가 힘들어.. ㅡㅡ;
// 아이디를 어떻게 넣어주냐는 중요해.. 겹치지 않아야해..

// key 이름을 어떻게 할지 고민중
