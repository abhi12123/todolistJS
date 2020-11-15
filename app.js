const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');
todoButton.addEventListener('click',addTodo);
function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value='';
}
function deleteCheck(event){
    const item = event.target;
    if(item.classList[0]==='trash-btn'){
        item.parentElement.remove();
    }
    if(item.classList[0]==='complete-btn'){
        item.parentElement.classList.toggle('completed');
    }
}
