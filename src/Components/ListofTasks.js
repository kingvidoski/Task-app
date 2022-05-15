import {FaTimes} from "react-icons/fa"

function ListofTasks(props) {
    return (
        <div className={`list ${props.reminder ? "reminder" : ""}`} onDoubleClick={()=>props.handleToggle(props.id)}>
                <div><span>{props.task}</span></div>
            <FaTimes className="iconX" onClick={()=> props.delete(props.id)}/>
            <p>{props.day}</p>
        </div>
    )
}

export default ListofTasks
