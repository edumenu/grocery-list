import React , { useState } from 'react'
import PropTypes from 'prop-types'

function Grocery({ historyButton }) {

    return (
        <div className={`history-list overflow-y-auto pb-40 max-h-screen ${historyButton ? "block" : "hidden"}`} >
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoesss</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-red-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-red-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
            <div className="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600">
                <h2 className="font-bold">Tomatoes</h2>
            </div>
        </div>
    )
}

// Proptype to determine the type of prop being used
Grocery.propTypes = {
    historyButton: PropTypes.bool.isRequired,
}

export default Grocery
