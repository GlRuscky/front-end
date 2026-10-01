import { useState } from "react"

function app() {
  const [ tarefas, setTarefas ] = useState([
    { id: 1, texto: "estudar react", feito: true },
    { id: 1, texto: "estudar typescript", feito: true },
    { id: 1, texto: "estudar javascript", feito: false }
  ])
  function addTarefa() {
    const newTarefa = {
      id: 3,
      texto: "Estudar para as provas",
      feito: false
    }

    tarefas.push(novaTarefa)

    setTarefas([ ...tarefas, novaTarefa])
  }

  return (
    <div className= "app">
      <h1>Minhas Tarefas
        <p>comece adicionando sua primeira tarefa</p>

        <button onClick={addTarefa}></button>

      </h1>
    </div>
  )
}
