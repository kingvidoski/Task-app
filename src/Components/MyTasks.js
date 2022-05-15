import { useState, useEffect } from "react"
import Header from "./Header"
import Form from "./Form"
import ListofTasks from "./ListofTasks"


function MyTasks() {
    const [allEvent, setAllEvent] = useState([])
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        const getDatas = async () => {
            const dataFromSever = await fetchDatas()
            setAllEvent(dataFromSever)
        }
        getDatas();
    }, [])

    const fetchDatas = async () => {
        const res = await fetch('http://localhost:5000/events')
        const data = await res.json()
        return data
      }
      const fetchData = async (id) => {
        const res = await fetch(`http://localhost:5000/events/${id}`)
        const data = await res.json()
        return data
    }

    const addEvent = async(event) => {
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(event)
      })
      const data = await res.json()
        
      setAllEvent([...allEvent, data])
    }
  

    const listData = allEvent.map(event => {
        return <ListofTasks
                    key={event.id}
                    id={event.id}
                    task={event.addTask}
                    day={event.day}
                    reminder={event.reminder}
                    delete={deleteEvent}
                    handleToggle={toggleReminder}
                />
    })

  function toggleClick() {
    setVisibility(preState => !preState)
  }

  async function toggleReminder(id) {
    const toggleEvent = await fetchData(id)
    const upDataEvent = {...toggleEvent, reminder: !toggleEvent.reminder}
    const res = await fetch(`http://localhost:5000/events/${id}`, {
      method: 'PUT',
      headers: {'Content-type' : 'application/json'},
      body:JSON.stringify(upDataEvent)
      })
    const data = await res.json()
    
    setAllEvent( allEvent.map((set) => 
        set.id === id ? {...set, reminder: data.reminder} : set
      ))
    }
  
  async function deleteEvent(id) {
    await fetch(`http://localhost:5000/events/${id}`, {method: 'DELETE'})
    setAllEvent(allEvent.filter(currentData=> currentData.id !== id))
  }



  return (
    <div className="myTask-container">
      {visibility && <div className="overlay"></div>}
      <Header handleClick={toggleClick} show={visibility}/>
      <Form show={visibility} onAdd={addEvent}/>
      {allEvent.length > 0 ? <div className="list-container">
      {listData}
      </div> : <h3>No Event</h3>}
    </div>
  )
}

export default MyTasks
