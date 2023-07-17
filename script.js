const inputTodo = document.getElementById("inputTodo");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todoList");
const addTask = () => {
  const myList = document.createElement("p");
  myList.innerHTML = inputTodo.value;
  todoList.appendChild(myList);
  inputTodo.value = "";
  const deleteButton = document.createElement("button");
  myList.appendChild(deleteButton);
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteButton.appendChild(deleteIcon);
  deleteButton.style.boxShadow = "none";
  deleteButton.style.transform = "translateY(0)";
};
todoList.addEventListener("click", (e) => {
  if (e.target.matches("button") || e.target.parentElement.matches("button")) {
    e.target.closest("p").remove();
  }
});
