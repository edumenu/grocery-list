import React, { useEffect, useState } from 'react'

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState('')
    var optionsFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  // Format for current date
    var todayDate  = new Date();  //Fetching today's date

    useEffect(() => {
        setCurrentDate(todayDate.toLocaleDateString("en-US", optionsFormat));    // Setting today's current date on the main page
    }, [todayDate, optionsFormat ])

    return (
        <div className="flex float-right sm:m-0 md:m-0 text-xl text-gray-300">{ currentDate }</div>
    )
}

export default CurrentDate
