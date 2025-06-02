import React from 'react'
import Container from '../layout/Container'
import aboutimage from '../../assets/aboutimage.png'
import '../About/about.css'
import AboutSlider from './AboutSlider'


const About = () => {
    return (
        <section className='py-[90px] xl:py-[200px] bg-[#F4FAFA] '>
            <Container>
                <div className='xl:flex justify-between items-center'>
                    <div>
                        <h1 className='max-w-[594px] font-primary font-bold text-[27px] leading-[36px] xl:text-[46px] xl:leading-[58px] text-titleColor'>What they are talking about us?</h1>
                        <p className='max-w-[503px] font-secondary font-medium text-[18px] leading-7 xl:leading-[32px] text-peraColor mt-[10px] mb-[30px] xl:mt-[20px] xl:mb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                        <button className='font-secondary text-lg leading-[20px] text-white py-[20px] px-12 rounded-[6px] bg-primary cursor-pointer'>Get Started</button>
                        <div className='flex gap-[30px] items-center mt-[40px] xl:mt-[80px]'>
                            <div>
                                <img src={aboutimage} alt="#aboutimage" />
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className=' relative font-primary font-black text-[24px] leading-[36px] text-[#52C5B6] after:content-[""] after:w-[1px] after:h-[16px] after:bg-[#DADBE2] after:left-12 after:rounded-[5px] after:top-[50%] after:-translate-y-[50%] after:absolute '>4.5</h1>
                                    <div className='ml-[22px] flex gap-[3px] text-[#FDB400]'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <p className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor'>280k Total Review</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <AboutSlider />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About