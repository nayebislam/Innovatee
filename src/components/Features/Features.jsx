import React from 'react'
import Container from '../layout/Container'
import Feature from '../../assets/Features.png'
import ficon1 from '../../assets/Featuresicon1.png'
// import ficon2 from '../../assets/Featuresicon2.png'
import ficon3 from '../../assets/Featuresicon3.png'

const Features = () => {
    const featuresData =[
        {
            img:ficon1,
            title:"Fast and Easy to use",
            description:"Easily to convert API with just a few clicks"
        },
        {
            img:ficon1,
            title:"Safely Security",
            description:"All customer data is encrypted"
        },
        {
            img:ficon3,
            title:"Get Organized",
            description:"From lists to boards, organize work your way. "
        },
    ]
    return (
        <section className='pb-[55px]'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <img src={Feature} alt="#featureimg" />
                    </div>
                    <div>
                        <h3 className='font-primary max-w-[553px] font-bold text-[46px] leading-[58px] text-titleColor mb-[64px]'>
                            We provide features for your Business
                        </h3>
                        <div className='flex'>
                            {
                                featuresData.map((item) => (
                                    <div className='w-[220px] flex flex-col items-baseline justify-center'>
                                        <img src={item.img} alt="" />
                                        <h1 className='font-primary font-bold text-[22px] leading-[34px] text-titleColor mt-[14px] mb-[6px]'>
                                            {item.title}
                                        </h1>
                                        <p className='font-secondary text-[18px] leading-[32px] text-peraColor'>
                                            {item.description}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Features