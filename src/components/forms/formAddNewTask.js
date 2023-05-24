import css from './formAddNewTask.module.css'
import { useState } from 'react'

function FormAddNewTask (props) {

    const {formSubmit} = props
    const [values, setValues] = useState({
		title: '' 
    })

    const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title)
		}
	}

     const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

    return (
        <form onSubmit={handleSubmit}>
            <input className={css.card} name='title' placeholder='add new task' type='text' value={values.title} onChange={handleChange}/>

            {values.title ?  (
                <button className={css.submit} type='submit'>Submit</button>
            ) : (
                <p className={css.valid}>enter tasks..</p>
            )}            
        </form>
    )
}

export default FormAddNewTask;