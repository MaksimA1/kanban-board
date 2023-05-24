import css from './user.module.css'
import userAvatar from './user-avatar.png'
import arrow from './Vector.svg'
import arrow1 from './Vector1.png'
import { useState } from 'react';

function User() {
    const [isMenuVisible, setMenuVisible] = useState(false)

    const handleMenuVisible = () => {
        setMenuVisible(!isMenuVisible)
    }

    return (
        <div className={css.user}>
        <img src={userAvatar} className={css.imgAvatar} />
        <button className={css.buttonArrow} onClick={handleMenuVisible}>
            {isMenuVisible ? <img src={arrow1} /> : <img src={arrow} />}
         </button>

         {isMenuVisible && (
            <div className={css.userMenu}>
                <a href='/' className={css.userMenuLink}>Profile</a>
                <a href='/' className={css.userMenuLink}>Log Out</a>
            </div>
         )}
        </div>
    )
}

export default User;