import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"
import './grid.css'
export default function TaskList() {
  const {tasks} = useContext(TaskContext)
    if(tasks.length==0){
        return <h1>No hay tareas aun</h1>
    }
  return (
    <div className="contenedor" id="layout">
        {tasks.map(task=><TaskCard key={task.id} task={task}/>)}
    </div>
  )
}