import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import './Loading.css'

export default function Loading () {

        const { promiseInProgress} =usePromiseTracker();
        return (
           promiseInProgress &&
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>

        )
}
