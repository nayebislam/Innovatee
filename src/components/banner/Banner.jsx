import React from 'react'
import Container from '../layout/Container'
import laptop from '../../assets/laptop.png'

const Banner = () => {
    return (
        <section>
            <div className='pt-[60px] pb-[300px] lg:pt-[195px] lg:pb-[558px]'>
                <Container>
                    <div className='relative'>
                        <div className='text-center '>
                            <h1 className='font-primary lg:text-[56px] text-[30px] text-white lg:leading-[64px] leading-[45px] font-bold max-w-[796px] mx-auto'>Get your work done with Management Tool</h1>
                            <p className='font-secondary text-lg text-white lg:leading-8 leading-7 max-w-[467px] mx-auto lg:mt-[20px] mt-[10px]'>The world's first project management platform that connects everything</p>
                            <div className='text-center lg:mt-8 mt-5 relative'>
                                <input type="Email" placeholder='Your business email' className='lg:w-[480px] w-full py-5 pl-6 rounded-[6px] m-auto bg-white outline-0 placeholder:text-[#B4B6C4] placeholder:font-primary text-black' />
                                <button className='font-secondary text-lg leading-[20px] text-[#2C2643] py-[15px] px-[28.5px] rounded-[6px] bg-secondery cursor-pointer absolute top-[7px] right-2 lg:right-[473px]'>Try for free</button>
                            </div>
                        </div>
                        <div className='absolute left-[-3%] bottom-[-255px] lg:bottom-[-815px]'>
                            <img src={laptop} alt="#laptop" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Banner