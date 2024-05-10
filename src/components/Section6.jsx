import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ipad from '../assets/images/ipad.png'
const Section6 = () => {
    return (
        <>
            <section className='bg_black'>
                <Container className=' max-w-1170'>
                    <div className=' pt-yellow-box box_translate d-flex justify-content-center '>

                        <Row className=' position-relative flex-column-reverse flex-lg-row yellow-box w-100  '>
                            <div className="col-12 mt-3 mt-md-5 mt-lg-0 justify-content-center justify-content-lg-start   col-lg-6 d-flex " data-aos="fade-up">
                                <div className=' d-flex flex-column '>
                                    <h2 className=' mb-0 black eurostile fw-700 fs-3xl lh-59 text-center text-lg-start '>7 Fitness Myths To Avoid</h2>
                                    <p className=' mb-0 black manrope fw-400 lh-28 fs-lg pt-10 text-center text-lg-start '>Grab your free copy now!</p>
                                    <div className=' pt-32 d-flex  justify-content-center  justify-content-lg-start '>
                                        <div className='border-btn-2 cp position-relative '>
                                            <button className=' white text-nowrap  eurostile fw-700 lh-16 fs-md btn-free'>Download For Free</button>
                                            <div className="btn-line-2 position-absolute ">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12  justify-content-center col-lg-6 d-flex justify-content-lg-end" data-aos="fade-up" >
                                <img className=' d-lg-none w-100 max-658' src={ipad} alt="ipad-image" />
                                <div className='d-none d-lg-block  ipad-position position-absolute '>
                                    <img className=' w-100 max-658' src={ipad} alt="ipad-image" />
                                </div>
                            </div>
                        </Row>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default Section6