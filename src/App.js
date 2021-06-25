import Header from './components/Header'
import Tasks from './components/Tasks'
import React, { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'study - react',
      day: '2021-06-10',
      reminder: true,
    },
    {
      id: 2,
      text: 'study - data structure',
      day: '2021-06-11',
      reminder: true,
    },
    {
      id: 3,
      text: 'study - algorithm',
      day: '2021-06-12',
      reminder: false,
    }
  ])
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
