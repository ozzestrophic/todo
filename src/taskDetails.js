function createTaskDetails(name, desc) {
  const taskDetails = document.createElement("dialog");
  taskDetails.classList.add("taskDetails");
  taskDetails.id = `detailsDialogBox`;
  taskDetails.innerHTML = `<form class="taskDetails">
        <div class="flex">
          <p>Task Name</p>
          <p id="detailsTaskName">${name}</p>
        </div>
        <div class="flex">
          <p>Task Description</p>
          <p id="detailsTaskdesc">${desc}</p>
        </div>
        <button type="cancel" id="detailsClose" class="btn cancel">Close</button>
        </form>
        `;
  return taskDetails;
}

function toggleTaskDetails(event) {
  const index = event.target.parentElement.dataset.index;
  const name = event.target.parentElement.dataset.name;
  const desc = event.target.parentElement.dataset.desc;
  console.log(name, desc);

  const taskDetails = createTaskDetails(name, desc);
  const detailsDialogs = document.querySelector(".detailsDialogs");

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

function addFunctionsToButton(index, array) {
  const detailsBtn = document.querySelector(`#detailsBtn${index}`);
  detailsBtn.addEventListener("click", toggleTaskDetails);
}

export { createTaskDetails, addFunctionsToButton };
