const list = document.querySelector(".list")
addDeleteHandlers()


function addItem() {
    const itemText = prompt("Что добавить?") || 'Пустое значение'
    const item = document.createElement("div")
    item.innerHTML =
        `${itemText} <button class="btn delete-btn">X</button>`
    list.appendChild(item) 
    addDeleteHandlers()
}

function clearList(){
    list.innerHTML = ""
}

function deleteItem(event) {
    event.target.parentElement.remove()
}

function addDeleteHandlers() {
    const deleteButtons = document.querySelectorAll(".delete-btn")
    for (let i = 0; i < deleteButtons.length; i++) {
        const deleteButton = deleteButtons[i];
        deleteButton.addEventListener("click", deleteItem)
    }
}