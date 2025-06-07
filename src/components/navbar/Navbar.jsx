import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
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
                <div className='md:flex justify-between items-center'>
                    <div className='flex justify-between items-center'>
                        <a href="#">
                            <img src={logo} alt="#logo" />
                        </a>
                        <div>
                            <FaBars onClick={handleClic} className='block md:hidden text-2xl text-white' />
                        </div>
                    </div>
                    <div>
                        <ul className="hidden flex-col md:flex-row md:flex  mt-5 md:mt-0 gap-x-[68px]  items-center font-secondary text-white text-[16px] md:text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
                    </div>
                    <div className='hidden md:flex items-center gap-x-9'>
                        <button className='font-secondary text-lg text-white font-medium cursor-pointer'>Login</button>
                        <Button>Register</Button>
                    </div>
                </div>
            </Container>

            {
                show &&
                <div className='relative flex flex-col justify-center items-center'>
                    <div>
                        <RxCross2 onClick={() => setShow(false)} className='block absolute top-[-42px] right-5 bg-primary md:hidden text-2xl text-white cursor-pointer' />
                    </div>
                    <div>
                        <ul className="flex-col md:flex-row md:flex  mt-5 md:mt-0 gap-x-[68px]  items-center font-secondary text-white text-[16px] md:text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
                    </div>
                    <div className='text-white mt-7 md:mt-0 justify-between md:justify-normal flex gap-6 md:gap-9 items-center text-[16px] md:text-lg'>
                        <button className='font-secondary text-lg text-white font-medium cursor-pointer'>Login</button>
                        <Button>Register</Button>
                    </div> 
                </div>
            }

        </div>
    )
}

export default Navbar