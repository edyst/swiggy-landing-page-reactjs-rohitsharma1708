import React from 'react'
import '../footer.css'
import FB from '../../images/fb.png'
import IG from '../../images/ig.png'
import Twitter from '../../images/twitter.png'
import Pintrest from '../../images/pintrest.png'
import Swiggy from '../../images/logo_swiggy.png'



const fsec3 = () => {
    return (
        <div className="fsec3">
            <img className="logo_swiggy" src={Swiggy} alt="logo" />
            <h3 className="footer-copyright">© 2021 Swiggy</h3>
            <div className="social_list">
            <img className="social-item" src={FB} alt="logo" />
            <img className="social-item" src={Pintrest} alt="logo" />
            <img className="social-item" src={IG} alt="logo" />
            <img className="social-item" src={Twitter} alt="logo" />
            </div>
        </div>
    )
}
export default fsec3