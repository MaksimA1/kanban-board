import css from './footer.module.css'

function Footer(props) {
    const { tasks } = props
    const activeTasks = tasks.filter(task => task.status === 'backlog')
    const finishedTasks = tasks.filter(task => task.status === 'finished')

    return (
        <footer className={css.footer}>
            <div className={css.tasks}>
            
                <p className={css.taskCount}>Active tasks: &lt;{activeTasks.length}&gt;</p>
                <p className={css.taskCount}>Finished tasks: &lt;{finishedTasks.length}&gt;</p>
            </div>
            <div className={css.nameUser}>
                <p>Kanban board by &lt;Maksim Alisov&gt;, &lt;2023&gt; </p>
            </div>
        </footer>
    )
}

export default Footer;