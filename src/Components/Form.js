import {useState} from 'react'

function Form({show, onAdd}) {
  const [formData, setFormData] = useState({
                                              addTask: "",
                                              day: "",
                                              reminder: false
                                                })



  function formOnChange(e) {
    const {name, value, type, checked} = e.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }


  function onSubmit(e) {
    e.preventDefault();

    onAdd(formData)
    setFormData(prevData => {
      return {
        addTask: "",
        day: "",
        reminder: false
        }
      })
  }

  const style = {
    transform: `${show ? "translateX(-320px)" : ""}`,
    animationName: `${show ? "show" : ""}`,
    opacity: `${show ? 1 : 0}`,
    pointerEvents: `${show ? "initial" : ""}`
  }
  return (
    <div className="form-container" style={style} >
      <form onSubmit={onSubmit}>
        <div>
          <input id="task" name='addTask' value={formData.addTask} onChange={formOnChange} type="text" required/>
          <label htmlFor="task" >Add Task</label>
        </div>

        <div>
          <input id="dayTime" name='day' value={formData.day} type="text" onChange={formOnChange} required/>
          <label htmlFor="dayTime">Day & Time</label>
        </div>
        
        <input type="checkbox" id="isReminder" name='reminder' checked={formData.reminder} onChange={formOnChange} />
        <label htmlFor="isReminder" className="set">Set Reminder</label>
        <input type='submit' value='save' className='button'/>
      </form>
    </div>
  )
}

export default Form
