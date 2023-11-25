import { inbox, arrayOfProjects, drawList } from ".";

function addEditToButton(index) {
  const editBtn = document.querySelector(`#editBtn${index}`);
  editBtn.myParam = index;
  editBtn.addEventListener("click", openEditDialog);
}

function openEditDialog(event) {
  const editDialogBox = document.querySelector("#editDialogBox");
  editDialogBox.showModal();

  const index = event.target.myParam;

  const projectSelect = document.querySelector("#projectSelectEdit");
  projectSelect.innerHTML = "";

  for (let x in arrayOfProjects) {
    const option = document.createElement("option");
    option.innerText = arrayOfProjects[x];
    option.value = arrayOfProjects[x];
    projectSelect.appendChild(option);
  }
  setPreviousParametersInEdit(index);

  const cancelBtn = document.querySelector("#cancelEditBtn");

  cancelBtn.removeEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  createConfirmBtn(event);
}

function closeModal(event) {
  event.preventDefault();
  editDialogBox.close();
}

function setPreviousParametersInEdit(index) {
  const taskName = document.querySelector("#taskNameEdit");
  const descField = document.querySelector("#descFieldEdit");
  const prioritySelect = document.querySelector("#prioritySelectEdit");
  const deadlineSelect = document.querySelector("#deadlineSelectEdit");
  const projectSelect = document.querySelector("#projectSelectEdit");
  taskName.value = inbox[index].name;
  descField.value = inbox[index].desc;
  prioritySelect.value = inbox[index].priority;
  deadlineSelect.value = inbox[index].deadline;
  projectSelect.value = inbox[index].project;
}

function editTask(event) {
  event.preventDefault();
  const editForm = document.querySelector("#editForm");

  editDialogBox.close();
  const index = event.target.myParam;

  loadEditorMethod(index);
  editForm.reset();

  drawList(inbox);
}

function loadEditorMethod(index) {
  const taskName = document.querySelector("#taskNameEdit");
  const descField = document.querySelector("#descFieldEdit");
  const prioritySelect = document.querySelector("#prioritySelectEdit");
  const deadlineSelect = document.querySelector("#deadlineSelectEdit");
  const projectSelect = document.querySelector("#projectSelectEdit");

  inbox[index].editTask(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value,
    projectSelect.value
  );
}

function createConfirmBtn(event) {
  const confirmEditBtn = document.querySelector("#confirmEditBtn");
  const index = event.target.parentElement.dataset.index;

  confirmEditBtn.myParam = index;
  confirmEditBtn.addEventListener("click", editTask);
}

export { addEditToButton };
