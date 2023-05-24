import { useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './detailTask.module.css';

function DetailTask(props) {
    const { pathname } = useLocation()
    const { tasks, setTasks } = props
    const task = tasks.find(task => `/tasks/${task.id}` === pathname)

    const [values, setValues] = useState({
       description: task.description
    })

    const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}
    
    const saveDescription = () => {
        task.description = values.description
        setTasks([...tasks])
    }

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <p className={css.title}>{task.title}</p>
                <Link to='/' className={css.btnClose}>&#10006;</Link>
            </div>

            <textarea className={css.description} name='description'  type='text' value={values.description} onChange={handleChange} placeholder='This task has no description'/>
            <Link to='/' className={css.save} onClick={saveDescription}>save</Link>
        </div>
    )
}

export default DetailTask;