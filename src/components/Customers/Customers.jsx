import React from 'react'
import Container from '../layout/Container'
import customersbg from '../../assets/customersbg.png'

const Customers = () => {
    return (
        <section className='mb-[140px]'>
            <Container>
                {/* <img src={customersbg} alt="" /> */}
                <div className='py-[85px] rounded-[40px] bg-no-repeat bg-center bg-cover'
                    style={{
                        backgroundImage: `URL(${customersbg})`,
                    }}
                >
                    <div className='flex justify-end mr-[124px]'>
                        <h1 className='max-w-[554px] font-primary font-bold text-white text-[44px]'>Trusted by 35,000+ happy customers.</h1>
                    </div>
                    <div className='flex gap-[40px] justify-end mt-[64px] mr-[70px]'>
                        <div>
                            <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>720+</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[17px] leading-[32px]'>Over 500 business powered with us</p>
                        </div>
                        <div>
                            <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>4.9</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[17px] leading-[32px]'>Rating on google play and app store</p>
                        </div>
                        <div>
                            <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>200+</h1>
                            <p className='max-w-[176px] font-secondary font-medium text-white text-[17px] leading-[32px]'>Easily integrate with your favorite apps</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Customers