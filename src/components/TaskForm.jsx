import {useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
export default function TaskForm() {
    const [title,setTitle] = useState('')
    const [description,setDescripion] = useState('')
    const {createTask} = useContext(TaskContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        createTask(title,description)
        setTitle('')
        setDescripion('')
    }
  return (
    <form className="flex flex-col p-10 box-border w-auto items-center "
    onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="ingresa tu tarea"
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        value={title} 
        autoFocus
        className="w-60 p-5 m-2 outline-none"
        />
        <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        placeholder="escribe la descripcion de la tarea"
        onChange={(e)=>{
            setDescripion(e.target.value)
        }}
        value={description}
        className="w-60 resize-none p-5 m-2 outline-none"
        ></textarea>
        <div>
        <button className="bg-red-400 w-52 p-4 rounded-md">Guardar</button>
        </div>
    </form>
  )
}
