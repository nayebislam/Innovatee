import React from 'react'
import aboutimage1 from '../../assets/aboutimage1.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const AboutSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='w-full max-w-[687px]'>
            <Slider {...settings}>
                <div className='relative mt-[107px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] z-10 border-[10px] border-[#F7F7FC]'></div>
                            <div className='py-[57px] px-[60px] bg-white rounded-[20px] relative shadow-[10px_10px_4px_-2px_rgba(0,0,0,0.25)]'>
                                {/* <img className='absolute left-[48px] top-[-96px]' src={aboutimage1} alt="" /> */}
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
                        <div className='relative mt-[107px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] z-10 border-[10px] border-[#F7F7FC]'></div>
                            <div className='py-[57px] px-[60px] bg-white rounded-[20px] relative shadow-[10px_10px_4px_-2px_rgba(0,0,0,0.25)]'>
                                {/* <img className='absolute left-[48px] top-[-96px]' src={aboutimage1} alt="" /> */}
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
                        <div className='relative mt-[107px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] z-10 border-[10px] border-[#F7F7FC]'></div>
                            <div className='py-[57px] px-[60px] bg-white rounded-[20px] relative shadow-[10px_10px_4px_-2px_rgba(0,0,0,0.25)]'>
                                {/* <img className='absolute left-[48px] top-[-96px]' src={aboutimage1} alt="" /> */}
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
            </Slider>
        </div>

    )
}

export default AboutSlider