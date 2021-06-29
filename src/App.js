import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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



  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(el => el.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(el => el.id === id ?
      { ...el, reminder: !el.reminder } : el))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask}/> }
      {tasks.length > 0 ?
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
