import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import PropTypes from 'prop-types';

function AddGrocery({ addGroceryButton, changeHistoryListStatus, selectedDate }) {
    const { addTransaction, error, groceryLists } = useContext(GlobalContext);
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(0)
    const [createdAt, setcreatedAt] = useState('')

    function handleGroceryChange(e) {
        setItem(e.target.value)
        setcreatedAt(selectedDate.toISOString().substr(0, 10))
    }

    function handleAmountChange(e) {
        setAmount(e.target.value)
        setcreatedAt(selectedDate.toISOString().substr(0, 10))
    }

    const onSubmit = e => {
        e.preventDefault();

        const newGroceryItem = {
            item,
            amount,
            createdAt
        }

        addTransaction(newGroceryItem);
        changeHistoryListStatus();
        setItem('')
        setAmount('')
    }


    return (
        <div className={`add-grocery overflow-y-auto max-h-screen ${addGroceryButton ? "block" : "hidden"}`} >
            <form onSubmit={onSubmit}>
                <div className="mb-8">
                    <label htmlFor="item" className="block text-gray-300 text-md font-bold mb-2"> Grocery item </label>
                    <input name="item" id="item" value={item} onChange={(e) => handleGroceryChange(e)} type="text" placeholder={groceryLists.length === 0 ? "Total" : ""} className="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" required />
                </div>

                <div className="mb-8">
                    <label htmlFor="amount" className="block text-gray-300 text-md font-bold mb-2"> Amount </label>
                    <input name="amount" value={amount} onChange={(e) => handleAmountChange(e)} id="amount" type="number" className="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" required />
                </div>

                <div className="mb-8 hidden">
                    <label htmlFor="date" className="block text-gray-300 text-md font-bold mb-2"> Date </label>
                    <input name="date" value={createdAt} onChange={(e) => setcreatedAt(e.target.value)} id="date" type="text" className="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" required />
                </div>
                <span className="text-xl font-bold text-red-600">{error ? error : ""}</span>

                <div className="mb-4 text-center">
                    <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-gray-300 font-bold py-4 px-8 mx-6" type="submit"> Add transaction </button>
                </div>
            </form>
        </div>
    )
}

AddGrocery.propTypes = {
    addGroceryButton: PropTypes.bool.isRequired,
    changeHistoryListStatus: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
}

export default AddGrocery
