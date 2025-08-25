
import { useState } from 'react';
import './App.css'
import InputField from './components/InputField/InputField'
import TaskField from './components/TaskField/TaskField'

import type { Todo } from './model';

function App() {


  interface Task {
    text: string;
  }



  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState<Todo[]>([])

  // console.log(todo);

  console.log(todos);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }

  }





  // console.log(tasks);






  return (
    <div className='App'>

      <div className="container">

        <div className="heading">
          Taskfiy
        </div>

        <InputField handleAdd={handleAdd} setTodo={setTodo} todo={todo} />

        <div className="tasks">

          {/* {todos.map((todo, index) => <TaskField key={index} taskText={todo} />)} */}
          {/* {todos.map(())} */}

          {/* {todos.map((task) => (
            <TaskField
              key={task.id}
              taskText={task.todo}
              isDone={task.isDone}
              completeTask={() => completeTask(task.id)}
              deleteTodo={() => deleteTodo(task.id)} />
          ))
          } */}


          <TaskField

            todos={todos}
            setTodos={setTodos} />



        </div>

      </div>

    </div>
  )
}

export default App
