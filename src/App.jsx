import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'
export default function App() {
  return (
    <div className='contenedor_final'>
      <TaskList/>
      <TaskForm/>
    </div>
  )
}

