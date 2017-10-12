/*var addTask = document.getElementById("task");
var addButton = document.getElementById("add");

var incompleteTaskHolder = document.getElementById("todo");
var completeTaskHolder = document.getElementById("completed");

var createNewTaskElement = function(taskString) {
  //create list item
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input");

  var label = document.createElement("label");

  var deleteButton = document.createElement("button");

  checkBox.type = "checkbox";

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
}

var addTask = function() {
  console.log("Add task...");

  var listItem = createNewTaskElement(taskInput.value);

  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(list, taskCompleted);

  taskInput.value = "";
}*/
var button = document.getElementById('add');
var result = document.getElementById('task');

document.querySelector('button').addEventListener("click", function() {
  // Store results
  var resultStored = result.value;
  // Reset value of input
  result.value = "";

  var items = document.getElementById('todo');
  // Add items to container

  items.innerHTML +=  "<li onclick='myFunction(this)'>" + resultStored + "</li>";


});

function myFunction(taskToBeMoved) {
  var completedTasks = document.getElementById('completed');

  var taskToCompleted = taskToBeMoved.innerHTML;
  var items = document.getElementById('todo');

  items.removeChild(taskToBeMoved);
  completedTasks.innerHTML += "<li>" + taskToCompleted + "</li>";

}