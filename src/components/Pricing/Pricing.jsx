import React from 'react'
import Container from '../layout/Container'
import pricingIcon1 from '../../assets/pricingIcon1.png'
import pricingIcon2 from '../../assets/pricingIcon2.png'
import pricingIcon3 from '../../assets/pricingIcon3.png'
import pricingcheckicon from '../../assets/pricingcheckicon.png'

const Pricing = () => {
    return (
        <section className='pb-[80px] xl:pb-[160px]'>
            <Container>
                <div className='text-center'>
                    <h1 className='max-w-[624px] m-auto font-primary font-bold text-[26px] leading-[36px] xl:text-[46px] xl:leading-[58px] text-titleColor'>Pricing Designed To Fit Your Business</h1>
                    <p className='font-primary font-bold text-[18px] xl:text-2xl leading-[100%] text-primary mt-[20px] xl:mt-[39px]'>Monthly</p>
                </div>
                <div className='flex flex-wrap xl:flex-nowrap gap-[30px] mt-[50px] xl:mt-[77px]'>
                    <div className='py-9 px-8 xl:py-[40px] xl:px-[60px] border-[1px] border-[#DCE7FE] rounded-[20px] group hover:bg-primary hover:border-transparent transition ease-out duration-400 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className='flex flex-col justify-center text-center'>
                            <img className='w-[90px] m-auto' src={pricingIcon1} alt="#pricingIcon1" />
                            <p className='font-primary font-bold text-[18px] leading-[28px] xl:text-[24px] xl:leading-[36px] text-primary mt-5 xl:mt-[32px] group-hover:text-[#43E7DF]'>Personal</p>
                            <h1 className='font-primary font-bold text-[30px] leading-[40px] xl:text-[44px] xl:leading-[54px] text-titleColor mt-0 xl:mt-[2px] mb-2.5 xl:mb-[14px] group-hover:text-white'>$10/mth</h1>
                            <p className='font-secondary font-medium text-[18px] leading-[18px] text-peraColor group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 20%)</span></p>
                        </div>
                        <ul className='flex flex-col gap-[8px] mt-[30px] xl:mt-[40px]'>
                            <li className='flex items-center gap-5 xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Calendar View</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Custom Templates</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>list view</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>board view</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Assignees & Due Dates</span>
                            </li>
                        </ul>
                        <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-titleColor py-[20px] px-[83px] xl:px-[104px] rounded-[6px] group-hover:bg-secondery cursor-pointer mt-[25px] xl:mt-[40px]'>Purchase Now</button>
                    </div>
                    <div className='py-9 px-8 xl:py-[40px] xl:px-[60px] border-[1px] border-[#DCE7FE] rounded-[20px] group hover:bg-primary hover:border-transparent transition ease-out duration-400 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className='flex flex-col justify-center text-center'>
                            <img className='w-[90px] m-auto' src={pricingIcon2} alt="#pricingIcon2" />
                            <p className='font-primary font-bold text-[18px] leading-[28px] xl:text-[24px] xl:leading-[36px] text-primary mt-5 xl:mt-[32px] group-hover:text-[#43E7DF]'>Team</p>
                            <h1 className='font-primary font-bold text-[30px] leading-[40px] xl:text-[44px] xl:leading-[54px] text-titleColor mt-0 xl:mt-[2px] mb-2.5 xl:mb-[14px] group-hover:text-white'>$25/mth</h1>
                            <p className='font-secondary font-medium text-[18px] leading-[18px] text-peraColor group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 35%)</span></p>
                        </div>
                        <ul className='flex flex-col gap-[8px] mt-[40px]'>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Timeline Review</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Custom fields</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Custom Templates</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Task dependencies</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Milestones Manage</span>
                            </li>
                        </ul>
                        <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-titleColor py-[20px] px-[83px] xl:px-[104px] rounded-[6px] group-hover:bg-secondery cursor-pointer mt-[25px] xl:mt-[40px]'>Purchase Now</button>
                    </div>
                    <div className='py-9 px-8 xl:py-[40px] xl:px-[60px] border-[1px] border-[#DCE7FE] rounded-[20px] group hover:bg-primary hover:border-transparent transition ease-out duration-400 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className='flex flex-col justify-center text-center'>
                            <img className='w-[90px] m-auto' src={pricingIcon3} alt="#pricingIcon3" />
                            <p className='font-primary font-bold text-[18px] leading-[28px] xl:text-[24px] xl:leading-[36px] text-primary mt-5 xl:mt-[32px] group-hover:text-[#43E7DF]'>Enterprise</p>
                            <h1 className='font-primary font-bold text-[30px] leading-[40px] xl:text-[44px] xl:leading-[54px] text-titleColor mt-0 xl:mt-[2px] mb-2.5 xl:mb-[14px] group-hover:text-white'>$10/mth</h1>
                            <p className='font-secondary font-medium text-[18px] leading-[18px] text-peraColor group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 40%)</span></p>
                        </div>
                        <ul className='flex flex-col gap-[8px] mt-[40px]'>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Data export & deletion</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Block native integrations</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Custom branding</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Lock custom fields</span>
                            </li>
                            <li className='flex items-center gap-[20px] xl:gap-[32px]'>
                                <img src={pricingcheckicon} alt="#pricingcheckicon" />
                                <span className='font-secondary font-medium text-[18px] leading-[32px] text-peraColor group-hover:text-white'>Priority support</span>
                            </li>
                        </ul>
                        <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-titleColor py-[20px] px-[83px] xl:px-[104px] rounded-[6px] group-hover:bg-secondery cursor-pointer mt-[25px] xl:mt-[40px]'>Purchase Now</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Pricing