const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['записать блок про массивы', 'рассказать теорию обьектов', 'помыть собаку']

// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     // for (const note of notes) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     // }
//     notes.forEach(el => {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(el))
//     });
// }
// function getNoteTemplate(title) {
//     return `<li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>`
// }
// render()

// createBtn.onclick = () => {
//     if (inputElement.value.length === 0) {
//         return alert('Введите название заметки')
//     }
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//     inputElement.value = ''
// }

const notes = [
    {
    title: 'записать блок про массивы',
    completed: false,
    },
    {
        title: 'рассказать теорию обьектов',
        completed: true,
    },
    {
        title: 'помыть собаку',
        completed: false,
    }]

function render() {
    listElement.innerHTML = ''
    notes.forEach((el, index) => {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(el, index))
    });
}
function getNoteTemplate(note, index) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span class=${note.completed ? 'text-decoration-line-through' : ''}>${note.title}</span>
        <span>
            <span class="btn btn-small btn-success" ${note.completed ? 'hidden' : '' } data-index=${index} data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index=${index} data-type="remove">&times;</span>
        </span>
    </li>`
}
render()

listElement.onclick = (event) => {
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
    }
    render()
}
createBtn.onclick = () => {
    if (inputElement.value.length === 0) {
        return alert('Введите название заметки')
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

