import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/story.scss';
import cover from '../media/Story/Story-Cover.jpg';
import shiv from '../media/Team/Team-Shiv.jpg';
import wei from '../media/Team/Team-Wei.jpg';
import mingtong from '../media/Team/Team-Mingtong.jpg';
import wenjie from '../media/Team/Team-Wenjie.jpg';
import hanyu from '../media/Team/Team-Hanyu.jpg';
import researchMap from '../media/Story/Story-Research-DomainMap.svg';
import research1 from '../media/Story/Story-Research-Photo 1.jpg';
import research2 from '../media/Story/Story-Research-Photo 2.jpg';
import research3 from '../media/Story/Story-Research-Photo 3.jpg';
import teacherPersonas from '../media/Story/Story-PS-TeacherPersona.png';
import teacherMap from '../media/Story/Story-PS-TeacherMap-svg.svg';
import studentPersonas from '../media/Story/Story-PS-Student Personas.png';
import studentMap from '../media/Story/Story-PS-StudentMap-svg.svg';
import ideation1 from '../media/Story/Story-Ideation-1.jpg';
import ideation2 from '../media/Story/Story-Ideation-2.jpg';

class Story extends React.Component {
    render () {
        return (
            <Grid className='story-container' fluid>
                <Row>
                    <Col lg={2}>
                        <aside className='story-side'>
                            <svg className='side-svg'>
                                <line x1='6' y1='6' x2='6' y2='200'/>
                            </svg>
                            <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Team
                                </li>
                                <li>
                                    Research
                                </li>
                                <li>
                                    Problem Space
                                </li>
                                <li>
                                    Ideation
                                </li>
                            </ul>
                        </aside>
                    </Col>

                    <Col lg={8} >
                        <main className='story-main'>
                            <section className='cover'>
                                <div className='cover-img'>
                                    <img src={cover} alt='cover' />
                                </div>
                                <div className='cover-text'>
                                    <svg className='coverText-svg' viewBox="0 0 581.63 626.68">
                                        <path x='0' y='0'
                                              d="M580.91,323.68c12.16,176.31-130.27,303-307,303-131,0-247-92-270-216-19.54-105.32,38-174,88-223,57.58-56.43,54.52-167.25,202-186C466.91-20.32,570.91,178.68,580.91,323.68Z"/>
                                    </svg>
                                    <div className='coverText-container'>
                                        <p className='coverText-title'>Our Story</p>
                                        <p className='coverText-article'>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                    </div>
                                </div>
                            </section>

                            <section className='about'>
                                <div className='main-title'>
                                    <p>About The Project</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                            </section>

                            <section className='team'>
                                <div className='main-title'>
                                    <p>Meet The Team</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                                <ul className='team-photos'>
                                    <li>
                                        <div className='photos-img'>
                                            <img src={shiv} alt='shiv' />
                                        </div>
                                        <div className='photos-text'>
                                            <p>Shivang Gupta</p>
                                            <br />
                                            <p>Team Coordinator</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='photos-img'>
                                            <img src={wei} alt='wei' />
                                        </div>
                                        <div className='photos-text'>
                                            <p>Wei Gong</p>
                                            <br />
                                            <p>Research Lead</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='photos-img'>
                                            <img src={mingtong} alt='mingtong' />
                                        </div>
                                        <div className='photos-text'>
                                            <p>Mingtong Zhang</p>
                                            <br />
                                            <p>Content Lead</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='photos-img'>
                                            <img src={wenjie} alt='wenjie' />
                                        </div>
                                        <div className='photos-text'>
                                            <p>Wenjie Li</p>
                                            <br />
                                            <p>Design Lead</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='photos-img'>
                                            <img src={hanyu} alt='hanyu' />
                                        </div>
                                        <div className='photos-text'>
                                            <p>Hanyu Tang</p>
                                            <br />
                                            <p>Development Lead</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className='button-container'>
                                    <button className='button'>
                                        More About The Team
                                    </button>
                                </div>
                            </section>

                            <section className='research'>
                                <div className='main-title'>
                                    <p>Research</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                                <div className='research-map'>
                                    <img src={researchMap} alt='reseach-map' />
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                                <div className='main-article'>
                                    <p>Driving question include: </p>
                                </div>
                                <Grid fluid className='research-photo' style={{padding: 5}}>
                                    <Row>
                                        <Col lg={6} style={{paddingLeft: 0, paddingRight: 10}}>
                                            <img src={research1} alt='research-1' />
                                        </Col>
                                        <Col lg={6} style={{textAlign: 'right', paddingRight: 0, paddingLeft: 10}}>
                                            <img src={research2} alt='research-2' />
                                        </Col>
                                    </Row>
                                    <Row className='research-photo3'>
                                        <Col lg={12} style={{padding: 0}}>
                                            <img src={research3} alt='research-3' />
                                        </Col>
                                    </Row>
                                </Grid>
                            </section>

                            <section className='problem-space'>
                                <div className='main-title'>
                                    <p>Problem Space</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                                <div className='main-article'>
                                    <p>Teacher Personas</p>
                                </div>
                                <div className='persona-img'>
                                    <img src={teacherPersonas} alt='research-map' />
                                </div>
                                <div className='main-article'>
                                    <p>Teacher Experience Map</p>
                                </div>
                                <div className='persona-img'>
                                    <img src={teacherMap} alt='research-map' />
                                </div>
                                <div className='main-article'>
                                    <p>Student Personas</p>
                                </div>
                                <div className='persona-img'>
                                    <img src={studentPersonas} alt='research-map' />
                                </div>
                                <div className='main-article'>
                                    <p>Student Experience Map</p>
                                </div>
                                <div className='persona-img'>
                                    <img src={studentMap} alt='research-map' />
                                </div>
                            </section>

                            <section className='ideation'>
                                <div className='main-title'>
                                    <p>Ideation</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                </div>
                                <Grid fluid className='ideation-photo' style={{padding: 5}}>
                                    <Row>
                                        <Col lg={6} style={{paddingLeft: 0, paddingRight: 10}}>
                                            <img src={ideation1} alt='research-1' />
                                        </Col>
                                        <Col lg={6} style={{textAlign: 'right', paddingRight: 0, paddingLeft: 10}}>
                                            <img src={ideation2} alt='research-2' />
                                        </Col>
                                    </Row>
                                </Grid>
                            </section>

                            <section className='more'>
                                <p>More coming in the summer…</p>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Story