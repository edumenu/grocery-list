import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Calendar() {
    const { getGroceryLists, selectedDate } = useContext(GlobalContext)
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // var currentDay = new Date();  // Current Day

    useEffect(() =>{
        // console.log(addSubtract(-2))
    })

    // This function adds and subtracts days to current
    function addSubtract(e) {
        // Set selectedDate to the date being selected on the calendar
        selectedDate.setDate(selectedDate.getDate() + ((e.target.value) - selectedDate.getDay()));
        // Calling groceryList function to update grocery list per selcted date
        getGroceryLists(selectedDate.toISOString())
    }

    return (
        <div className="container w-screen h-32 mb-12">
            <div className="flex overflow-x-auto w-full">
                {/* Display a seven day week */}
                {
                    weekDay.map((day, index) => (
                        <div key={index} className="p-2">
                            <div className="card_element3 px-2 py-2 rounded-lg">
                                <button onClick={addSubtract} value={index} className={`${weekDay[selectedDate.getDay()] === day ? `card_element2` : `card_element3`} text-gray-300 text-3xl font-medium hover:card_element2 hover:text-gray-500 focus:outline-none px-4 py-6 rounded-lg`}>
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
