document.addEventListener("DOMContentLoaded", () => {
  const formForSubmit = document.getElementById('create-task-form');
  const ul = document.getElementById('tasks');
  const inputField = document.getElementById('new-task-description')

  formForSubmit.addEventListener('submit', function(event){
    const li = document.createElement('li');
    li.innerText = inputField.value;
    ul.append(li);
    inputField.value = "";
    event.preventDefault();
  })
});

