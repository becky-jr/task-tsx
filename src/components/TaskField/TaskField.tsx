
import './TaskField.css'
import type { Todo } from '../../model';
import SingleTodo from '../SingleTodo/SingleTodo';



interface taskProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}




const TaskField = ({ todos, setTodos }: taskProps) => {








    return (
        todos.map((todo) => (
            <SingleTodo 
            key={todo.id} 
            todo={todo}
            todos={todos}
            setTodos={setTodos}/>
        ))
    )
}

export default TaskField