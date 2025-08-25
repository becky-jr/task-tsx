import React, { useRef, useState } from 'react'
import './InputField.css'


interface InputProps {
    todo: string;

    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}


const InputField = ({ todo, setTodo, handleAdd }: InputProps) => {

    const [inputValue, setInputValue] = useState('')



    const inputRef = useRef<HTMLInputElement>(null)





    return (
        <div className='InputField'>

            <form
                action=""
                className="input"
                onSubmit={(e) => {
                    handleAdd(e)
                    inputRef.current?.blur();
                }}>
                <input
                    // onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="Task"
                    className="inputBox" />
                <button className="inputSubmit" type="submit">Go</button>
            </form>

        </div>
    )
}

export default InputField


