const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todos = [] 

function newTodo() {
  const todoText = prompt('введiть нову справу:')
  if (todoText) {
    todos.push({ text: todoText, checked: false })
    renderTodos()
  }
}

function renderTodos() {
  list.innerHTML = ''
  
  itemCountSpan.textContent = todos.length
  
  const uncheckedCount = todos.filter(todo => !todo.checked).length
  uncheckedCountSpan.textContent = uncheckedCount
  
  todos.forEach((todo, index) => {
    const listItem = document.createElement('li')
    listItem.className = classNames.TODO_ITEM

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.addEventListener('change', () => {
      todo.checked = checkbox.checked
      uncheckedCountSpan.textContent = todos.filter(todo => !todo.checked).length
    })

    const text = document.createElement('span')
    text.className = classNames.TODO_TEXT
    text.textContent = todo.text

    const deleteButton = document.createElement('button')
    deleteButton.className = classNames.TODO_DELETE
    deleteButton.textContent = 'видалити'
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1)
      renderTodos()
    })

    listItem.appendChild(checkbox)
    listItem.appendChild(text)
    listItem.appendChild(deleteButton)

    list.appendChild(listItem)
  })
}

renderTodos()
