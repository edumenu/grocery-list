import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Balance() {
    const { groceryLists } = useContext(GlobalContext);
    const amount = groceryLists.map(groceryList => groceryList.amount)
    const total = amount.reduce((previousAmount, currentAmount) => (previousAmount += currentAmount), 0).toFixed(2)

    return (
        <div className="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
            <div className="card_element4 px-2 py-6 rounded-lg">
                <h2 data-testid="h3tag" className="font-medium text-3xl lg:text-2xl text-gray-300">${total}</h2>
                <p className="leading-relaxed text-gray-300">Your balance</p>
            </div>
        </div>
    )
}

export default Balance
