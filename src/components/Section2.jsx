import React from 'react'
import { Container } from 'react-bootstrap'
import elipse12 from '../assets/images/svg/elipse12.svg'
import elipse13 from '../assets/images/svg/elipse13.svg'
const Section2 = () => {
    return (
        <>
            <section className=' bg_black section2-py position-relative '>
                <Container className=' position-relative z-1 max-w-1140'>
                    <div className=' section-2-box position-relative z-2    d-flex flex-column w-100'>
                        <div className='d-flex gap-15 z-1  flex-column'>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>If you’re reading this, most likely you’re in search of the keys that unlock world class performance…..performance that can get you to the next level of your playing career …. And let you create a lifestyle that you’ve always dreamed of… right?</p>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>Well there’s a big obstacle in your way…… one that you most likely don’t even notice….. like a hacker whose stolen your starting spot…..and you have no control over it.</p>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>That annoying little hacker is simply a lack of knowledge. Sounds ridiculous, right? Stick with me here…. If I knew back then (in my playing days) what I know now, I would probably still be playing instead of writing this eBook.</p>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>Early on in my career I realized that in order to get to the next level I needed to get stronger, pack on some lean muscle, improve my endurance, increase my sprint speed & develop robust change of direction qualities.</p>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>Problem was... I had no idea how to improve these qualities. I needed help. I spent majority of my time researching on social media platforms & doing workouts that got me minimal results.</p>
                            <p className=' manrope fw-400 mb-0 fs-lg lh-28 white text-center max-w-995'>Once I figured out the secret sauce to improving all the qualities mentioned above, getting fit became effortless. No more stress, disappointment, anger or frustration. I want you to feel that too. This short eBook can provide you with the tools you need to start getting better results out of your current programs, while doing less not more.</p>
                        </div>
                        <div className='  z-1  pt-32 d-flex justify-content-center '>
                            <div className='border-btn-3 cp position-relative '>
                                <button className=' black text-nowrap  eurostile fw-700 lh-14 fs-sm btn-now'>Download Now</button>
                                <div className="btn-line-3 position-absolute ">

                                </div>
                            </div>
                        </div>
                        <div className='elipse12 position-absolute '>
                            <img className=' w-100' src={elipse12} alt="elipse-12" />
                        </div>
                    </div>
                </Container>
                <div className=' position-absolute  elipse13'>
                    <img src={elipse13} alt="elipse-13" />
                </div>
            </section>
        </>
    )
}

export default Section2