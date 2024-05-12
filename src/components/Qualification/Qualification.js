import React, {useState} from "react";
import './qualification.css';

const Qualification = () => {
    const [toggle, setToggle] = useState(1)

    const toggleTab = (index)=>{
        setToggle(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={toggle === 1?"qualification__button qualification__active button--flex":
                    "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggle === 2?"qualification__button qualification__active button--flex":
                    "qualification__button button--flex"} onClick={()=>toggleTab(2)}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                </div>
                <div className="qualification__sections">
                    <div className={toggle === 1?"qualification__content qualification__content-active":
                    "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">PGP Full Stack Software Engineer</h3>
                                <span className="qualificaton__subtitle">NIIT - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sep 2022 - March 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">BCA</h3>
                                <span className="qualificaton__subtitle">Dr. RML University, Ayodhya, UP, India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2017
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualificaton__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualificaton__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div> */}
                    </div>


                    <div className={toggle === 2 ? "qualification__content qualification__content-active":
                    "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Jr. Software Engineer - Backend</h3>
                                <span className="qualificaton__subtitle">Techademy Learning Solutions</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> July 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualificaton__subtitle">NIIT - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> March 2023 - July 2023
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualificaton__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification