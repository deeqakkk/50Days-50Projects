const addBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if (notes) {
    notes.forEach(note => addNewNote(note));
}
addBtn.addEventListener('click', () => {
    addNewNote("Hello from @deeqakkk");
});

function addNewNote(text = 'Hello World') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<div class="tools">
    <button class="edit">
    <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
    <i class="fas fa-trash-alt"></i>
    </button>
    </div>
    <div class="main ${      text ? ' ' : 'hidden'    }"></div>
    <textarea class="${      text ? 'hidden' : ''    }"></textarea>`;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLocalStorage()
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLocalStorage();
    });
    document.body.appendChild(note);
};

function updateLocalStorage() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}
localStorage.setItem('notes', JSON.stringify(notes));