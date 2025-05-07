import React from 'react'
import banner from '../../assets/banner.png'

const Header = ({ children }) => {
    return (
        <div className='bg-no-repeat bg-center bg-cover'
            style={{
                backgroundImage: `URL(${banner})`
            }}
        >
            {children}
        </div>
    )
}

export default Header
