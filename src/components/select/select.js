import css from './select.module.css';
import { LIST_TYPES } from '../../config';


function Select(props) {
    const { noFiltredTasks, type, setTasks, handleSelectVisible } = props

     const handleSelectChange = (e) => {
        const updatedTask = noFiltredTasks.map(task => {
            if (task.id === e.target.value) {
                return { ...task, status: type }
            } 
            return task
        })
        setTasks(updatedTask)
        handleSelectVisible(false)
     }

    return (
        <select key={noFiltredTasks} className={css.select} onChange={handleSelectChange}>

            <option className={css.chooseTask}>choose task</option>
        
            {type === LIST_TYPES.READY && (
                noFiltredTasks.filter(task => task.status === 'backlog').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === LIST_TYPES.IN_PROGRESS && (
                noFiltredTasks.filter(task => task.status === 'ready').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === LIST_TYPES.FINISHED && (
                noFiltredTasks.filter(task => task.status === 'inProgress').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }
        
        </select>

    )
}


export default Select;