import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Income() {
    const { groceryLists } = useContext(GlobalContext);
    const amount = groceryLists.map(groceryList => groceryList.amount)
    // Using a reducer to calculate the total income
    const income = amount.filter(item => item > 0).reduce((previousScore, currentScore) => (previousScore += currentScore), 0).toFixed(2)

    return (
        <div className="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
            <div className="card_element3 px-4 py-6 rounded-lg">
                <h2 className="font-medium text-3xl text-green-600">${ income }</h2>
                <p className="leading-relaxed text-gray-300">Income</p>
            </div>
        </div>
    )
}

export default Income
