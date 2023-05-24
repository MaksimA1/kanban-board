import uniqid from 'uniqid';
import {LIST_TYPES, LIST_COPY} from '../../../config';
import Column from '../column/column';
import css from './board.module.css';

function Board(props) {
    const {tasks, setTasks} = props

    const addNewTask = (title, description) => {
		const task = {
			id: uniqid(),
			title,
			description,
			status: 'backlog',
		}

		setTasks([...tasks, task]);
	}
    

    return (
        Object.values(LIST_TYPES).map(type => {
            const listTasks = tasks.filter(task => task.status === type)
            return (
                <Column
                    key={LIST_COPY[type]}
                    type={type}
                    status={LIST_COPY[type]}
                    tasks={listTasks || []}
                    addNewTask={addNewTask}
                    noFiltredTasks={tasks}
                    setTasks={setTasks}
                />
            )
        })
    )
}

export default Board;