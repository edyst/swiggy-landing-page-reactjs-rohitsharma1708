import React from 'react'
import '../herosect.css'
import Logo from '../../images/Swiggy_logo.png'


const heroSectA = () => {
    return (
        <div className="herosectA">
            <img className="logo" src={Logo} alt="swiggylogo_herosec" />
            <div className="buttons-section">
                <button className="login">Login </button>
                <button className="signup">Sign up </button>
            </div>
        </div>
    )
}
export default heroSectA