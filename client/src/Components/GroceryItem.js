import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

function GroceryItem({ item, toggleModalOpen }) {
    const signClass = item.amount < 0 ? `border-red-600` : `border-green-600`;
    const sign = item.amount < 0 ? `-` : `+`;

    return (
        <div className={`flex items-stretch card_element3 p-4 mb-1 border-r-8 ${signClass}`}>
            <a onClick={toggleModalOpen.bind(this, item)} href="#"><i className="flex-1 text-lg mt-2 fa fa-trash-o hover:text-red-600" aria-hidden="true"></i></a>
            <div className="flex-1 ml-4 font-bold text-2xl text-gray-700">{item.item}</div>
            <div className="flex-2 text-xl font-bold text-gray-700">{sign}${Math.abs(item.amount.toFixed(2))}</div>
        </div>
    )
}

// Proptype to determine the type of prop being used
GroceryItem.propTypes = {
    item: PropTypes.object.isRequired,
    toggleModalOpen: PropTypes.func.isRequired,
}

export default GroceryItem
