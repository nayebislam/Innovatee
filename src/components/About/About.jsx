import React from 'react'
import Container from '../layout/Container'
import aboutimage from '../../assets/aboutimage.png'
import aboutimage1 from '../../assets/aboutimage1.png'
import '../About/about.css'


const About = () => {
    return (
        <section className='py-[200px] bg-[#F4FAFA]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='max-w-[594px] font-primary font-bold text-[46px] leading-[58px] text-titleColor'>What they are talking about us?</h1>
                        <p className='max-w-[503px] font-secondary font-medium text-[18px] leading-[32px] text-peraColor mt-[20px] mb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                        <button className='font-secondary text-lg leading-[20px] text-white py-[20px] px-12 rounded-[6px] bg-primary cursor-pointer'>Get Started</button>
                        <div className='flex gap-[30px] items-center mt-[80px]'>
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
                    <div className='about_part py-[57px] px-[60px] bg-white rounded-[20px] relative'>
                        <img className='absolute left-[48px] top-[-96px]' src={aboutimage1} alt="" />
                        <p className='max-w-[567px] font-secondary text-[22px] leading-[44px] text-peraColor'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
                        <div className='flex justify-between items-end mt-[37px]'>
                            <div>
                                <h1 className='font-primary font-bold text-[24px] leading-[36px] text-[#30344E]'>Robert Fox</h1>
                                <p className='font-secondary text-[16px] leading-[26px] text-[#30344E] mt-[4px]'>Digital Marketer</p>
                            </div>
                            <div className='flex gap-[3px] text-[#FDB400]'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About