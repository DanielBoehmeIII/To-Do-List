// Code from "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API"
// that has been refactored for this project
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  if (!localStorage.getItem("bgImgIndex")) {
    populateStorage();
  }
} else {
  setConfig();
}

function setConfig () {
  const bgStyle = localStorage.getItem("bgImgIndex");
  const folderNum = localStorage.getItem("foldersCreated");
  const folderNames[];
  for (i = 0; i < folderNum; i++) {
    folderNames[i] = localStorage.getItem("folderName${i}");
    createFolder(folderNames[i]);
    const taskNames[];
    const taskDescriptions[];
    const taskDates[];
    for (i = 0; i < taskNum; i++) {
      folderNames[i] = localStorage.getItem("folderName${i}");
      createFolder(folderNames[i]);
    }
  }
  const taskNum = localStorage.getItem("tasksCreated");
  const user = localStorage.getItem("username");
   
}
