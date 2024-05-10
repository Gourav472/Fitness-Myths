import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hero from '../assets/images/header2.png'
const Header = () => {
    return (
        <>
            <header className=' header-bg-image'>

                <Container className=' max-w-1152'>
                    <div className=' d-flex justify-content-between align-items-center    py-header-btn'>
                        <h1 className=' mb-0 white eurostile fw-700 fs-xl'>Logo</h1>
                        <div className='border-btn cp position-relative '>
                            <button className=' black text-nowrap  eurostile fw-700 lh-14 fs-sm btn-get-in-touch'>GET IN TOUCH</button>
                            <div className="btn-line position-absolute ">

                            </div>
                        </div>
                    </div>
                    <Row className=' py-header flex-column-reverse flex-lg-row'>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-center">
                            <h2 className=' text-capitalize mb-0 white eurostile fw-700 lh-59 text-center text-lg-start  fs-3xl '>Get the EBook that reveals the <span className=' yellow'>7 fitness myths</span> that <span className=' text-xl-nowrap'>are holding you back</span> <span className='d-lg-block'>from experiencing</span> <span className='d-lg-block'>top-level fitness</span> </h2>
                        </div>
                        <div className="col-lg-5  d-flex justify-content-center">
                            <img className=' w-100 max-w-338' src={Hero} alt="soccer" />
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header