import React from 'react'
import logo from '../../assets/logo.png'
import Container from '../layout/Container'
import Button from '../layout/Button'
import Banner from '../../assets/banner.png'

const Navbar = () => {
    return (
        <div className='pt-8 relative'>
            <img className='absolute top-0 left-0 -z-[9999]' src={Banner} alt="" />
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="#logo" />
                    </div>
                    <div>
                        <ul className='flex gap-[50px] font-secondary text-lg font-medium text-white'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-9'>
                        <button className='font-secondary text-lg text-white font-medium cursor-pointer'>Login</button>
                        <Button>Register</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar