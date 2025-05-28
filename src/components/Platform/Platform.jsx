import React from 'react'
import Container from '../layout/Container'
import platfromicon1 from '../../assets/platfromicon1.png'
import platfromicon2 from '../../assets/platfromicon2.png'
import platfromicon3 from '../../assets/platfromicon3.png'

const Platform = () => {
    const platfromData = [
        {
            img:platfromicon1,
            title:"Login or sign up to be able use our platform",
            description:"This quickstart shows you how to use Identity Platform to sign in a user with an email and password. "
        },

        {
            img:platfromicon2,
            title:"Connect your website with just a few click",
            description:"Once your website is online, you can configure it, I will show you how to put your website online "
        },

        {
            img:platfromicon3,
            title:"Take some sales data that you want",
            description:"Sell your data directly: The most straightforward method is to sell your data directly to another "
        }
    ]
  return (
    <section className='pt-[100px] pb-[100px] lg:pt-[336px] lg:pb-[160px]'>
        <Container>
            <div className='lg:px-[60px]'>
                <div className='lg:flex justify-between text-center lg:text-left'>
                    <h1 className='max-w-[504px] font-primary text-[26px] leading-[36px] lg:text-[46px] font-bold lg:leading-[56px] text-titleColor'>How simple is it to use our platform?</h1>
                    <p className='max-w-[530px] mt-2 lg:mt-0 font-secondary text-[18px] leading-[28px] lg:leading-[32px] text-peraColor'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
                <div className='flex flex-wrap justify-between mt-[80px] lg:mt-[116px]'>
                    {
                        platfromData.map((item) => (
                            <div className='lg:w-[300px] flex flex-col items-center text-center justify-center mb-[30px]'>
                                <img src={item.img} alt="#platfromIcon" />
                                <h3 className='font-primary font-bold text-[22px] lg:text-2xl leading-[30px] lg:leading-9 text-titleColor pt-[16px] pb-2 lg:pt-[26px] lg:pb-3'>
                                    {item.title}
                                </h3>
                                <p className='font-secondary text-[18px] leading-[28px] lg:leading-[32px] text-peraColor'>
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Platform