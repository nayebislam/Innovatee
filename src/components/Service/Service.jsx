import React from 'react'
import Container from '../layout/Container'
import serviceicon1 from '../../assets/serviceicon1.png'
import serviceicon2 from '../../assets/serviceicon2.png'
import serviceicon3 from '../../assets/serviceicon3.png'
import serviceicon4 from '../../assets/serviceicon4.png'

const Service = () => {
    return (
        <section className='py-[140px]'>
            <Container>
                <div className='text-center'>
                    <p className='font-secondary font-medium text-[20px] text-[#FF7364]'>Our Services</p>
                    <h3 className='font-primary font-bold text-[46px] leading-[58px] text-titleColor my-1'>How It Works</h3>
                </div>
                <div className='flex gap-[30px] my-[80px]'>
                    <div className='p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={serviceicon1} alt="#serviceicon1" />
                        <h1 className='font-primary font-bold text-[22px] leading-[34px] text-titleColor mt-[26px] mb-2'>Plan Product Roadmap</h1>
                        <p className='max-w-[258px] font-secondary text-[16px] leading-[26px] text-peraColor mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <div className='flex gap-1 items-center'>
                            <a className='font-secondary text-[16px] leading-[26px] text-primary' href="#">Read More</a>
                            <i class="fa-solid fa-arrow-right text-primary"></i>
                        </div>
                    </div>
                    <div className='p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={serviceicon2} alt="#serviceicon1" />
                        <h1 className='font-primary font-bold text-[22px] leading-[34px] text-titleColor mt-[26px] mb-2'>Assign Any Work</h1>
                        <p className='max-w-[258px] font-secondary text-[16px] leading-[26px] text-peraColor mb-[26px]'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                        <div className='flex gap-1 items-center'>
                            <a className='font-secondary text-[16px] leading-[26px] text-primary' href="#">Read More</a>
                            <i class="fa-solid fa-arrow-right text-primary"></i>
                        </div>
                    </div>
                    <div className='p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={serviceicon3} alt="#serviceicon1" />
                        <h1 className='font-primary font-bold text-[22px] leading-[34px] text-titleColor mt-[26px] mb-2'>Monitor Work Progress</h1>
                        <p className='max-w-[258px] font-secondary text-[16px] leading-[26px] text-peraColor mb-[26px]'>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
                        <div className='flex gap-1 items-center'>
                            <a className='font-secondary text-[16px] leading-[26px] text-primary' href="#">Read More</a>
                            <i class="fa-solid fa-arrow-right text-primary"></i>
                        </div>
                    </div>
                    <div className='p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={serviceicon4} alt="#serviceicon1" />
                        <h1 className='font-primary font-bold text-[22px] leading-[34px] text-titleColor mt-[26px] mb-2'>Pertect Intergration</h1>
                        <p className='max-w-[258px] font-secondary text-[15px] leading-[26px] text-peraColor mb-[26px] tracking-[-0.25%]'>App integration, in a general sense, is the process of resources or capabilities from one application </p>
                        <div className='flex gap-1 items-center'>
                            <a className='font-secondary text-[16px] leading-[26px] text-primary' href="#">Read More</a>
                            <i class="fa-solid fa-arrow-right text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='font-secondary text-lg leading-[20px] text-primary py-[20px] px-12 rounded-[6px] border-[1px] border-primary cursor-pointer'>View More</button>
                </div>
            </Container>
        </section>
    )
}

export default Service