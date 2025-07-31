import { useState } from 'react'
import './InputField.css'


interface InputProps {
    addTask: (task: string) => void
}


const InputField = ({ addTask }: InputProps) => {

    const [inputValue, setInputValue] = useState('')







    return (
        <div>

            <form
                action=""
                className="input"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!inputValue.trim()) return;
                    addTask(inputValue);
                    setInputValue('');
                }}>
                <input
                    onChange={(e) => setInputValue(e.target.value)}

                    value={inputValue}
                    type="text"
                    placeholder="Task"
                    className="inputBox" />
                <button className="inputSubmit" type="submit">Go</button>
            </form>

        </div>
    )
}

export default InputField
