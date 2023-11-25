import { inbox, drawList } from ".";

function deleteTask(event) {
  const index = event.target.parentElement.dataset.index;
  inbox.splice(index, 1);
  drawList(inbox);
}

function addDeleteToButton(index) {
  const deleteBtn = document.querySelector(`#deleteBtn${index}`);
  deleteBtn.addEventListener("click", deleteTask);
}
// event.parentelement.parentelement
// until we reach somewhere where we store the index as an attribute

export { addDeleteToButton };
