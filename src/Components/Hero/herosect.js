import React from 'react'
import HeroSECA from './herosectA/herosectA'
import HeroSECB from './herosectB/herosectB'
import HeroSECC from './herosectC/herosectC'
import './herosect.css'

const herosect = () => {
    return (
        <div className="herosect">
            <div className="hero-container">
                <HeroSECA />
                <HeroSECB />
                <HeroSECC />

            </div>
        </div>
    )
}
export default herosect