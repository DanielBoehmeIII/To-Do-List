// import { completeTaskSound } from "./AssetHandling.js";
// import { Element, Task } from "./classes.js";
//
// export let selected = false;
// export function pressDeleteTask(folder, explorerContent) {
//   explorerContent.elementOnDOM.removeChild(folder.selectedElement);
// }
//
// let taskArray[];
//   if (!taskNum) {
//     const taskInputContainer = new Element(
//       "h6",
//       "task-container",
//       `${folder.elementId}-task-input`,
//       explorerContent.elementOnDOM,
//     );
//     const taskInner = taskInputContainer.createChild(
//       "div",
//       "task-inner",
//       "task-input-inner",
//     );
//     const taskInputPrompt = taskInner.createChild(
//       "span",
//       "task-input-prompt",
//       "task-input-prompt",
//     );
//     taskInputPrompt.elementOnDOM.innerText = "Please Enter Task info";
//     const taskInputForm = taskInner.createChild(
//       "div",
//       "task-input-form",
//       "task-input-form",
//     );
//     const taskNameInput = taskInputForm.createChild(
//       "input",
//       "task-name-input",
//       `${folder.elementId}-task-name-input`,
//     );
//     taskNameInput.elementOnDOM.placeholder = "Enter task name";
//     const taskDescriptionInput = taskInputForm.createChild(
//       "input",
//       "task-description-input",
//       `${folder.elementId}-task-description-input`,
//     );
//     taskDescriptionInput.elementOnDOM.placeholder = "Enter task description";
//     const formBottom = taskInputForm.createChild(
//       "div",
//       "task-input-form-bottom",
//       "task-input-form-bottom",
//     );
//     const taskDateInput = formBottom.createChild(
//       "input",
//       "task-date-input",
//       `${folder.elementId}-task-input-date`,
//     );
//     taskDateInput.elementOnDOM.type = "date";
//
//     const taskSubmit = formBottom.createChild(
//       "button",
//       "task-submit",
//       `${folder.elementId}-task-submit`,
//     );
//     taskSubmit.elementOnDOM.innerText = "Submit";
//     taskSubmit.elementOnDOM.addEventListener("click", (e) => {
//       let taskNameValue = taskNameInput.elementOnDOM.value.trim();
//       let taskDescriptionValue = taskDescriptionInput.elementOnDOM.value.trim();
//       let taskDateValue = taskDateInput.elementOnDOM.value;
//       if (taskNameValue === "") {
//         taskNameInput.elementOnDOM.setCustomValidity("Task name required");
//         taskNameInput.elementOnDOM.reportValidity();
//         return;
//       } else if (taskDateValue === "") {
//         taskDateInput.elementOnDOM.setCustomValidity("Task date required");
//         taskDateInput.elementOnDOM.reportValidity();
//         return;
//       }
//       explorerContent.elementOnDOM.removeChild(taskInputContainer.elementOnDOM);
//       folder.taskNum++;
//       const newTask = Task(folder.taskNum, taskNameValue, taskDescriptionValue, taskDateValue);
//       localStorage.setItem(`FolderNum${folder.folderNum}TaskNum`, folder.taskNum);
//       localStorage.setItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Name`, taskNameValue);
//       localStorage.setItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Description`, taskDescriptionValue);
//       localStorage.setItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Date`, taskDateValue);
//   });
//   } else {
//     const taskNameValue = localStorage.getItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Name`);
//     const taskDescriptionValue = localStorage.setItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Description`);
//     const taskDateValue = localStorage.setItem(`FolderNum${folder.folderNum}Task${folder.taskNum}Date`);
//     const newTask = Task(taskNum, taskNameValue, taskDescriptionValue, taskDateValue);
//   }
//     displayTask(
//       folder,
//       explorerContent,
//       newTask
//     );
// }
//
// export function pressManageTask(folder, explorerContent, selectedElement) {
//   const name = folder.selectedElement
//     .querySelector(".task-inner .task-name")
//     .textContent.trim();
//   const description = folder.selectedElement
//     .querySelector(".task-inner .task-description")
//     .textContent.trim();
//   const date = folder.selectedElement
//     .querySelector(".task-inner .task-date")
//     .textContent.trim();
//   explorerContent.elementOnDOM.removeChild(folder.selectedElement);
//   createManagedTask(folder, explorerContent, name, description, date);
// }
//
// export function createManagedTask(
//   folder,
//   explorerContent,
//   taskNameValue,
//   taskDescriptionValue,
//   taskDateValue,
// ) {
//   const taskArray = [];
//   const taskInputContainer = new Element(
//     "h6",
//     "task-container",
//     `${folder.elementId}-task-input`,
//     explorerContent.elementOnDOM,
//   );
//   const taskInner = taskInputContainer.createChild(
//     "div",
//     "task-inner",
//     "task-input-inner",
//   );
//   const taskInputPrompt = taskInner.createChild(
//     "span",
//     "task-input-prompt",
//     "task-input-prompt",
//   );
//   taskInputPrompt.elementOnDOM.innerText = "Please Enter Task info";
//   const taskInputForm = taskInner.createChild(
//     "div",
//     "task-input-form",
//     "task-input-form",
//   );
//   const taskNameInput = taskInputForm.createChild(
//     "input",
//     "task-name-input",
//     `${folder.elementId}-task-name-input`,
//   );
//   taskNameInput.elementOnDOM.placeholder = "Enter task name";
//   taskNameInput.elementOnDOM.value = taskNameValue;
//   const taskDescriptionInput = taskInputForm.createChild(
//     "input",
//     "task-description-input",
//     `${folder.elementId}-task-description-input`,
//   );
//   taskDescriptionInput.elementOnDOM.placeholder = "Enter task description";
//   taskDescriptionInput.elementOnDOM.value = taskDescriptionValue;
//   const formBottom = taskInputForm.createChild(
//     "div",
//     "task-input-form-bottom",
//     "task-input-form-bottom",
//   );
//   const taskDateInput = formBottom.createChild(
//     "input",
//     "task-date-input",
//     `${folder.elementId}-task-input-date`,
//   );
//   taskDateInput.elementOnDOM.type = "date";
//   taskDateInput.elementOnDOM.value = taskDateValue;
//   const taskSubmit = formBottom.createChild(
//     "button",
//     "task-submit",
//     `${folder.elementId}-task-submit`,
//   );
//   taskSubmit.elementOnDOM.innerText = "Submit";
//   taskSubmit.elementOnDOM.addEventListener("click", (e) => {
//     let taskNameValue = taskNameInput.elementOnDOM.value.trim();
//     let taskDescriptionValue = taskDescriptionInput.elementOnDOM.value.trim();
//     let taskDateValue = taskDateInput.elementOnDOM.value;
//     if (taskNameValue === "") {
//       taskNameInput.elementOnDOM.setCustomValidity("Task name required");
//       taskNameInput.elementOnDOM.reportValidity();
//       return;
//     } else if (taskDateValue === "") {
//       taskDateInput.elementOnDOM.setCustomValidity("Task date required");
//       taskDateInput.elementOnDOM.reportValidity();
//       return;
//     }
//     explorerContent.elementOnDOM.removeChild(taskInputContainer.elementOnDOM);
//     displayTask(
//       folder,
//       explorerContent,
//       taskNameValue,
//       taskDescriptionValue,
//       taskDateValue,
//     );
//   });
// }
//
// export function displayTask(
//   folder,
//   explorerContent,
//   taskNameValue,
//   taskDescriptionValue,
//   taskDateValue,
// ) {
//   folder.taskNum++;
//   // if (taskNameValue === "") {
//   //   taskNameValue = `${folder.taskNum}`;
//   // }
//   const taskDisplayContainer = new Element(
//     "div",
//     "task-container",
//     `${folder.elementId}-${taskNameValue}`,
//     explorerContent.elementOnDOM,
//   );
//   const taskInner = taskDisplayContainer.createChild(
//     "div",
//     "task-inner",
//     `${folder.elementId}-${taskNameValue}-inner`,
//   );
//   const taskNameDisplay = taskInner.createChild(
//     "h6",
//     "task-name",
//     `${folder.elementId}-${taskNameValue}-name`,
//   );
//   taskNameDisplay.elementOnDOM.innerText = `${taskNameValue}`;
//   const taskForm = taskInner.createChild(
//     "div",
//     "task-form",
//     `${folder.elementId}-${taskNameValue}-form`,
//   );
//   const taskDescriptionDisplay = taskForm.createChild(
//     "p",
//     "task-description",
//     `${folder.elementId}-${taskNameValue}-description`,
//   );
//   taskDescriptionDisplay.elementOnDOM.innerText = `${taskDescriptionValue}`;
//   const bottomForm = taskForm.createChild(
//     "div",
//     "form-bottom",
//     `${folder.elementId}-${taskNameValue}-form-bottom`,
//   );
//   const taskDateDisplay = bottomForm.createChild(
//     "date",
//     "task-date",
//     `${folder.elementId}-${taskNameValue}-date`,
//   );
//   taskDateDisplay.elementOnDOM.innerText = `${taskDateValue}`;
//   const taskCheckbox = bottomForm.createChild(
//     "input",
//     "task-check-box",
//     `${folder.elementId}-${taskNameValue}`,
//   );
//   taskCheckbox.elementOnDOM.type = "checkbox";
//   taskCheckbox.elementOnDOM.addEventListener("change", (e) => {
//     if (e.target.checked) {
//       completeTaskSound.play();
//       taskForm.elementOnDOM.style.animation = "grow 5s ease-in-out 1";
//       // localStorage.setItem(
//       //   `${folder.elementId}-${taskNameValue}-checked`,
//       //   isChecked,
//       // );
//     } else {
//       taskDisplayContainer.elementOnDOM.style.animation = "";
//       taskForm.elementOnDOM.style.animation = "";
//     }
//   });
//   taskDisplayContainer.elementOnDOM.addEventListener("click", (e) => {
//     folder.selectedElement = taskDisplayContainer.elementOnDOM;
//     const isSelected =
//       taskDisplayContainer.elementOnDOM.getAttribute("data-selected") ===
//       "true";
//     if (isSelected) {
//       taskDisplayContainer.elementOnDOM.style.animation = "";
//       taskDisplayContainer.elementOnDOM.setAttribute("data-selected", "false");
//     } else if (!selected) {
//       taskDisplayContainer.elementOnDOM.style.animation =
//         "select 0.2s ease-in-out forwards";
//       taskDisplayContainer.elementOnDOM.setAttribute("data-selected", "true");
//     }
//   });
// }
