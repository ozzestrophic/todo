function createTaskDetails(obj) {
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("taskDetails");
  taskDetails.innerHTML = `<div class="taskDetails">
        <div class="flex">
          <p>Task Name</p>
          <p id="detailsTaskName">${obj.name}</p>
        </div>
        <div class="flex">
          <p>Task Description</p>
          <p id="detailsTaskdesc">${obj.desc}</p>
        </div>
      </div>`;
  console.log(obj);
  console.log(taskDetails);
}

function addFunctionsToButton(index, array) {
  const detailsBtn = document.querySelector(`#detailsBtn${index}`);
  detailsBtn.addEventListener("click", createTaskDetails(array[index]));
}

export { createTaskDetails, addFunctionsToButton };
