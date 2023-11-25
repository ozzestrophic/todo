import { inbox, drawList } from ".";

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

export { addEditToButton };
