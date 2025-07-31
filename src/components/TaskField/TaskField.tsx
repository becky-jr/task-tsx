import './TaskField.css'

interface TaskName {
    taskText: string;
}

const TaskField = ({ taskText }: TaskName) => {




    return (
        <div className='TaskField'>

            <div className="taskName">
                {taskText}
            </div>

        </div>
    )
}

export default TaskField