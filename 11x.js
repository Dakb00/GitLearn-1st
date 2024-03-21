const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make',
  dueDate: '2022-12-22'
 }, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
 }
]

renderTodoList ();

function renderTodoList() {

  let todoListHTML = ''  //start here

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const {name} = todoObject;
    //const {dueDate} = todoObject;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button
        onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  }

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  })
   // name: name,
   // dueDate: dueDate);

  inputElement.value = '';

  renderTodoList ();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}