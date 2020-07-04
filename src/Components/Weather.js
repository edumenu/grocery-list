import React from 'react'

function Weather() {
    return (
        <div className="flex w-full">
            <div className="icon">
                <div className="rays">
                    <div className="ray"></div>
                    <div className="ray"></div>
                    <div className="ray"></div>
                    <div className="ray"></div>
                </div>
                <div className="sun"></div>
            </div>
            <div className="text-4xl text-gray-700">90 &#8457;</div>
        </div>
    )
}

export default Weather
