import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Laptop from '../assets/images/section-3.png'
import elipsesecond from '../assets/images/svg/shadow2.svg'
import elipse11 from '../assets/images/svg/elipse11.svg'
const Section3 = () => {
    return (
        <>
            <section className='bg_black section3-py position-relative '>
                <Container className=' position-relative z-1 max-w-1147 position-relative  z-1 '>
                    <Row>
                        <div className="col-12 justify-content-center d-flex col-lg-6">
                            <div className=' position-relative'>
                                <img className=' w-100 max-530' src={Laptop} alt="laptop-image" />
                                <div className='shadow-2   position-absolute '>
                                    <img className=' w-100' src={elipsesecond} alt="elipse2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5  justify-content-center col-lg-6 d-flex align-items-center justify-content-lg-end">
                            <div className=' d-flex flex-column'>
                                <h2 className=' text-capitalize mb-0 white eurostile fw-700 fs-2xl lh-37 max-w-522 text-center text-lg-start '>Let me know where <span className=' yellow'>you want me to send it</span></h2>
                                <div className=' d-flex flex-column align-items-center align-items-lg-start  gap-13 py-input'>
                                    <div className=' input-box w-100 opacity_56'>
                                        <input className=' manrope fw-400 fs-md lh-21 white  input_outline border-0 bg-transparent w-100 ' type="text" name="name" placeholder='Name' />
                                    </div>
                                    <div className=' input-box w-100 opacity_56'>
                                        <input className=' manrope fw-400 fs-md lh-21 white  input_outline border-0 bg-transparent w-100' type="email" name="enteremail" placeholder='Email' />
                                    </div>
                                </div>
                                <div className=' d-flex justify-content-center justify-content-lg-start'>
                                    <div className='border-btn cp position-relative '>
                                        <button className=' black text-nowrap  eurostile fw-700 lh-14 fs-sm btn-get-in-touch'>Send It Here!</button>
                                        <div className="btn-line position-absolute ">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className='elipse-11 d-none d-md-block  position-absolute  '>
                    <img src={elipse11} alt="elipse-11" />
                </div>
            </section>
        </>
    )
}

export default Section3