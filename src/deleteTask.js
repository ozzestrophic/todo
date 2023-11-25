function deleteTask(index, tasksArray) {
  inbox.splice(index, 1);
}

function addDeleteToButton(index) {
  const deleteBtn = document.querySelector(`#deleteBtn${index}`);
  deleteBtn.addEventListener("click", deleteTask);
}

// event.parentelement.parentelement
// until we reach somewhere where we store the index as an attribute

export { addDeleteToButton };
