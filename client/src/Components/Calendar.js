import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { withRouter } from 'react-router-dom';

function Calendar() {
    const { getGroceryLists, selectedDate } = useContext(GlobalContext)
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // This function adds and subtracts days to current
    function addSubtractDay(e) {
        selectedDate.setDate(selectedDate.getDate() + ((e.target.value) - selectedDate.getDay()));
        getGroceryLists(selectedDate.toISOString())
    }

    return (
        <div className="container w-screen h-32 mb-12">
            <div className="flex overflow-x-auto w-full">
                {
                    weekDay.map((day, index) => (
                        <div key={index} className="p-2">
                            <div className="card_element3 px-2 py-2 rounded-lg">
                                <button onClick={addSubtractDay} value={index} className={`${weekDay[selectedDate.getDay()] === day ? `card_element2` : `card_element3`} text-gray-300 text-3xl font-medium hover:card_element2 hover:text-gray-500 focus:outline-none px-4 py-6 rounded-lg`}>
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

export default withRouter(Calendar)
