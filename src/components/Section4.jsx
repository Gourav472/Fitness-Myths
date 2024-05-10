import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Fitness from '../assets/images/section-4-image1.png'
import Shadow1 from '../assets/images/svg/shadow1.svg'
const Section4 = () => {
    return (
        <>
            <section className=' section-4-bg-image '>
                <Container className=' max-w-1140'>
                    <Row className=' flex-column-reverse  flex-lg-row section4-py'>
                        <div className="col-12 mt-5  mt-lg-0 col-lg-8 d-flex justify-content-center justify-content-lg-start  align-items-lg-center">
                            <h2 className=' text-capitalize black eurostile mb-0 fw-700 fs-2xl lh-49 max-704 text-center text-lg-start '>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</h2>
                        </div>
                        <div className="col-12    d-flex justify-content-center   col-lg-4">
                            <div className=' position-relative '>
                                <img className=' w-100 max-304' src={Fitness} alt="fitness-image" />
                                <div className=' shadow1 position-absolute max-w-286 '>
                                    <img className=' w-100' src={Shadow1} alt="shadow" />
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section4