const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
function mostrarTarefas(){
    listElement.innerHTML = ""
    for(const itemTarefa of tarefas){
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(itemTarefa)
        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")
        const pos = tarefas.indexOf(itemTarefa)
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`)
        const linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)
    }    
}

mostrarTarefas()

function addTarefas(){
    const text = inputElement.value
    tarefas.push(text)
    mostrarTarefas()
    inputElement.value = ""
    saveToStorage()
}

buttonElement.onclick = addTarefas

function deleteTarefa(pos){
    tarefas.splice(pos, 1)
    mostrarTarefas()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}