import Front from "./Front"
import Back from "./Back"

function Calendar() {
  return (
    <div className="right">
      <div className="card">
        <Front />
        <Back />
      </div>
    </div>
  )
}

export default Calendar
