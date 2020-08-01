import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ error_message, ClearErrorMessage }) {
    return (
        <div className={`bg-red-600 border-l-4 border-white text-gray-200 p-2 rounded-lg mb-4 ${error_message == null ? "hidden" : "block"}`} role="alert">
            <p className=""><span className="font-bold">Error:  </span> {error_message} <button onClick={ClearErrorMessage} className="float-right mr-2">x</button></p>
        </div>
    )
}

ErrorMessage.propTypes = {
    error_message: PropTypes.string,
    ClearErrorMessage: PropTypes.func.isRequired,
}

export default ErrorMessage
