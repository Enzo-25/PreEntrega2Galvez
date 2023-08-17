const notes = [
  { body: "Note 1" },
  { body: "Note 2" },
  { body: "Note 3" },
  { body: "Note 4" },
];

let myName = prompt("Ingrese su nombre:");

introduceName();

function introduceName() {
  while (myName.length < 3) {
    myName = prompt("Ingrese su nombre (debe tener al menos 3 caracteres):");
  
    if (myName === null) {
      alert("Has cancelado el ingreso. Se requiere un nombre.");
      continue;
    }
  
    if (myName.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
    }
  }
}

alert("¡Hola, " + myName + "! Has ingresado un nombre válido.");


  
function startNote(note) {
  const div = document.createElement("div");
  div.className = "note";
  
  const p = document.createElement("p");
  p.textContent = note.body;
  
  const button = document.createElement("button");
  button.textContent = "Delete";

  function handleClick() {
    deleteNote(notes);
    showNotes(notes);
  }
  button.addEventListener('click', handleClick);
  
  div.append(p, button);
  
  return div;
}
  
function showNotes() {
  const bottomBox = document.querySelector(".bottomBox");
  bottomBox.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const noteFinal = startNote(note);
    bottomBox.append(noteFinal);
  }
}

function deleteNote(note) {
  const noteIndex = notes.indexOf(note);
  notes.splice(noteIndex, 1);
  showNotes();
}
  
function createNote(body) {
  notes.push({ body });
}
  
function noteSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const body = form.elements.note.value;
  createNote(body);
  showNotes();
  form.reset();
}
  
const form = document.querySelector("form");
form.addEventListener("submit", noteSubmit);
  
showNotes();