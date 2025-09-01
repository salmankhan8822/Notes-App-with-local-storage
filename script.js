let inputText = document.getElementById("inputText");
let addNotesBtn = document.getElementById("addNotes");
let showNotes = document.getElementById("showNotes");

document.addEventListener("DOMContentLoaded", loadNotes);

addNotesBtn.addEventListener("click", addNotes);

function addNotes() {
    let notesText = inputText.value.trim();
    if(notesText === "") 
        return alert("Please add some notes");

   let li = createTaskElement(notesText);
   showNotes.appendChild(li);

   saveTasks();
   inputText.value = "";

}

function createTaskElement(text) {
    let li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });
    li.appendChild(deleteBtn);
    return li;
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#showNotes li").forEach((li) => {
    tasks.push({ text: li.firstChild.textContent, completed: li.classList.contains("completed")});
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadNotes() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = createTaskElement(task.text);
    if(task.completed) li.classList.add("completed");
    showNotes.appendChild(li);
  });
}