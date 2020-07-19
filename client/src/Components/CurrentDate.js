import React, { useEffect, useState } from 'react'

import PropTypes from "prop-types"

function CurrentDate({ selectedDate }) {
    const [currentDate, setCurrentDate] = useState('')
    var optionsFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  // Format for current date
    var todayDate  = new Date();  //Fetching today's date

    useEffect(() => {
        setCurrentDate(todayDate.toLocaleDateString("en-US", optionsFormat));    // Setting today's current date on the main page
    }, [todayDate, optionsFormat ])

    return (
        <div className="flex float-right sm:m-0 md:m-0 text-xl text-gray-300">{ selectedDate.toLocaleDateString("en-US", optionsFormat) }</div>
    )
}

// Proptype to determine the type of prop being used
CurrentDate.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
}

export default CurrentDate
