import { useContext } from "react"
import './grid.css'
import { IoClose } from "react-icons/io5";
import { TaskContext } from "../context/TaskContext"
export default function TaskCard({ task }) {
  const {deleteTask}=useContext(TaskContext)
  return (
      <div className="p-5 rounded-md shadow-lg shadow-indigo-500/50 flex justify-center items-center relative overflow-hidden cards ">
        <div className="">
        <h1 className="font-bold">{task.title}</h1>
        <p className="font-light">{task.description}</p>
        <span className="text-sm text-zinc-500">{task.fecha}</span>
        </div>
        <img src={task.img} alt=""className="w-20 rounded-full" />
        <IoClose  className="w-6 cursor-pointer absolute top-0 right-0 m-1" onClick={() => deleteTask(task.id)}/>
      </div>
  )
}
