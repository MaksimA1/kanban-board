import css from './column.module.css';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../../config';
import { useState } from 'react';
import clsx from 'clsx';
import FormAddNewTask from '../../forms/formAddNewTask';
import Select from '../../select/select';

function Column(props) {
    const { type, status, tasks, addNewTask, noFiltredTasks, setTasks } = props

    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setisSelectVisible] = useState(false)

    const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

    const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

    const handleSelectVisible = () => {
        setisSelectVisible(!isSelectVisible)
    }

    const taskRemove = (e) => {
        console.log(e.target.value)
        const findTask = noFiltredTasks.find(task => task.id === e.target.value)
        if (findTask) {
            setTasks([...noFiltredTasks.filter(task => task !== findTask)])
        }
    }

    return (
       
        <div className={css.column}>
            <h3 className={css.header}>{status}</h3>
            {tasks.map(task => {
                return (
                    <div key={task.id} className={css.card}>
                        <Link to={`/tasks/${task.id}`} className={css.taskLink}>
                            <p className={css.cardTitle}>{task.title}</p>
                        </Link>
                        <button value={task.id} className={css.button} onClick={taskRemove}>&#10006;</button>
                    </div>
                    )
                }
            )}

            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask formSubmit={formSubmit} />
            )}
            
            {type === LIST_TYPES.BACKLOG && !isFormVisible &&
                (<button className={css.button} onClick={handleAddNewClick}>+ Add card</button>)
            }

            <div className={css.selectCard}>
                {type !== LIST_TYPES.BACKLOG && isSelectVisible && (
                    <Select {...props}  handleSelectVisible={handleSelectVisible}/>
                )}

                {type !== LIST_TYPES.BACKLOG && 
                    <button  className={css.button} onClick={handleSelectVisible}> + Add card </button>
                }
            </div>
        </div>           
)
}

export default Column;