import { createContext, useEffect, useState } from "react"
import {Tasks as data } from "../data/tasks"
export const TaskContext =  createContext()
export function TaskContextProvider(props) {
  const fecha = new Date()
  const [tasks,setTasks] = useState([])
  const createTask=(taskTitle,description)=>{
    setTasks([...tasks,{
      id:tasks.length+1,
      title: (taskTitle.length> 5 ? taskTitle.substring(0,5) + "...": taskTitle),
      description:(description.length> 5 ? description.substring(0,5) + "...": description),
      img:`https://robohash.org/user${tasks.length}`,
      fecha : fecha.getMinutes() +":"+ fecha.getHours()
    }])
  }
  const deleteTask=(taskID)=>{
    setTasks(tasks.filter(task=>task.id!==taskID))
  }
  useEffect(()=>{
    setTasks(data)
},[])
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
