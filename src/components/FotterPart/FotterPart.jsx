import React from 'react'
import Container from '../layout/Container'
import ContactUsbg from '../../assets/ContactUsbg.png'
import footerlogo from '../../assets/footerlogo.png'
import { CgGoogle } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";


const FotterPart = () => {
    return (
        <section className='bg-[#F7F7FC] mt-[100px] xl:mt-[309px]'>
            <Container>
                <div className='relative'>

                    <div className='absolute left-0 top-[-60px] xl:top-[-150px] flex justify-between py-8 px-5 xl:py-[100px] xl:px-[102px] items-center w-full bg-no-repeat bg-center bg-cover rounded-2xl'
                        style={
                            {
                                backgroundImage: `url(${ContactUsbg})`
                            }
                        }
                    >
                        <h1 className='max-w-[577px] font-primary font-bold text-[16px] leading-[26px] xl:text-[46px] xl:leading-[58px] text-white'>Don’t find the answer? contact us for any query.</h1>
                        <button className='font-secondary text-[16px] xl:text-lg leading-[20px] text-[#2C2643] py-3 xl:py-[20px] px-4 xl:px-12 rounded-[6px] bg-secondery cursor-pointer'>Contact Us</button>
                    </div>
                    <div className='xl:flex pt-[130px] xl:pt-[291px] pb-[50px] xl:pb-[86px]'>
                        <div>
                            <a href="#">
                                <img src={footerlogo} alt="#footerlogo" />
                            </a>
                            <p className='max-w-[263px] font-secondary text-[16px] leading-[26px] xl:leading-[28px] text-peraColor mt-[15px]  xl:mt-[28px] mb-[15px] xl:mb-[24px]'>Build a modern and creative website with Innovate.</p>
                            <div className='flex gap-[7px]'>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                                    <CgGoogle className='text-[#645E76]' />
                                </div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                                    <FaTwitter className='text-[#645E76]' />
                                </div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                                    <FaInstagram className='text-[#645E76]' />
                                </div>
                                <div className='w-[42px] h-[42px] rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                                    <FaLinkedin className='text-[#645E76]' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap xl:gap-[81px] xl:ml-[200px] mt-[20px] xl:mt-0'>
                            <ul className='flex flex-col gap-2 xl:gap-[12px] mr-[50px] xl:mr-0'>
                                <h2 className='font-secondary font-medium text-lg leading-8 text-titleColor mb-[5px] xl:mb-[8px]'>Product</h2>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Landingpages</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Pricing</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Benefits</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Features</a>
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-2 xl:gap-[12px]'>
                                <h2 className='font-secondary font-medium text-lg leading-8 text-titleColor mb-[5px] xl:mb-[8px]'>Company</h2>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">About</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Partners</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Contact</a>
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-2 xl:gap-[12px] mt-[20px] xl:mt-0'>
                                <h2 className='font-secondary font-medium text-lg leading-8 text-titleColor mb-[5px] xl:mb-[8px]'>Resources</h2>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Guides and resources</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Blog</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Tools</a>
                                </li>
                                <li>
                                    <a className='font-secondary font-medium text-[16px] leading-[26px] text-peraColor' href="#">Support</a>
                                </li>
                            </ul>
                            <div className='mt-[20px] xl:mt-0'>
                                <h2 className='font-secondary font-medium text-lg leading-7 xl:leading-8 text-titleColor'>Get Latest Updates</h2>
                                <p className='max-w-[285px] font-secondary font-medium text-[16px] leading-[26px] text-peraColor mb-[20px] xl:mb-[32px] mt-[10px] xl:mt-[18px]'>Subscribe to our newsletter and get many interesting things every week</p>
                                <div className='relative items-center'>
                                    <input type="Email" placeholder='Your Email Address' className='w-[269px] py-[14px] pl-[18px] rounded-[5px] bg-transparent outline-0 border-[0.85px] border-[#D2D2D2] placeholder:text-[#B4B6C4] placeholder:font-primary text-black' />
                                    <div className='w-9 h-9 rounded-[6px] bg-primary flex justify-center items-center cursor-pointer absolute top-[9px] right-[24px]'>
                                        <RiTelegram2Fill className='text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-[3px] border-[#D2D2D2] rounded-[80px]'></div>
                <div className='py-3.5 xl:py-6'>
                    <p className='font-secondary text-[14px] leading-[20px] text-peraColor'>© 2024 Innovate - All Right Reserved</p>
                </div>
            </Container>
        </section>
    )
}

export default FotterPart