import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

import PropTypes from 'prop-types'

function AddGrocery({ addGroceryButton, changeHistoryListStatus }) {
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction, error, groceryLists } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault(); // Prevents a link from opening a URL

        const newGroceryItem = {
            item,
            amount
        }

        // Calling the add transaction    
        addTransaction(newGroceryItem);

        // Display history list
        changeHistoryListStatus();

        // Setting values back to default
        setItem('')
        setAmount('')

    }


    return (
        <div className={`add-grocery overflow-y-auto max-h-screen ${addGroceryButton ? "block" : "hidden"}`} >
            <form onSubmit={onSubmit}>
                <div className="mb-8">
                    <label htmlFor="item" className="block text-gray-300 text-md font-bold mb-2"> Grocery item </label>
                    <input name="item" id="item" value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder={ groceryLists.length === 0 ? "Total" : "" } className="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" required/>
                </div>

                <div className="mb-8">
                    <label htmlFor="amount" className="block text-gray-300 text-md font-bold mb-2"> Amount </label>
                    <input name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" type="number" className="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" required/>
                </div>

                <span className="text-xl font-bold text-red-600">{ error ? error : ""}</span>

                <div className="mb-4 text-center">
                    <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-gray-300 font-bold py-4 px-8 mx-6" type="submit"> Add transaction </button>
                </div>
            </form>
        </div>
    )
}

// Proptype to determine the type of prop being used
AddGrocery.propTypes = {
    addGroceryButton: PropTypes.bool.isRequired,
}

export default AddGrocery
