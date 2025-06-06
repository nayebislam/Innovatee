import React from 'react'
import Container from '../layout/Container'
import customersbg from '../../assets/customersbg.png'

const Customers = () => {
    return (
        <section className='mb-[80px] xl:mb-[140px]'>
            <Container>
                {/* <img src={customersbg} alt="" /> */}
                <div className='py-[40px] text-center xl:py-[85px] rounded-[40px] bg-no-repeat bg-center bg-cover'
                    style={{
                        backgroundImage: `URL(${customersbg})`,
                    }}
                >
                    <div className='flex justify-end xl:mr-[124px]'>
                        <h1 className='max-w-[554px] font-primary font-bold text-white text-[30px] xl:text-[44px]'>Trusted by 35,000+ happy customers.</h1>
                    </div>
                    <div className='xl:flex items-center gap-[40px] justify-end mt-[30px] xl:mt-[64px] xl:mr-[70px]'>
                        <div className='flex flex-col items-center xl:block'>
                            <h1 className='font-primary font-black text-white text-[35px] leading-[45px] xl:text-[44px] xl:leading-[54px]'>720+</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[15px] leading-[25px] xl:text-[17px] xl:leading-[32px] mt-1 xl:mt-0'>Over 500 business powered with us</p>
                        </div>
                        <div className='flex flex-col items-center my-2 xl:my-0 xl:block'>
                            <h1 className='font-primary font-black text-white text-[35px] leading-[45px] xl:text-[44px] xl:leading-[54px]'>4.9</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[15px] leading-[25px] xl:text-[17px] xl:leading-[32px] mt-1 xl:mt-0'>Rating on google play and app store</p>
                        </div>
                        <div className='flex flex-col items-center xl:block'>
                            <h1 className='font-primary font-black text-white text-[35px] leading-[45px] xl:text-[44px] xl:leading-[54px]'>200+</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[15px] leading-[25px] xl:text-[17px] xl:leading-[32px] mt-1 xl:mt-0'>Easily integrate with your favorite apps</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Customers