import "./style.css";

const btn = document.querySelector("#newTask");
const dialogbox = document.querySelector("#dialogBox");
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
const inbox = [];

// add object to the array

// create task element from the object
function createTaskElement() {
  const newTask = new TaskObj();
}

// loop the create function to draw the page from the array
