import React from 'react'
import { Container } from 'react-bootstrap'
import Tiktok from '../assets/images/svg/tiktok.svg'
import Instagram from '../assets/images/svg/instagram.svg'
const Footer = () => {
    return (
        <>
            <footer className=' footer_bg footer-pt'>
                <Container className=' max-w-1140'>
                    <div className=' d-flex flex-column  align-items-center '>
                        <h2 className=' mb-0 white eurostile fw-700 lh-33 fs-xl' data-aos="fade-up">Hypervive</h2>
                        <p className=' mb-0 white manrope fw-400 lh-23 fs-sm pt-19' data-aos="fade-up">Connect with us on social media</p>
                        <div className=' d-flex align-items-center py-logo gap-10' data-aos="fade-up">
                            <div className=' yellow-circle cp d-flex justify-content-center  align-items-center '>
                                <a className=' pb-1 ' href="https://www.tiktok.com/" target='_blank'><img src={Tiktok} alt="logo" /></a>
                            </div>
                            <div className=' yellow-circle cp d-flex justify-content-center  align-items-center '>
                                <a className=' pb-1 ' href="https://www.instagram.com/" target='_blank'><img src={Instagram} alt="logo-2" /></a>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className='footer-line w-100'>
                </div>
                <div className=' d-flex justify-content-center py-last-text '>
                    <h2 className=' mb-0 white op_70 manrope fw-400 lh-23 fs-sm cp'>Copyright © 2024 HyperVive | All Rights Reserved.</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer