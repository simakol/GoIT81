import refs from "./refs.js";
import { save, load } from "./storage.js";

const STORAGE_KEY = "tasks";
let currentId = 1;

function addNewTask() {
  const clearInput = () => (refs.myInput.value = "");
  const taskText = refs.myInput.value.trim();

  if (taskText === "") {
    alert("Ви не ввели текст!");
    clearInput();
    return;
  }
  createLi({
    text: taskText,
  });
  addTaskToStorage(taskText);
  clearInput();
}

function handleTaskBehaviour({ target }) {
  const tasks = load(STORAGE_KEY);

  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
    const currentObj = tasks.find(
      (task) => Number(task.id) === Number(target.dataset.id)
    );
    currentObj.isDone = !currentObj.isDone;
  } else if (target.nodeName === "SPAN") {
    target.parentNode.remove();
    const index = tasks.findIndex(
      (task) => Number(task.id) === Number(target.parentNode.dataset.id)
    );
    tasks.splice(index, 1);
  }

  save(STORAGE_KEY, tasks);
}

function createLi({ text, id = currentId, isDone }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.classList.add("checked");
  addCloseButton(liEl);
  refs.myUL.appendChild(liEl);
}

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function createTaskObject({ text, id = currentId, isDone = false }) {
  return {
    text,
    id,
    isDone,
  };
}

function addTaskToStorage(text) {
  const tasks = load(STORAGE_KEY);
  const newTask = createTaskObject({ text });

  if (tasks === undefined) {
    // const tasksArr = [createTaskObject({ text })];
    // save(STORAGE_KEY, tasksArr);
    save(STORAGE_KEY, [newTask]);
  } else {
    tasks.push(newTask);
    save(STORAGE_KEY, tasks);
  }

  currentId += 1;
}

function fillTasksList() {
  const tasks = load(STORAGE_KEY);
  if (tasks !== undefined) {
    tasks.forEach((taskObj) => {
      createLi(taskObj);
      currentId = 1 + taskObj.id;
    });
  }
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
