import React from 'react'
import Container from '../layout/Container'
import '../Integrate/Integrate.css'
import Integrate1 from '../CustomImg/Integrate1'
import Integrate2 from '../CustomImg/Integrate2'
import Integrate3 from '../CustomImg/Integrate3'
import Integrate4 from '../CustomImg/Integrate4'
import Integrate5 from '../CustomImg/Integrate5'
import Integrate6 from '../CustomImg/Integrate6'
import Integrate7 from '../CustomImg/Integrate7'
// // import brandlogo from '../../assets/brandlogo.png'
// import app1 from '../../assets/app1.svg'
// import app2 from '../../assets/app2.svg'
// import app3 from '../../assets/app3.svg'
// import app4 from '../../assets/app4.svg'
// import app5 from '../../assets/app5.svg'
// import app6 from '../../assets/app6.svg'
// import app7 from '../../assets/app7.svg'

const Integrate = () => {
    return (
        <section className='bg-[#F4FAFA] py-[80px] xl:py-[122px]'>
            <Container>
                <div className='flex flex-wrap xl:flex-nowrap xl:justify-between justify-center'>
                    <div className='flex flex-col justify-center'>
                        <p className='font-secondary text-[20px] font-medium text-[#FF7364]'>Integrations</p>
                        <h4 className='max-w-[587px] font-primary font-bold text-titleColor text-[26px] leading-[36px] xl:text-[46px] xl:leading-[58px] mt-1'>Easily integrate with your favorite apps</h4>
                        <p className='max-w-[533px] font-secondary text-[15px] leading-[25px] xl:text-[18px] xl:leading-[32px] text-peraColor mt-2.5 xl:mt-[20px] mb-[30px] xl:mb-[40px] tracking-[-0.25%]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                        <div>
                            <button className='font-secondary text-lg leading-[20px] text-white py-[20px] px-12 rounded-[6px] bg-primary cursor-pointer'>Get Started</button>
                        </div>
                    </div>
                    <div className='xl:ml-[126px] xl:mt-0 mt-[60px]'>
                        {/* <img src={brandlogo} alt="" /> */}
                        <div className='flex gap-[20px] md:gap-[30px]'>
                            <Integrate1 />
                            <Integrate2 />
                        </div>
                        <div className='flex gap-[15px] md:gap-[30px] mt-[20px] md:mt-[35px]'>
                            <Integrate3 />
                            <Integrate4 />
                            <Integrate5 />
                        </div>
                        <div className='flex gap-[15px] md:gap-[30px] mt-[20px] md:mt-[35px]'>
                            <Integrate6 />
                            <Integrate5 />
                            <Integrate7 />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Integrate