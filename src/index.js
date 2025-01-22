import "./style.css";
import underwaterBg from "./img/underwater-bg.png";
import forestBg from "./img/forest-bg.png";
import stoneBg from "./img/stone-bg.png";
import sandBg from "./img/sand-bg.png";
import lotusBg from "./img/lotus-bg.png";
import seaFloorBottomBg from "./img/sea-floor-bottom-bg.png";
import volcanoBg from "./img/volcano-bg.png";
import snowBg from "./img/snow-bg.png";
import desertBg from "./img/desert-bg.png";
import seaShellBg from "./img/sea-shell-bg.png";
import oceanFloorBg from "./img/ocean-floor-bg.png";
import riverFloorBg from "./img/river-floor-bg.png";
import skyBg from "./img/sky-bg.png";
import pinkBg from "./img/pink-bg.png";
import orangeBg from "./img/orange-bg.png";
import brickBg from "./img/brick-bg.png";
import frameBg from "./img/frame-bg.png";
import spaceBg from "./img/space-bg.png";
import puddleBg from "./img/puddle-bg.png";
import fenceBg from "./img/fence-bg.png";
import torchicBg from "./img/torchic-bg.png";
import trioFaceBg from "./img/trio-face-bg.png";
import pikaTwoBg from "./img/pika-two-bg.png";
import dialgaBg from "./img/dialga-bg.png";
import galacticLogoBg from "./img/galactic-logo-bg.png";
import contestBg from "./img/contest-logo-bg.png";
import houseBg from "./img/house-bg.png";
import croagunkBg from "./img/croagunk-bg.png";
import trioBodyBg from "./img/trio-body-bg.png";
import pikaThreeBg from "./img/pika-three-bg.png";
import giratinaBg from "./img/giratina-bg.png";
import galacticTeamBg from "./img/galactic-team-bg.png";
import powerOnSoundPath from "./sounds/power-on-sound.mp3";
import powerOffSoundPath from "./sounds/power-off-sound.mp3";
const powerOnSound = new Audio(powerOnSoundPath);
const powerOffSound = new Audio(powerOffSoundPath);

let customCounter = 0;

const grandparent = document.getElementById("content");
const parent = document.createElement("div");
parent.id = "pc-box";
let bgImg = document.createElement("img");
bgImg.id = "bgImg";
bgImg.src = underwaterBg;
console.log("appending box");
grandparent.appendChild(parent);
const bgArray = [
  underwaterBg,
  forestBg,
  stoneBg,
  sandBg,
  lotusBg,
  seaFloorBottomBg,
  volcanoBg,
  snowBg,
  desertBg,
  seaShellBg,
  oceanFloorBg,
  riverFloorBg,
  skyBg,
  pinkBg,
  orangeBg,
  brickBg,
  frameBg,
  spaceBg,
  puddleBg,
  fenceBg,
  torchicBg,
  trioFaceBg,
  pikaTwoBg,
  dialgaBg,
  galacticLogoBg,
  contestBg,
  houseBg,
  croagunkBg,
  trioBodyBg,
  pikaThreeBg,
  giratinaBg,
  galacticTeamBg,
];

// Create the app instance and append it after initialization
class App {
  constructor(name, type) {
    this.name = name;
    this.type = type; // Initialize the 'type' property

    // Assign the icon based on the type
    if (this.type === "createNew") {
      assignIcon(this);
    } else if (this.type === "delete") {
      assignIcon(this);
    } else if (this.type === "folder") {
      assignIcon(this);
    }
  }

  // Append this app instance to the parent element
  appendApp() {
    const appContainer = document.createElement("div");
    appContainer.setAttribute("class", "app-container");
    const appName = document.createElement("p");
    appName.textContent = `${this.name}`;
    appContainer.appendChild(this.img);
    appContainer.appendChild(appName);
    parent.appendChild(appContainer);
    console.log("appending app...");
  }
}

const parser = new DOMParser();

function assignIcon(app) {
  let appElement;

  // Determine the icon based on the app type
  if (app.type === "createNew") {
    appElement = parser.parseFromString(
      newAppSvgMarkup,
      "image/svg+xml",
    ).documentElement;
    appElement.id = "new-project-app";
  } else if (app.type === "delete") {
    appElement = parser.parseFromString(
      deleteSvgMarkup,
      "image/svg+xml",
    ).documentElement;
    appElement.id = "delete-app";
  } else if (app.type === "folder") {
    appElement = parser.parseFromString(
      folderSvgMarkup,
      "image/svg+xml",
    ).documentElement;
    if (app.name === null || app.name === "") {
      appElement.id = `custom-folder-${customCounter++}`; // Increment the counter for folders
    } else {
      appElement.id = `${app.name}`;
    }
  }

  appElement.setAttribute("class", "app");
  app.img = appElement; // Store the icon element in the app
}

const newAppSvgMarkup = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 15H14M12 13V17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
const folderSvgMarkup = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.47214C3 6.16165 3.07229 5.85542 3.21115 5.57771L4 4H9L10 6H20C20.5523 6 21 6.44772 21 7V9V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V9V6.47214Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 20H20C20.5523 20 21 19.5523 21 19V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V19C3 19.5523 3.44772 20 4 20Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
const deleteSvgMarkup = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 589.004 589.004" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M451.716,146.986H137.289c-16.287,0-31.952,6.876-42.977,18.865c-11.025,11.988-16.566,28.173-15.205,44.403 l27.241,324.744c1.227,14.629,7.854,28.158,18.66,38.096c10.805,9.938,24.842,15.41,39.521,15.41h259.947 c14.68,0,28.715-5.473,39.521-15.41s17.434-23.467,18.66-38.097l27.24-324.744c1.361-16.229-4.18-32.414-15.205-44.402 C483.669,153.862,468.003,146.986,451.716,146.986z M467.208,206.672l-27.24,324.745c-0.676,8.055-7.41,14.247-15.492,14.247 H164.53c-8.083,0-14.817-6.192-15.492-14.247l-27.241-324.745c-0.761-9.067,6.393-16.846,15.492-16.846h314.427 C460.815,189.826,467.968,197.605,467.208,206.672z"></path> <path d="M424.476,589.004H164.529c-14.807,0-28.962-5.52-39.86-15.542c-10.899-10.022-17.583-23.668-18.82-38.422L78.608,210.296 c-1.373-16.37,4.216-32.693,15.335-44.784c11.119-12.092,26.918-19.027,43.345-19.027h314.427 c16.429,0,32.227,6.935,43.345,19.027c11.119,12.09,16.708,28.413,15.335,44.782l-27.24,324.744 c-1.237,14.755-7.921,28.4-18.819,38.423C453.437,583.484,439.28,589.004,424.476,589.004z M137.289,147.486 c-16.148,0-31.679,6.817-42.609,18.704c-10.93,11.885-16.425,27.931-15.075,44.023l27.241,324.744 c1.216,14.504,7.787,27.917,18.5,37.77c10.712,9.853,24.628,15.278,39.183,15.278h259.947c14.554,0,28.469-5.426,39.183-15.278 c10.715-9.853,17.285-23.266,18.501-37.771l27.24-324.744c1.35-16.091-4.145-32.137-15.075-44.021 c-10.929-11.886-26.459-18.704-42.608-18.704H137.289z M424.476,546.164H164.53c-8.275,0-15.299-6.459-15.99-14.705 l-27.241-324.745c-0.374-4.461,1.149-8.909,4.179-12.203c3.03-3.295,7.335-5.185,11.811-5.185h314.427 c4.477,0,8.781,1.889,11.811,5.184c3.03,3.294,4.554,7.743,4.18,12.204l-27.24,324.745 C439.774,539.705,432.75,546.164,424.476,546.164z M137.289,190.326c-4.197,0-8.234,1.772-11.075,4.861 c-2.841,3.089-4.269,7.26-3.918,11.442l27.241,324.745c0.648,7.732,7.234,13.789,14.994,13.789h259.946 c7.759,0,14.346-6.057,14.994-13.789l27.24-324.745c0.351-4.183-1.078-8.354-3.92-11.443c-2.841-3.089-6.877-4.86-11.074-4.86 H137.289z"></path> </g> <g> <path d="M89.292,123.835h410.42c11.83,0,21.42-9.59,21.42-21.42c0-11.83-9.59-21.42-21.42-21.42h-77.799v-0.966V58.886 c0-32.194-26.191-58.386-58.385-58.386H225.478c-32.194,0-58.386,26.192-58.386,58.386v21.143v0.966H89.292 c-11.83,0-21.42,9.59-21.42,21.42C67.872,114.245,77.462,123.835,89.292,123.835z M209.931,58.886 c0-8.586,6.96-15.546,15.546-15.546h138.051c8.584,0,15.545,6.96,15.545,15.546v21.143H209.931V58.886z"></path> <path d="M499.712,124.335H89.292c-12.087,0-21.92-9.833-21.92-21.92c0-12.086,9.833-21.92,21.92-21.92h77.299V58.886 C166.591,26.417,193.007,0,225.478,0h138.051c32.469,0,58.885,26.417,58.885,58.886v21.609h77.299 c12.087,0,21.92,9.833,21.92,21.92C521.632,114.502,511.799,124.335,499.712,124.335z M89.292,81.495 c-11.535,0-20.92,9.385-20.92,20.92c0,11.536,9.385,20.92,20.92,20.92h410.42c11.535,0,20.92-9.385,20.92-20.92 c0-11.535-9.385-20.92-20.92-20.92h-78.299V58.886C421.413,26.968,395.446,1,363.528,1H225.478 c-31.918,0-57.886,25.968-57.886,57.886v22.609H89.292z M379.573,80.528H209.431V58.886c0-8.848,7.198-16.046,16.046-16.046 h138.051c8.848,0,16.045,7.198,16.045,16.046V80.528z M210.431,79.528h168.142V58.886c0-8.296-6.749-15.046-15.045-15.046H225.478 c-8.297,0-15.046,6.75-15.046,15.046V79.528z"></path> </g> <g> <path d="M218.867,272.233c-0.78-11.805-10.99-20.739-22.785-19.961c-11.805,0.78-20.742,10.982-19.961,22.786l12.438,188.198 c0.748,11.323,10.166,20.008,21.352,20.008c0.475,0,0.953-0.016,1.434-0.047c11.804-0.78,20.741-10.981,19.961-22.786 L218.867,272.233z"></path> <path d="M209.91,483.765c-11.494,0-21.092-8.993-21.851-20.475l-12.438-188.198c-0.386-5.843,1.526-11.485,5.384-15.89 s9.201-7.042,15.043-7.429c12.139-0.79,22.526,8.462,23.317,20.427l12.438,188.198c0.797,12.061-8.366,22.521-20.427,23.318 C210.885,483.749,210.396,483.765,209.91,483.765z M197.511,252.725c-0.463,0-0.928,0.016-1.396,0.046 c-5.576,0.369-10.674,2.886-14.357,7.089c-3.682,4.204-5.507,9.589-5.138,15.165l12.438,188.198 c0.754,11.422,10.691,20.246,22.254,19.495c11.51-0.761,20.255-10.744,19.495-22.254l-12.438-188.198 C217.645,261.309,208.483,252.725,197.511,252.725z"></path> </g> <g> <path d="M294.502,252.226c-11.83,0-21.42,9.59-21.42,21.42v188.198c0,11.83,9.59,21.42,21.42,21.42 c11.831,0,21.42-9.59,21.42-21.42V273.646C315.923,261.816,306.333,252.226,294.502,252.226z"></path> <path d="M294.502,483.764c-12.087,0-21.92-9.833-21.92-21.92V273.646c0-12.087,9.833-21.92,21.92-21.92 c12.087,0,21.92,9.833,21.92,21.92v188.198C316.423,473.931,306.59,483.764,294.502,483.764z M294.502,252.726 c-11.535,0-20.92,9.385-20.92,20.92v188.198c0,11.535,9.385,20.92,20.92,20.92c11.536,0,20.92-9.385,20.92-20.92V273.646 C315.423,262.11,306.038,252.726,294.502,252.726z"></path> </g> <g> <path d="M392.923,252.272c-11.797-0.778-22.006,8.156-22.785,19.961L357.7,460.432c-0.779,11.805,8.156,22.006,19.961,22.786 c0.482,0.031,0.959,0.047,1.434,0.047c11.186,0,20.604-8.686,21.354-20.008l12.436-188.198 C413.665,263.254,404.728,253.052,392.923,252.272z"></path> <path d="M379.095,483.765c-0.485,0-0.973-0.016-1.466-0.048c-12.061-0.797-21.224-11.258-20.428-23.318l12.438-188.198 c0.79-11.965,11.187-21.222,23.317-20.427c5.843,0.386,11.185,3.024,15.043,7.428s5.771,10.047,5.384,15.89L400.947,463.29 C400.187,474.771,390.588,483.765,379.095,483.765z M391.493,252.725c-10.972,0-20.133,8.583-20.856,19.541l-12.438,188.199 c-0.76,11.51,7.985,21.493,19.495,22.254c11.605,0.75,21.499-8.074,22.255-19.495l12.436-188.198 c0.369-5.576-1.455-10.961-5.138-15.165c-3.683-4.204-8.781-6.721-14.357-7.089C392.422,252.741,391.956,252.725,391.493,252.725z "></path> </g> </g> </g></svg>`;
const closeSvgMarkup = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
const resizeSvgMarkup = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.354 9.354l-.707-.707-13 13 .707.707zm0 7l-.707-.707-6 6 .707.707z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`;

const newFolderApp = new App("Create", "createNew");
newFolderApp.appendApp(); // Only append after the app is fully initialized
const deleteApp = new App("Delete", "delete");
deleteApp.appendApp();
const folderApp = new App("Folder", "folder");
folderApp.appendApp();

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
parent.appendChild(bgImg);
let bgNum = 0;

leftArrow.addEventListener("click", () => {
  if (bgNum === 0) {
    bgNum = bgArray.length - 1;
  } else {
    --bgNum;
  }
  bgImg.src = bgArray[bgNum];
});

rightArrow.addEventListener("click", () => {
  if (bgNum === bgArray.length - 1) {
    bgNum = 0;
  } else {
    ++bgNum;
  }
  bgImg.src = bgArray[bgNum];
});

let powerOn = true;

async function turnOn() {
  powerOnSound.play();
  parent.style.animation = "scale-in 1s ease-in-out 1";
  grandparent.appendChild(parent);
  await sleep(1000);
}

async function turnOff() {
  powerOffSound.play();
  parent.style.animation = "scale-out 1s ease-in-out 1";
  await sleep(1000);
  grandparent.removeChild(parent);
}

const power = document.getElementById("power");
power.addEventListener("click", () => {
  if (powerOn) {
    turnOff();
  } else {
    turnOn();
  }
  powerOn = !powerOn;
});

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

let usernameValue = "Username";
const usernameDisplay = document.getElementById("username-display");
const usernameContainer = document.getElementById("username-container");
let usernameInput = document.createElement("input");
usernameInput.id = "username-input";

usernameDisplay.addEventListener("click", (e) => {
  usernameContainer.removeChild(usernameDisplay);
  usernameContainer.appendChild(usernameInput);
});

usernameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    usernameValue = usernameInput.value;
    usernameDisplay.textContent = `${usernameValue}`;
    usernameContainer.removeChild(usernameInput);
    usernameContainer.appendChild(usernameDisplay);
  }
});

class ExploreWindow {
  constuctor(folder) {
    this.folder = folder;
    const path = `${usernameValue}/${folder.name}`;
  }
}

const newProjectElement = document.getElementById("new-project-app");
const closeIcon = parser.parseFromString(
  closeSvgMarkup,
  "image/svg+xml",
).documentElement;
closeIcon.id = "close-icon";

const resizeIcon = parser.parseFromString(
  resizeSvgMarkup,
  "image/svg+xml",
).documentElement;
resizeIcon.id = "resize-icon";

newProjectElement.addEventListener("dblclick", (e) => {
  const explorer = document.createElement("div");
  explorer.className = "explorer-container";
  const explorerHeader = document.createElement("div");
  explorerHeader.className = "explorer-header";
  explorerHeader.appendChild(resizeIcon);
  explorerHeader.appendChild(closeIcon);
  const explorerSidebar = document.createElement("div");
  explorerSidebar.className = "explorer-sidebar";
  const explorerContent = document.createElement("div");
  explorerContent.className = "explorer-content";
  const newTask = document.createElement("div");
  newTask.textContent = "New Task";
  newTask.id = "new-task";
  newTask.className = "manage-task";
  const renameTask = document.createElement("div");
  renameTask.textContent = "Rename Task";
  renameTask.id = "rename-task";
  renameTask.className = "manage-task";
  const deleteTask = document.createElement("div");
  deleteTask.textContent = "Delete Task";
  deleteTask.id = "delete-task";
  deleteTask.className = "manage-task";
  const timeForTask = document.createElement("div");
  timeForTask.textContent = "Set Date and Time";
  timeForTask.id = "time-for-task";
  timeForTask.className = "manage-task";
  explorerSidebar.appendChild(newTask);
  explorerSidebar.appendChild(renameTask);
  explorerSidebar.appendChild(deleteTask);
  explorerSidebar.appendChild(timeForTask);
  explorer.appendChild(explorerHeader);
  explorer.appendChild(explorerSidebar);
  explorer.appendChild(explorerContent);
  parent.appendChild(explorer);
  explorer.style.animation = "open 1s ease-in-out 1";

  closeIcon.addEventListener("click", (e) => {
    explorer.style.animation = "close 1s ease-in-out 1";

    explorer.addEventListener("animationend", () => {
      parent.removeChild(explorer);
    });
  });
});

class Task {
  constructor(name, date, time) {
    this.name = name;
    this.date = date;
    this.time = time;
  }

  appendTask() {
    const taskElement = document.createElement("div");
    taskElement.className = "task-container";
    const taskName = document.createElement("div");
    taskName.className = "task-info";
    const taskDate = document.createElement("div");
    taskDate.className = "task-info";
    const taskTime = document.createElement("div");
    taskName.className = "task-info";
    taskName.textContent = `${nameValue}`;
    taskDate.textContent = `${DateValue}`;
    taskTime.textContent = `${TimeValue}`;
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDate);
    taskElement.appendChild(taskTime);
    explorerContent.appendChild(taskElement);
  }
}

const newTaskElement = document.getElementById("new-task");

newTaskElement.addEventListener("dblclick", (e) => {
  const name = document.createElement("div");
  const nameInput = document.createElement("input");
  const date = document.createElement("div");
  const dateInput = document.createElement("input");
  const time = document.createElement("div");
  const timeInput = document.createElement("input");
  const createTaskBtn = document.createElement("button");
  explorerContent.appendChild(name);
  explorerContent.appendChild(nameInput);
  explorerContent.appendChild(date);
  explorerContent.appendChild(dateInput);
  explorerContent.appendChild(time);
  explorerContent.appendChild(timeInput);
  explorerContent.appendChild(createTaskBtn);
});

createTaskBtn.addEventListener("click", (e) => {
  const nameValue = nameInput.value;
  const dateValue = dateInput.value;
  const timeValue = timeInput.value;

  explorerContent.removeChild(name);
  explorerContent.removeChild(nameInput);
  explorerContent.removeChild(date);
  explorerContent.removeChild(dateInput);
  explorerContent.removeChild(time);
  explorerContent.removeChild(timeInput);
  explorerContent.removeChild(createTaskBtn);

  const task = new Task(nameValue, dateValue, timeValue);
  task.appendTask();
});
