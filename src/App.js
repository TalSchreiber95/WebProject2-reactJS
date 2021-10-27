//Followed by this video: https://www.youtube.com/watch?v=w7ejDZ8SWv8
import { useState } from "react"
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask"
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import Local from "./components/Local";
import Logout from "./components/Logout";
const App = () => {
  const [setName, setNameLogin] = useState("NoName")
  const [Location,setLocation] = useState("none")
  const [showSetName, setShowNameLogin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Remainder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder }
        : task))
  }
  return (
    <div className="container">
      <Local local={Location}/>
      {showLogin && showSetName&&<Logout
          onLogin={() =>
            setShowLogin(!showLogin)}
          onAddUser={() =>
            setShowNameLogin(!showSetName)}
          onName={setNameLogin}
          OnLocation={setLocation}
      />}
      {!showLogin &&
        <Login
          onLogin={() =>
            setShowLogin(!showLogin)}
        />}
      {showLogin && !showSetName &&
        <AddUser
          onLogin={() =>
            setShowLogin(!showLogin)}
          onAddUser={() =>
            setShowNameLogin(!showSetName)}
          onName={setNameLogin}
          OnLocation={setLocation}
        />}
      <Header
        Name={setName}
        onAdd={() =>
          setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask &&
        <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />)
        : ('No tasks remaining')}
    </div>
  );
}

export default App;
