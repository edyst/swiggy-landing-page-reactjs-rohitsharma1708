import React from 'react'
import '../herosect.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const herosectB = () => {
    return (
        <div>
            <div className="herosectBA">
                <h1 className="heading-hsec2"><span className="animation-heading"></span></h1>
                <p className="dull-text">Order food from favourite restaurants near you.</p>
            </div>
            <div className="herosectBB">
                <div className="input-container">
                    <div className="inputPlocate">
                        <input className="input-box" type="text" placeholder="Enter your delivery location" />
                        <div className="locate-btn">
                            <FontAwesomeIcon icon="crosshairs" />
                            <span> &nbsp;Locate Me</span>
                        </div>
                    </div>
                    <button className="find-food-btn">Find Food</button>
                </div>
            </div>
        </div>
    )
}
export default herosectB