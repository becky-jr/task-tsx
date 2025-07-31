
import { useState } from 'react';
import './App.css'
import InputField from './components/InputField/InputField'
import TaskField from './components/TaskField/TaskField'

function App() {


  interface Task {
    text: string;

  }


  const [tasks, setTasks] = useState<Task[]>([])

  console.log(tasks);


  console.log(tasks);

  const addTask = (task: string) => {





    setTasks((prev) => [...prev, { text: task}])
  }



  return (
    <div className='App'>

      <div className="container">

        <div className="heading">
          Taskfiy
        </div>

        <InputField addTask={addTask} />

        <div className="tasks">

          {tasks.map((task, index) => <TaskField key={index} taskText={task.text} />)}

        </div>

      </div>

    </div>
  )
}

export default App
