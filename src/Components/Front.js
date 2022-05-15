import React from 'react'

function Front() {
    const days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"]
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        day = today.getDay();
        
        hour = hour % 12 || 12;

    return (
    <div className='front-container'>
        <h3 className='day'>{days[day]}</h3>
        <div>
            <h3>{hour}</h3>
            <h3>:</h3>
            <h3>{minutes}</h3>
            <h3>{hour>=12 ? 'AM' : 'PM'}</h3>
        </div>
    </div>
    )
}

export default Front
