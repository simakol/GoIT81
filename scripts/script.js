import refs from "./refs.js";
import { addNewTask, handleTaskBehaviour, fillTasksList } from "./functions.js";

refs.addBtn.addEventListener("click", addNewTask);
refs.myUL.addEventListener("click", handleTaskBehaviour);
window.addEventListener("DOMContentLoaded", fillTasksList);
