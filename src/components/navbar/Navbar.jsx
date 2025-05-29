import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Container from '../layout/Container'
import Button from '../layout/Button'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
// import Banner from '../../assets/banner.png'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClic = () => {
        setShow(true)
    }
    return (
        <div className='pt-6 xl:pt-8 relative'>
            {/* <div className='absolute top-0 left-0 -z-[9999] bg-center bg-cover bg-no-repeat'
                style={{
                    backgroundImage: `URL(${Banner})`,
                }}
            >
                
            </div> */}
            <Container>
                <div className='xl:flex justify-between items-center'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="#logo" />
                        <div>
                            <FaBars onClick={handleClic} className='block xl:hidden text-2xl text-white' />
                        </div>
                    </div>
                    <div>
                        <ul className='hidden xl:flex gap-[50px] font-secondary text-lg font-medium text-white'>
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
                    <div className='hidden xl:flex items-center gap-x-9'>
                        <button className='font-secondary text-lg text-white font-medium cursor-pointer'>Login</button>
                        <Button>Register</Button>
                    </div>
                </div>
            </Container>

            {
                show &&
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <RxCross2 onClick={() => setShow(false)} className='text-2xl text-white' />
                    </div>
                    <div>
                        <ul className='gap-[50px] font-secondary text-lg font-medium text-white'>
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
                    <div className='items-center gap-y-9'>
                        <button className='font-secondary text-lg text-white font-medium cursor-pointer'>Login</button>
                        <Button>Register</Button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar