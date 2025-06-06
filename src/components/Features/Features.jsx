import React from 'react'
import Container from '../layout/Container'
import Feature from '../../assets/Features.png'
import ficon1 from '../../assets/Featuresicon1.png'
import ficon2 from '../../assets/Featuresicon2.png'
import ficon3 from '../../assets/Featuresicon3.png'

const Features = () => {
    const featuresData = [
        {
            img: ficon1,
            title: "Fast and Easy to use",
            description: "Easily to convert API with just a few clicks"
        },
        {
            img: ficon1,
            title: "Safely Security",
            description: "All customer data is encrypted"
        },
        {
            img: ficon3,
            title: "Get Organized",
            description: "From lists to boards, organize work your way. "
        },
    ]
    return (
        <section className='pb-[55px]'>
            <Container>
                <div className='xl:flex justify-between'>
                    <div>
                        <img src={Feature} alt="#featureimg" />
                    </div>
                    <div className='mt-3.5 xl:mt-0'>
                        <div className='text-center xl:text-left'>
                            <h3 className='font-primary max-w-[553px] font-bold xl:text-[46px] text-[26px] xl:leading-[58px] leading-[36px] text-titleColor mb-[64px]'>
                                We provide features for your Business
                            </h3>
                        </div>
                        <div className='flex justify-between gap-[20px] xl:columns-0 mt-[64px]'>
                            <div>
                                <img src={ficon1} alt="#featuresIcon1" />
                                <h1 className='font-primary font-bold text-[16px] leading-[22px] xl:text-[22px] xl:leading-[34px] text-titleColor mt-[14px] mb-[6px]'>
                                    Fast and Easy to use
                                </h1>
                                <p className='max-w-[220px] font-secondary text-[14px] leading-[20px] xl:text-[18px] xl:leading-[32px] text-peraColor'>
                                    Easily to convert API with just a few clicks
                                </p>
                            </div>
                            <div>
                                <img className='w-[50px]' src={ficon2} alt="#featuresIcon2" />
                                <h1 className='font-primary font-bold text-[16px] leading-[22px] xl:text-[22px] xl:leading-[34px] text-titleColor mt-[14px] mb-[6px]'>
                                    Safely Security
                                </h1>
                                <p className='max-w-[220px] font-secondary text-[14px] leading-[20px] xl:text-[18px] xl:leading-[32px] text-peraColor'>
                                    All customer data is encrypted
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between gap-[12px] xl:gap-0 mt-[40px] items-end'>
                            <div>
                                <img src={ficon3} alt="#featuresIcon3" />
                                <h1 className='font-primary font-bold text-[16px] leading-[22px] xl:text-[22px] xl:leading-[34px] text-titleColor mt-[14px] mb-[6px]'>
                                    Get Organized
                                </h1>
                                <p className='max-w-[220px] font-secondary text-[14px] leading-[20px] xl:text-[18px] xl:leading-[32px] text-peraColor'>
                                    From lists to boards, organize work your way.
                                </p>
                            </div>
                            <div>
                                <button className='font-secondary text-[14px] leading-[18px] xl:text-lg xl:leading-[20px] text-white py-[20px] px-12 rounded-[6px] bg-primary cursor-pointer'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Features