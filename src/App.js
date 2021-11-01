//Followed by this video: https://www.youtube.com/watch?v=w7ejDZ8SWv8
import { useState,useEffect } from "react"
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask"
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import Local from "./components/Local";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route} from "react-router-dom";
const App = () => {
  const [setName, setNameLogin] = useState("NoName")
  const [Location,setLocation] = useState("none")
  const [showSetName, setShowNameLogin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
  const getTasks= async()=>{
    const taskFromServer=await fetchTasks()
    setTasks(taskFromServer)
  }
  getTasks()
  }, [])
  //Fetch Tasks
  const fetchTasks= async()=> {
    const res =await fetch('http://localhost:5000/tasks')
    const data= await res.json()
    return data
  }
    //Fetch Task
    const fetchTask= async(id)=> {
      const res =await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
      return data
    }
  //Add Task
  const addTask =async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
    const newTask =await res.json()
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
  })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Remainder
  const toggleReminder =async (id) => {
    const taskToToggle= await fetchTask(id)
    const updTask ={...taskToToggle,
      reminder:!taskToToggle.reminder}
      const res=await fetch(
        `http://localhost:5000/tasks/${id}`,{
        method:'PUT',
        headers:{'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
      })
    const data= await res.json()
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !data.reminder }
        : task))
  }
  return (
    <Router>
    <div className="container">
      {showLogin && <Local local={Location}/>}
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
     
      {/* <Route path='/' exact */}
       {/* rander={(props)=>( */}
      {/* <>  */}
      {showAddTask &&
        <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />)
        : ('No tasks remaining')}
      {/* </> */}
      {/* )}/> */}
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
