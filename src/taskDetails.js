function createTaskDetails(name, desc, priority, deadline, project) {
  const taskDetails = document.createElement("dialog");
  taskDetails.classList.add("taskDetails");
  taskDetails.id = `detailsDialogBox`;
  taskDetails.innerHTML = `<div class="taskDetails">
        <div class="flex">
          <p>Task Name</p>
          <p id="detailsTaskName">${name}</p>
        </div>
        <div class="flex">
          <p>Task Description</p>
          <p id="detailsTaskdesc">${desc}</p>
        </div>
        <div class="flex">
          <p>Priority</p>
          <p id="detailsTaskdesc">${priority}</p>
        </div>
        <div class="flex">
          <p>Deadline</p>
          <p id="detailsTaskdesc">${deadline}</p>
        </div>
        <div class="flex">
          <p>Project</p>
          <p id="detailsTaskdesc">${project}</p>
        </div>
        <button type="cancel" id="detailsClose" class="btn cancel">Close</button>
        </div>
        `;
  return taskDetails;
}

function showTaskDetails(event) {
  // const index = event.target.parentElement.dataset.index;
  const name = event.target.parentElement.dataset.name;
  const desc = event.target.parentElement.dataset.desc;
  const priority = event.target.parentElement.dataset.priority;
  const deadline = event.target.parentElement.dataset.deadline;
  const project = event.target.parentElement.dataset.project;
  const detailsDialogs = document.querySelector(".detailsDialogs");

  const taskDetails = createTaskDetails(
    name,
    desc,
    priority,
    deadline,
    project
  );

  detailsDialogs.innerHTML = "";
  detailsDialogs.appendChild(taskDetails);
  const detailsDialog = document.querySelector(`#detailsDialogBox`);
  detailsDialog.showModal();

  const closeDetailsButton = document.querySelector("#detailsClose");
  closeDetailsButton.addEventListener("click", function (event) {
    event.preventDefault();
    detailsDialog.close();
  });
}

function addDetailsFunctionTobutton(index) {
  const detailsBtn = document.querySelector(`#detailsBtn${index}`);
  detailsBtn.addEventListener("click", showTaskDetails);
}

export { createTaskDetails, addDetailsFunctionTobutton };
