import React from 'react'
import Container from '../layout/Container'
import laptop from '../../assets/laptop.png'

const Banner = () => {
    return (
        <section>
            <div className='pt-[50px] pb-[350px] sm:pb-[400px] xl:pt-[195px] xl:pb-[558px]'>
                <Container>
                    <div className=''>
                        <div className='relative text-center '>
                            <h1 className='font-primary xl:text-[56px] text-[30px] sm:text-[37px] text-white xl:leading-[64px] leading-[40px] sm:leading-[47px] font-bold max-w-[796px] mx-auto'>Get your work done with Management Tool</h1>
                            <p className='font-secondary text-lg text-white xl:leading-8 leading-7 max-w-[467px] mx-auto xl:mt-[20px] mt-[10px]'>The world's first project management platform that connects everything</p>
                            <div className='text-center xl:mt-8 mt-5 relative'>
                                <input type="Email" placeholder='Your business email' className='sm:w-[480px] w-full py-5 pl-6 rounded-[6px] m-auto bg-white outline-0 placeholder:text-[#B4B6C4] placeholder:font-primary text-black' />
                                <button className='font-secondary text-lg leading-[20px] text-[#2C2643] py-[15px]  px-[20px] xl::px-[28.5px] rounded-[6px] bg-secondery cursor-pointer absolute top-[7px] right-1.5 sm:right-26.5 x:right-[473px]'>Try for free</button>
                            </div>
                            <div className=' absolute left-[-14%] xl:left-[-3%] bottom-[-308px] sm:bottom-[-480px] xl:bottom-[-815px]'>
                                <img src={laptop} alt="#laptop" />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Banner