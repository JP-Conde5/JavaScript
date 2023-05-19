const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["Estudar", "Dormir"]

for(cosnt itemTarefa of tarefas){
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemTarefa)

    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}