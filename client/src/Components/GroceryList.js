import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import GroceryItem from './GroceryItem';
import PropTypes from 'prop-types'

function GroceryList({ historyButton, toggleModalOpen }) {
    const { groceryLists, getGroceryLists, selectedDate } = useContext(GlobalContext);

    useEffect(() => {
        getGroceryLists(selectedDate.toISOString());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={`history-list overflow-y-auto mb-4 max-h-screen ${historyButton ? "block" : "hidden"}`} >
            {(groceryLists).length > 0 ? groceryLists.map((item, index) => (
                <GroceryItem key={index} item={item} toggleModalOpen={toggleModalOpen} />
            )) : <h2 className="text-3qxl font-bold text-center text-gray-300 mt-12">There are no items in your list</h2>}
        </div>
    )
}

GroceryList.propTypes = {
    historyButton: PropTypes.bool.isRequired,
    toggleModalOpen: PropTypes.func.isRequired,
}

export default GroceryList
