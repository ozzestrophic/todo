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
}

export { createSideBarList };
