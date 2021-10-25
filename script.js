let todos = [];
let showTodo = document.getElementById("show-todo");

function renderTodo(){
  let todoElement = "";

    if(todos.length < 1){
      todoElement += `
      <div class="text-center">
        <img src="img/Checklist.jpg" alt="fotobackground" class="img-not-found" width="350px">
        </div>`
    }

    for(elem of todos){
      const id = elem.id;
      const description = elem.description;
      const isDone = elem.isDone;

      let btnDone = `<button class = "btn-done" onclick="doneTodo(${id})">Done</button>`
      let textSuccess = "";

      if(isDone){
        btnDone = "";
        textSuccess = "";
      }
      todoElement += `
      <div class="all-todo">
        <div class="todo">
          <p class="todo-name ${textSuccess}">${description}</p>
          <div class="todo-isdone">${btnDone}
             <button class="btn-delete" onclick="deleteTodo(${id})"><img src="img/X.svg" alt="" class="img-btn"></button>
          </div>
        </div>
      </div>`
    }

    showTodo.innerHTML=todoElement;
}


function addTodo(){
  let todoInput = document.getElementById("input-todo")

    if(!todoInput.value){
      alert("todo input is not be empty");
      return
    }

    const todo = {
      id : Date.now(),
      description : todoInput.value,
      isDone : false
    }
    todos.push(todo);
    todoInput.value = "";

    renderTodo()
}

function doneTodo(id){
  for(i = 0; i < todos.length; i++){
    if (id == todos[i].id){
      todos[i].isDone = true;
    }
  }
  renderTodo();
}
function deleteTodo(id){
  for(let index = 0; index < todos.length; index++){
    if(id === todos[index].id){
      todos.splice(index,2)
    }
  }
  renderTodo();
}
renderTodo();