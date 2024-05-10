import React from 'react'
import { Container, Row } from 'react-bootstrap'
import image1 from '../assets/images/section-5-image1.png'
import image2 from '../assets/images/section-5-image2.png'
import image3 from '../assets/images/section-5-image3.png'
import image4 from '../assets/images/section-5-image-4.png'
import insta from '../assets/images/svg/insta.svg'
const Section5 = () => {
    return (
        <>
            <section className=' bg_black position-relative'>
                <Container className=' max-w-1203 position-relative z-1'>
                    <Row className='py-section5'>
                        <div className="col-12 justify-content-center justify-content-lg-start  col-lg-6 d-flex">
                            <div className=' position-relative'>
                                <img className=' w-100 max-w-539' src={image1} alt="man-image" />
                                <div className='circle-image position-absolute w-100 '>
                                    <img className=' w-100 max-w-circle' src={image2} alt="image-2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 justify-content-center justify-content-lg-start mt-5 mt-lg-0 col-lg-6 d-flex align-items-lg-end justify-content-lg-end  ">
                            <div className=' d-flex flex-column'>
                                <h2 className=' mb-0 white eurostile fw-700 lh-37 fs-2xl text-center text-lg-start '>About The <span className='yellow'>Author</span></h2>
                                <p className=' mb-0 white manrope fw-400 fs-lg lh-28 max-w-520 pt-14 text-center text-lg-start'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                                <p className=' mb-0 white manrope fw-400 fs-lg lh-28 max-w-520 pt-10 text-center text-lg-start'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                                <p className=' mb-0 white manrope fw-400 fs-lg lh-28 max-w-520 pt-10 text-center text-lg-start'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                                <div className=' d-flex align-items-center gap-17 pt-31 justify-content-center justify-content-lg-start '>
                                    <a href="https://www.instagram.com/" target='_blank'><img src={insta} alt="instagram" /></a>
                                    <h2 className=' mb-0 white eurostile fw-700 fs-xl lh-33'>Hypervive</h2>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className='section-5-elipse1 d-none d-md-block  position-absolute '>
                    <img src={image3} alt="elipse" />
                </div>
                <div className='section-5-elipse2 d-none d-md-block  position-absolute '>
                    <img src={image4} alt="elipse" />
                </div>
            </section>
        </>
    )
}

export default Section5