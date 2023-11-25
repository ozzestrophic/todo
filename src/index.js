import "./style.css";
import { deleteTask } from "./listBtns";
import { createTaskDetails } from "./taskDetails";

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

// method to delete?? or this should be done through the array

// array for each project

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

function addToProjectArray(arry, obj) {
  arry.unshift(obj);
}

function createTask() {
  addToProjectArray(inbox, createTaskObject());

  myForm.reset();
  dialogbox.close();
  drawList(inbox);
  console.log(inbox);
}

function createTaskElement(obj, index, arry) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskCard");
  taskElement.innerHTML = `<div class="taskHeading">
              <input type="checkbox" name="" id="" />
              <div>${obj.name}</div>
            </div>
            <div class="taskPrio">
              <ion-icon id="detailsBtn" name="information-circle-outline" data-obj="${JSON.stringify(
                obj
              )}"></ion-icon>
              <div class="prio${obj.priority}">${obj.priority}</div>
              <input type="date" name="" id="deadline" value="${
                obj.deadline
              }" disabled/>
              <ion-icon id="editBtn" name="create-outline"></ion-icon>
              <ion-icon id="deleteBtn" name="trash-outline"></ion-icon>
            </div>`;

  return taskElement;
}

function drawList(arry) {
  const taskListElements = arry.map(createTaskElement);
  const taskList = document.querySelector(".taskList");

  taskList.innerHTML = "";
  taskListElements.map(function (element) {
    taskList.appendChild(element);
  });
}

const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  createTask();
});

// loop the create function to draw the page from the array
