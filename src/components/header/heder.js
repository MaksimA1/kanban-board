import css from './header.module.css'
import User from './user/user'

function Header () {

    return (
        <header className={css.header}>
            <p>Awesome Kanban Board</p>
            <User />
        </header>
    )
}

export default Header;