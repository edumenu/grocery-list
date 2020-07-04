import React from 'react'
import PropTypes from 'prop-types'

function AddGrocery({ addGroceryButton }) {
    return (
        <div className={`add-grocery overflow-y-auto max-h-screen ${addGroceryButton ? "block" : "hidden"}`} >
            <form method="POST" action="#login">
                <div className="mb-8">
                    <label className="block text-gray-600 text-md font-bold mb-2"> Grocery item </label>
                    <input name="item" id="item" type="text" className="input_element block pr-10 w-3/4 py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                </div>

                <div className="mb-8">
                    <label className="block text-gray-600 text-md font-bold mb-2"> Amount </label>
                    <input name="amount" id="amount" type="number" className="input_element block pr-10 w-3/4 py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                </div>

                <div className="mb-4 text-center">
                    <button className="transition duration-500 button hover:button_hover focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit"> Add transaction </button>
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
