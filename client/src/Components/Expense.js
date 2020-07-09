import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Expense() {
    const { groceryLists } = useContext(GlobalContext);
    // Obtaining the the total amount 
    const amount = groceryLists.map(groceryList => groceryList.amount)
    // Using a reducer to calculate the total amount spent so far
    const expense = amount.filter(item => item < 0).reduce((previousScore, currentScore) => (previousScore += currentScore), 0).toFixed(2)

    return (
        <div className="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
            <div className="card_element4 px-4 py-6 rounded-lg">
                <h2 className="font-medium text-3xl text-red-600">${ expense }</h2>
                <p className="leading-relaxed">Expense</p>
            </div>
        </div>
    )
}

export default Expense
