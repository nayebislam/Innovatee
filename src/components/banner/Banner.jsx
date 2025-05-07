import React from 'react'
import Container from '../layout/Container'
import laptop from '../../assets/laptop.png'

const Banner = () => {
    return (
        <div className='my-[98px]'>
            <Container>
                <div className='text-center '>
                    <h1 className='font-primary text-[56px] text-white leading-[64px] font-bold max-w-[796px] mx-auto'>Get your work done with Management Tool</h1>
                    <p className='font-secondary text-lg text-white leading-8 max-w-[467px] mx-auto mt-[20px]'>The world's first project management platform that connects everything</p>
                    <div className='text-center mt-8 relative'>
                        <input type="text" placeholder='Your business email'  className='w-[480px] py-5 pl-6 rounded-[6px] m-auto bg-white outline-0 placeholder:text-[#B4B6C4] placeholder:font-primary text-black'/>
                        <button className='font-secondary text-lg leading-[20px] text-[#2C2643] py-[15px] px-[28.5px] rounded-[6px] bg-secondery cursor-pointer absolute top-[7px] right-[473px]'>Try for free</button>
                        <img className='mt-[98px]' src={laptop} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner