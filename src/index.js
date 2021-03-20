document.addEventListener("DOMContentLoaded", () => {
  const formForSubmit = document.getElementById('create-task-form');
  const ul = document.getElementById('tasks');
  
  formForSubmit.addEventListener('submit', function(event){
    const li = document.createElement('li');
    li.innerText = document.getElementById('new-task-description').value;
    ul.append(li);
    event.preventDefault();
})});

