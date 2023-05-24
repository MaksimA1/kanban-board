import { useState, useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import data from './mock.json';
import Header from './components/header/heder';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)
  
	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </Router>
    </div>
  );
}

export default App
