import React, { useEffect, useState } from 'react'

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState('')
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  // Format for current date
    var today  = new Date();  //Fetching today's date

    useEffect(() => {
        setCurrentDate(today.toLocaleDateString("en-US", options));    // Setting today's current date on the main page
    }, [])

    return (
        <div className="flex float-right sm:m-0 md:m-0 text-xl text-gray-700">{ currentDate }</div>
    )
}

export default CurrentDate
