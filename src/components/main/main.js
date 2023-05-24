import { Route, Routes } from 'react-router-dom';
import Board from './board/board';
import DetailTask from '../detailTask/detailTask';
import css from './main.module.css';

function Main(props) {

    return (
        <main className={css.main}>
			<Routes>
				<Route exact path={'/'} element={<Board {...props} />} />

				<Route path={'/tasks/:taskId'} element={<DetailTask {...props } />} />
			</Routes>
        </main>
    )
}

export default Main;