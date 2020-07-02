
import React, { Component } from 'react'
import Header from '../Components/header'
import test from '../assets/images/cloudy-weather.gif'

import Skycons from 'react-skycons'


export class Dashboard extends Component {
    // componentDidMount() {
    //     var skycons = new Skycons({"color": "pink"});

    //     skycons.add("iconCurrent", Skycons.PARTLY_CLOUDY_DAY);
    // }

    render() {
        return (
            <div className="container">
                <Header />

            
            </div>
        )
    }
}

export default Dashboard
