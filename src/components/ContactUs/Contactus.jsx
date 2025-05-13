import React from 'react'
import Container from '../layout/Container'
import ContactUsbg from '../../assets/ContactUsbg.png'

const Contactus = () => {
  return (
    <section>
      <Container>
            <div className='flex justify-between py-[100px] px-[102px] items-center'
              style={
                {
                  backgroundImage: `url(${ContactUsbg})`
                }
              }
            >
              <h1 className='max-w-[577px] font-primary font-bold text-[46px] leading-[58px] text-white'>Don’t find the answer? contact us for any query.</h1>
              <button className='font-secondary text-lg leading-[20px] text-[#2C2643] py-[20px] px-12 rounded-[6px] bg-secondery cursor-pointer'>Contact Us</button>
            </div>
      </Container>
    </section>
  )
}

export default Contactus