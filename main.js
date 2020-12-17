/*
// console.log('hellow');
// console.log(window);

//single element 선택하는 방법! (구식)
// const form = document.getElementById("todo-form") 
//최신 : querySelector();  보통 이걸로 사용한다!!!
const form = document.querySelector("#todo-form");
console.log(form);
//multiple element  >>> querySelectorAll()
const items = document.querySelectorAll('.item');
items.forEach((item) => {
  console.log(item);
})
// classByName()   >>> 클래스만 불러옴! 
console.log(document.getElementsByClassName('item'));
// getElementsByTagName()  >> 태그이름으로 
console.log(document.getElementsByTagName('li'));
*/

/* todos.lastElementChild.remove();
todos.firstElementChild.textContent = "wowow"
todos.lastElementChild.innerHTML = "<h2> h2 hello </h2>"
 */

// button 작업 addEventListener(이벤트, 기능)
const todos = document.querySelector('#todo-list');
const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');
button.addEventListener('click', onSubmit) ;

function onSubmit(e) {
  e.preventDefault();

  if(todoInput.value === '') {
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000)
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value))
  li.classList.add('item');
  todos.appendChild(li);
  todoInput.value = '';
}

