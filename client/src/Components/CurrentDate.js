import React from 'react'

import PropTypes from "prop-types"

function CurrentDate({ selectedDate }) {
    var optionsFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="flex float-right sm:m-0 md:m-0 text-xl text-gray-300">{selectedDate.toLocaleDateString("en-US", optionsFormat)}</div>
    )
}

CurrentDate.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
}

export default CurrentDate
