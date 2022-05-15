import React from 'react'

function Back() {
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = new Date(),
        month = today.getMonth(),
        year = today.getFullYear();
    return (
        
    <div className='back-container'>
        <h3>{months[month]}</h3>
        <h3 className='year'>{year}</h3>
    </div>
    )
}

export default Back
