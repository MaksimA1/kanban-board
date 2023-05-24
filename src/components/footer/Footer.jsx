import {LIST_TYPES} from '../../config'
import css from './Footer.module.scss'

function Footer(props) {
	const {tasks} = props
	console.log(Object.values(LIST_TYPES));
	return (
		<footer className={css.footer}>
			<div className={css.active}>Active tasks:
				{tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}
			</div>
			<div className={css.finished}>Finished tasks:
			{tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}</div>
			<div className={css.copy}>
				Kanban board by <a href='https://github.com/MaksimA1' target='_blank' rel='noreferrer'>@alisov</a>, 2023</div>
		</footer>
	)
}

export default Footer
