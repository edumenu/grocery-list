import React, { useEffect } from 'react'

function Calendar() {
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var currentDay = new Date();  // Current Day

    return (
        <div className="container w-screen h-32 mb-12">
            <div className="flex overflow-x-auto w-full">
                {/* Display a seven day week */}
                {
                    weekDay.map((day, index) => (
                        <div key={index} className="p-2">
                            <div className="card_element3 px-2 py-2 rounded-lg">
                                <button className={`${weekDay[currentDay.getDay()] == day ? `card_element2`:`card_element3`} text-gray-300 text-3xl font-medium hover:card_element2 hover:text-gray-500 px-4 py-6 rounded-lg`}>
                                    {day}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calendar
