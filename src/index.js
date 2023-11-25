import "./style.css";
import { addDeleteToButton } from "./deleteTask";
import { addDetailsFunctionTobutton } from "./taskDetails";
import { addEditToButton } from "./editTask";
import { createSideBarList } from "./sideBar";

const btn = document.querySelector("#newTask");
const dialogbox = document.querySelector("#dialogBox");
const myForm = document.querySelector("#myForm");
btn.addEventListener("click", openNewTaskDialog);

// create class for tasks
class TaskObj {
  constructor(name, desc, priority, deadline, project) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
    this.project = project;
  }

  editTask(name, desc, priority, deadline, project) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
    this.project = project;
  }
}

function openNewTaskDialog() {
  dialogbox.showModal();
  const projectSelect = document.querySelector("#projectSelect");
  projectSelect.innerHTML = "";

  for (let x in arrayOfProjects) {
    const option = document.createElement("option");
    option.innerText = arrayOfProjects[x];
    option.value = arrayOfProjects[x];
    projectSelect.appendChild(option);
    console.log(arrayOfProjects[x]);
  }

  const cancelBtn = document.querySelector("#cancelBtn");

  cancelBtn.removeEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
}

function closeModal(event) {
  event.preventDefault();
  dialogbox.close();
}

// create task element from the object
function createTaskObject() {
  const taskName = document.querySelector("#taskName");
  const descField = document.querySelector("#descField");
  const prioritySelect = document.querySelector("#prioritySelect");
  const deadlineSelect = document.querySelector("#deadlineSelect");
  const projectSelect = document.querySelector("#projectSelect");

  const newTaskObject = new TaskObj(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value,
    projectSelect.value
  );

  return newTaskObject;
}

const inbox = [];
const arrayOfProjects = ["inbox", "project 1"];
let currentProject = arrayOfProjects[0];

function changeCurrentProject(event) {
  currentProject = event.target.innerHTML;
  createSideBarList();
  drawList(inbox);
}

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
  if (obj.project !== currentProject) {
    return;
  }
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskCard");
  taskElement.innerHTML = `<div class="taskHeading">
              <input type="checkbox" name="" id="" />
              <div>${obj.name}</div>
            </div>
            <div class="taskPrio" data-index="${index}"
            data-name="${obj.name}" data-desc="${obj.desc}"
            data-priority="${obj.priority}" data-deadline="${obj.deadline}" data-project="${obj.project}">
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
    if (!element) {
      return;
    }
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

// open array at index to get the object
// open the dialog box passing the old values
// apply method passing new values
// drawList again
createSideBarList();

export {
  inbox,
  arrayOfProjects,
  currentProject,
  changeCurrentProject,
  drawList,
};
