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
    <section className='pt-[336px] pb-[160px]'>
        <Container>
            <div className='px-[60px]'>
                <div className='flex justify-between'>
                    <h1 className='max-w-[504px] font-primary text-[46px] font-bold leading-[56px] text-titleColor'>How simple is it to use our platform?</h1>
                    <p className='max-w-[530px] font-secondary text-[18px] leading-[32px] text-peraColor'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
                <div className='flex justify-between mt-[116px]'>
                    {
                        platfromData.map((item) => (
                            <div className='w-[300px] flex flex-col items-center text-center justify-center'>
                                <img src={item.img} alt="#platfromIcon" />
                                <h3 className='font-primary font-bold text-2xl leading-9 text-titleColor pt-[26px] pb-3'>
                                    {item.title}
                                </h3>
                                <p className='font-secondary text-[18px] leading-[32px] text-peraColor'>
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