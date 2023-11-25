import { arrayOfProjects, currentProject, changeCurrentProject } from ".";

function createSideBarList() {
  const projectUList = document.querySelector("#projectUList");
  projectUList.innerHTML = "";

  for (let x in arrayOfProjects) {
    const listItem = document.createElement("li");
    listItem.classList.add("projects");
    listItem.innerHTML = arrayOfProjects[x];
    listItem.addEventListener("click", changeCurrentProject);
    if (arrayOfProjects[x] == currentProject) {
      listItem.classList.add("selected");
    }

    projectUList.appendChild(listItem);
  }

  const addProjectButton = document.createElement("button");
  addProjectButton.innerText = "+ add project";
  addProjectButton.classList.add("btn");
  addProjectButton.classList.add("cancel");
  addProjectButton.addEventListener("click", showNewProjectDialog);

  projectUList.appendChild(addProjectButton);
}

function showNewProjectDialog() {
  const newProjectDialog = createNewProjectDialog();
  const projectUList = document.querySelector("#projectUList");

  projectUList.appendChild(newProjectDialog);
  newProjectDialog.showModal();
}

function addNewProjectToArray(event) {
  event.preventDefault();
  const textBox = document.querySelector("#newProjectTextBox");
  confirmBtn.myParam = textBox.value;
  arrayOfProjects.push(textBox.value);
  createSideBarList();
}

function createNewProjectDialog() {
  const newProjectDialog = document.createElement("dialog");
  newProjectDialog.id = "newProjectDialogBox";
  const newProjectForm = document.createElement("form");
  newProjectDialog.appendChild(newProjectForm);

  const newDiv = document.createElement("div");
  newDiv.classList.add("flex");
  const newLabel = document.createElement("label");
  newLabel.for = "newProject";
  newLabel.innerText = "New Project Name";
  const textBox = document.createElement("input");
  textBox.required = true;
  textBox.type = "text";
  textBox.name = "newProject";
  textBox.id = "newProjectTextBox";
  textBox.classList.add("textBox");

  newDiv.appendChild(newLabel);
  newDiv.appendChild(textBox);
  newProjectForm.appendChild(newDiv);

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("newPrjBtn");
  confirmBtn.innerText = "Create Project";
  confirmBtn.addEventListener("click", addNewProjectToArray);
  newProjectForm.appendChild(confirmBtn);

  return newProjectDialog;
}

export { createSideBarList };
