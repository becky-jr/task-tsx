import './SingleTodo.css'

import useColor from '../../hooks/useColor'

import type { Todo } from "../../model";

import { MdFileDownloadDone } from "react-icons/md";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react"


type SingleTodo = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


function SingleTodo({ todo, todos, setTodos }: SingleTodo) {

    const { color, getNewColor } = useColor()


    const [editMode, setEditMode] = useState(false)

    const [editTodo, setEditTodo] = useState(todo.todo)


    const completeTask = (id: number) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };



    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos(todos.map((todo) => (
            todo.id == id ? { ...todo, todo: editTodo } : todo
        )))

        setEditMode(false)
    }


    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [editMode])

    return (
        <div className="SingleTodo" style={{ backgroundColor: color }}>

            <form className="todoSingleForm" onSubmit={(e) => handleEdit(e, todo.id)}>


                <div className="singleTodoContent">

                    <div className='singleText' style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                        {editMode ? (
                            <input
                                ref={inputRef}
                                type='text'
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                className='singleTodoInput'

                            />
                        ) : (
                            <span onDoubleClick={() => {
                                {
                                    if (!editMode && !todo.isDone) {
                                        setEditMode(!editMode)
                                    }
                                }
                            }} >{todo.todo}</span>
                        )}

                    </div>

                    <div className='singleIcons'>
                        {/* <span onClick={if(!editMode && !todo.isDone)  {
                            
                        }}> */}
                        <span>
                            <FaEdit size={22} onClick={() => {
                                if (!editMode && !todo.isDone) {
                                    setEditMode(!editMode)
                                }
                            }} />
                        </span>

                        <span>
                            <MdDelete size={22} onClick={() => { deleteTodo(todo.id) }} />
                        </span>

                        <span>
                            <MdFileDownloadDone size={22} onClick={() => completeTask(todo.id)} />
                        </span>
                    </div>

                </div>


            </form>

        </div>
    )
}

export default SingleTodo