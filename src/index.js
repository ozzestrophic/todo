import "./style.css";
import { addDeleteToButton } from "./deleteTask";
import { addDetailsFunctionTobutton } from "./taskDetails";

const btn = document.querySelector("#newTask");
const dialogbox = document.querySelector("#dialogBox");
const myForm = document.querySelector("#myForm");
btn.addEventListener("click", () => dialogbox.showModal());

// create class for tasks
class TaskObj {
  constructor(name, desc, priority, deadline) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
  }

  editTask(name, desc, priority, deadline) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
  }
}

// create task element from the object
function createTaskObject() {
  const taskName = document.querySelector("#taskName");
  const descField = document.querySelector("#descField");
  const prioritySelect = document.querySelector("#prioritySelect");
  const deadlineSelect = document.querySelector("#deadlineSelect");

  const newTaskObject = new TaskObj(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value
  );

  return newTaskObject;
}
const inbox = [];

function addToProjectArray(tasksArray, obj) {
  tasksArray.unshift(obj);
}

function createTask() {
  addToProjectArray(inbox, createTaskObject());

  myForm.reset();
  dialogbox.close();
  drawList(inbox);
  console.log(inbox);
}

function createTaskElement(obj, index, tasksArray) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskCard");
  taskElement.innerHTML = `<div class="taskHeading">
              <input type="checkbox" name="" id="" />
              <div>${obj.name}</div>
            </div>
            <div class="taskPrio" data-index="${index}" data-name="${obj.name}" data-desc="${obj.desc}">
              <ion-icon id="detailsBtn${index}" name="information-circle-outline"></ion-icon>
              <div class="prio${obj.priority}">${obj.priority}</div>
              <input type="date" name="" id="deadline" value="${obj.deadline}" disabled/>
              <ion-icon id="editBtn${index}" name="create-outline"></ion-icon>
              <ion-icon id="deleteBtn${index}" name="trash-outline"></ion-icon>
            </div>`;
  return taskElement;
}

function drawList(tasksArray) {
  const taskListElements = tasksArray.map(createTaskElement);
  const taskList = document.querySelector(".taskList");

  taskList.innerHTML = "";
  taskListElements.map(function (element, index) {
    taskList.appendChild(element);

    // add logic to list buttons
    addDetailsFunctionTobutton(index);
    addDeleteToButton(index);
    addEditToButton(index);
  });
}

const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  createTask();
});

// edit function

function addEditToButton(index) {
  const editBtn = document.querySelector(`#editBtn${index}`);
  editBtn.addEventListener("click", openEditDialog);
}

function openEditDialog(event) {
  const editDialogBox = document.querySelector("#editDialogBox");
  editDialogBox.showModal();
  createConfirmBtn(event);
}

function editTask(event) {
  event.preventDefault();
  editDialogBox.close();
  const index = event.target.myParam;

  loadEditorMethod(index);

  drawList(inbox);
}

function loadEditorMethod(index) {
  const taskName = document.querySelector("#taskNameEdit");
  const descField = document.querySelector("#descFieldEdit");
  const prioritySelect = document.querySelector("#prioritySelectEdit");
  const deadlineSelect = document.querySelector("#deadlineSelectEdit");

  inbox[index].editTask(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value
  );
}

function createConfirmBtn(event) {
  const confirmEditBtn = document.querySelector("#confirmEditBtn");
  const index = event.target.parentElement.dataset.index;

  confirmEditBtn.myParam = index;
  confirmEditBtn.addEventListener("click", editTask);
}

// open array at index to get the object
// open the dialog box passing the old values
// apply method passing new values
// drawList again

export { inbox, drawList };
