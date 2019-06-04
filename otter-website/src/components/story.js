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
import interactivo1 from '../media/Story/interactivo1.png';
import interactivo2 from '../media/Story/interactivo2.png';
import interactivo3 from '../media/Story/interactivo3.png';
import interactivo4 from '../media/Story/interactivo4.png';

import anime from 'animejs';

import LazyLoad from 'react-lazyload';
import store from "../redux/store";
import {goTeam} from "../redux/actions";

function getSiblings(elem) {
    let siblings = [];
    [...elem.parentNode.childNodes].forEach(sibling =>
        sibling === elem ? null : siblings.push(sibling)
    );
    return siblings
}


class Story extends React.Component {

    componentDidMount = () => {
        this.backgroundAnimation('.cover-img-cover', '.cover-text');
        window.scrollTo(0, 0);
        window.addEventListener('wheel', this.showPosition);
        window.addEventListener('scroll', this.sectionAnimation)
    };

    backgroundAnimation = (elem1, elem2) => {
        anime.timeline({
            targets: elem1,
            width: '0%',
            easing: 'easeInOutQuad',
            direction: 'normal',
            loop: false
        }).add({
            targets: elem2,
            marginTop: '-13rem',
            opacity: '1',
            direction: 'normal',
            loop: false
        })
    };

    anchorClick = (ev) => {
        window.scrollTo(0, document.querySelector(ev.currentTarget.getAttribute('data-name')).offsetTop-50, 'smooth');
        document.querySelector('.side-svg line').setAttribute('y1',  ev.currentTarget.offsetTop + 5.8);
        document.querySelector('.side-svg line').setAttribute('y2',  ev.currentTarget.offsetTop+ 6.8);
        ev.currentTarget.style.color='black';
        getSiblings(ev.currentTarget).forEach(elem => elem.style.color = '#979797');
    };

    hoverAnimation = (ev) => {
        anime({
            targets: document.querySelector('.side-svg line'),
            y2: {value: ev.currentTarget.offsetTop + 5, duration: 1000, delay: 0},
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    };

    leaveAnimation = () => {
        anime({
            targets: document.querySelector('.side-svg line'),
            y2: {value: parseInt(document.querySelector('.side-svg line').getAttribute('y1')) + 1, duration: 1000, delay: 0},
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    };

    showPosition = () => {
        document.querySelectorAll('.story-main>section').forEach((elem) => {
            if (elem.offsetTop-window.scrollY-window.innerHeight < 0 ) {
                document.querySelector('.' + elem.getAttribute('class') + '-anchor').style.color = 'black';
                getSiblings(document.querySelector('.' + elem.getAttribute('class') + '-anchor' ))
                    .forEach((elem) => elem.style.color = '#979797');

                if (document.querySelector('.' + elem.getAttribute('class') + '-anchor').style.color === 'black') {
                    let target = document.querySelector('.' + elem.getAttribute('class') + '-anchor');
                    document.querySelector('.side-svg line').setAttribute('y1', target.offsetTop + 5.8);
                    document.querySelector('.side-svg line').setAttribute('y2', target.offsetTop + 6.8);
                }
            }

        });

    };

    sectionAnimation = () => {
        document.querySelectorAll('.story-main>section>.main-title').forEach((elem) => {
            if (elem.offsetTop-window.scrollY-window.innerHeight/1.5 <= 0) {
                elem.classList.add('active')
            }
        });

        document.querySelectorAll('.story-main .goUp').forEach((goUp) => {
            goUp.style.marginTop = '10rem';
            if (goUp.offsetTop-window.scrollY-window.innerHeight <= 0) {
                goUp.style.marginTop = '1rem';
                goUp.style.transition = '1s ease';
            }

            let teacherBack = document.querySelector('.teacher-persona-back');
            if (teacherBack.offsetTop-window.scrollY-window.innerHeight <= 0) {
                teacherBack.style.width = '100%';
                teacherBack.style.transition = '2s ease';
            }

            let studentBack = document.querySelector('.student-persona-back');
            if (studentBack.offsetTop-window.scrollY-window.innerHeight <= 0) {
                studentBack.style.width = '100%';
                studentBack.style.transition = '2s ease';
            }


        })
    };

    scaleImg = (ev) => {
        let container = document.querySelector('.container-fluid');
        container.style.filter='blur(30px)';

        let html = document.querySelector('html');
        html.height = '100%';
        html.style.overflowY = 'hidden';

        let img = document.createElement('img');
        img.src=ev.currentTarget.src;
        img.style.position = 'absolute';
        img.style.top=(window.scrollY + img.height/4).toString() + 'px';
        img.style.zIndex = '100';
        img.style.transform = 'scale(0.8)';
        img.style.cursor = 'zoom-out';
        img.onclick = function(){
            this.parentElement.removeChild(this);

            html.height = 'auto';
            html.style.overflowY = 'scroll';

            container.style.filter='none';
            container.style.textAlign='left';
        };

        document.querySelector('#root').prepend(img);
    };


    render () {
        return (
            <Grid className='story-container' fluid>
                <Row>
                    <Col lg={2}>
                        <aside className='story-side'>
                            <svg className='side-svg'>
                                <line x1='6' y1='30' x2='6' y2='31'/>
                            </svg>
                            <ul>
                                <li className='about-anchor'
                                    data-name=".about"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                    style={{color: 'black'}}
                                >
                                    About
                                </li>
                                <li className='team-anchor'
                                    data-name=".team"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}>
                                    Team
                                </li>
                                <li className='research-anchor'
                                    data-name=".research"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}>
                                    Research
                                </li>
                                <li className='problem-space-anchor'
                                    data-name=".problem-space"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}>
                                    Problem Space
                                </li>
                                <li className='ideation-anchor'
                                    data-name=".ideation"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}>
                                    Ideation
                                </li>
                            </ul>
                        </aside>
                    </Col>

                    <Col lg={8} >
                        <main className='story-main'>
                            <div className='cover'>
                                <div className='cover-img'>
                                    <img src={cover} alt='cover' />
                                    <div className='cover-img-cover'/>
                                </div>
                                <div className='cover-text'>
                                    <svg className='coverText-svg' viewBox="0 0 581.63 626.68">
                                        <path x='0' y='0'
                                              d="M580.91,323.68c12.16,176.31-130.27,303-307,303-131,0-247-92-270-216-19.54-105.32,38-174,88-223,57.58-56.43,54.52-167.25,202-186C466.91-20.32,570.91,178.68,580.91,323.68Z"/>
                                    </svg>
                                    <div className='coverText-container'>
                                        <p className='coverText-title'>Our Story</p>
                                        {/*<p className='coverText-article'>Walk with us through this amazing project for second language acquisition.</p>*/}
                                    </div>
                                </div>
                            </div>

                            <section className='about'>
                                <div className='main-title'>
                                    <p>About The Project</p>
                                </div>
                                <div className='main-article'>
                                    <p>Language learning is different from other subjects due to the addition of speaking
                                        and listening components to the usual reading and writing components. In this project,
                                        we partnered with a large publishing house to develop a set of technology-led ideas to
                                        improve fluency in second language acquisition.</p>
                                </div>
                            </section>

                            <section className='team'>
                                <div className='main-title'>
                                    <p>Meet The Team</p>
                                </div>
                                <div className='main-article'>
                                    <p>We are Team Otter, a group of five Master’s students from Carnegie Mellon University.
                                        We study Educational Technology and Applied Learning Science at the Human-Computer
                                        Interaction Institute in the School of Computer Science.</p>
                                </div>
                                <ul className='team-photos goUp'>
                                    <li className='shiv'>
                                        <div className='photos-img'>
                                            <LazyLoad>
                                                <img src={shiv} alt='shiv' />
                                            </LazyLoad>
                                        </div>
                                        <div className='photos-text'>
                                            <p>Shivang Gupta</p>
                                            <br />
                                            <p>Team Coordinator</p>
                                        </div>
                                    </li>
                                    <li className='wei'>
                                        <div className='photos-img'>
                                            <LazyLoad>
                                                <img src={wei} alt='wei' />
                                            </LazyLoad>
                                        </div>
                                        <div className='photos-text'>
                                            <p>Wei Gong</p>
                                            <br />
                                            <p>Research Lead</p>
                                        </div>
                                    </li>
                                    <li className='mingtong'>
                                        <div className='photos-img'>
                                            <LazyLoad>
                                                <img src={mingtong} alt='mingtong' />
                                            </LazyLoad>
                                        </div>
                                        <div className='photos-text'>
                                            <p>Mingtong Zhang</p>
                                            <br />
                                            <p>Content Lead</p>
                                        </div>
                                    </li>
                                    <li className='wenjie'>
                                        <div className='photos-img'>
                                            <LazyLoad>
                                                <img src={wenjie} alt='wenjie' />
                                            </LazyLoad>
                                        </div>
                                        <div className='photos-text'>
                                            <p>Wenjie Li</p>
                                            <br />
                                            <p>Design Lead</p>
                                        </div>
                                    </li>
                                    <li className='hanyu'>
                                        <div className='photos-img'>
                                            <LazyLoad>
                                                <img src={hanyu} alt='hanyu' />
                                            </LazyLoad>
                                        </div>
                                        <div className='photos-text'>
                                            <p>Hanyu Tang</p>
                                            <br />
                                            <p>Development Lead</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className='button-container'>
                                    <button className='button' onClick={()=>store.dispatch(goTeam())}>
                                        More About The Team
                                    </button>
                                </div>
                            </section>

                            <section className='research'>
                                <div className='main-title'>
                                    <p>Research</p>
                                </div>
                                <div className='main-article'>
                                    <p>The first step of our process is to employ a variety of research methods,
                                        both primary and secondary, to collect, process and understand data from
                                        our potential users: students and teachers.</p>
                                </div>
                                <div className='research-map goUp'>
                                    <LazyLoad throttle={1000}>
                                        <img src={researchMap} alt='reseach-map'/>
                                    </LazyLoad>
                                </div>
                                <div className='main-article'>
                                    <p>Our chosen research space lies in the intersection of 3 key domains: pedagogy,
                                        technology and policy & research. Further, our focus within these domains lay
                                        on speaking and listening, and proficiency building through the use of authentic content.</p>
                                    <br />
                                    <p>Our primary research focused on instructors and consisted of the use of research
                                        methods such as interviews and cognitive task analyses. We also conducted surveys
                                        and observations to understand student motivation and behavior.</p>
                                    <br />
                                    <p>Our secondary research was driven by existing literature in the space of learning science.
                                        Apart from the basics of competitive analysis and literature review, we also analysed raw
                                        data from existing teacher surveys to gauge the field. Beyond the primary users, we also
                                        paid attention to other stakeholders like content providers, school administrators and district offices.</p>
                                </div>
                                <Grid fluid className='research-photo goUp' style={{padding: 5}}>
                                    <Row>
                                        <Col lg={6} style={{paddingLeft: 0, paddingRight: 10}}>
                                            <LazyLoad>
                                                <img src={research1} alt='research-1'/>
                                            </LazyLoad>
                                        </Col>
                                        <Col lg={6} style={{textAlign: 'right', paddingRight: 0, paddingLeft: 10}}>
                                            <LazyLoad>
                                                <img src={research2} alt='research-2'/>
                                            </LazyLoad>
                                        </Col>
                                    </Row>
                                    <Row className='research-photo3'>
                                        <Col lg={12} style={{padding: 0}}>
                                            <LazyLoad>
                                                <img src={research3} alt='research-3'/>
                                            </LazyLoad>
                                        </Col>
                                    </Row>
                                </Grid>
                                <div className='main-article'>
                                    <p>Throughout the research process, we gathered lots of data. To consolidate this
                                        raw data and extract insights, we made several affinity diagrams to summarize
                                        and categorize our findings.</p>
                                </div>
                            </section>

                            <section className='problem-space'>
                                <div className='main-title'>
                                    <p>Problem Space</p>
                                </div>
                                <div className='main-article'>
                                    <p>Based on the insights we gathered from our research phase, we synthesized a
                                        problem space that consisted of personas to represent the targeted users and
                                        experience maps to highlight the tasks and the pain points of the users and to
                                        identify the design opportunities. The problem space is categorized into two
                                        groups: teachers and students. Finally, we synthesize the final problem space
                                        in a series of How Might We (HMW) statements for both groups. </p>
                                </div>
                                <div className='main-subtitle'>
                                    <p>Teacher Personas</p>
                                </div>
                                <div className='persona-img goUp'>
                                    <img src={teacherPersonas} alt='research-map' />
                                    <div className='teacher-persona-back' />
                                </div>
                                <div className='main-article'>
                                    <p>There are two typical types of teachers among our users. First is the Veteran,
                                        who represents those who have plenty of experience, usually work in traditional
                                        schools and may not have enough confidence in new technology. The other is the Rookie,
                                        who represents those who are inexperienced and share a more open attitude towards the
                                        use of technology in the classroom.</p>
                                </div>
                                <br />
                                <div className='main-subtitle'>
                                    <p>Teacher Experience Map</p>
                                </div>
                                <div className='persona-img goUp'>
                                    <img className='map-img'
                                         src={teacherMap}
                                         alt='research-map'
                                         onClick={(ev) => this.scaleImg(ev)}/>
                                </div>
                                <div className='main-subtitle'>
                                    <p>Student Personas</p>
                                </div>
                                <div className='persona-img goUp'>
                                    <img src={studentPersonas} alt='research-map' />
                                    <div className='student-persona-back' />
                                </div>
                                <div className='main-article'>
                                    <p>We developed four personas for students: the Box Checker, an average student with
                                        limited motivation; the Wallflower, a shy student with unbalanced development of
                                        oral and presentational ability; the Passionista, the self-motivated student who
                                        is passionate about culture; and the Good Soldier, the advanced, heritage learner
                                        with the best academic performance.</p>
                                </div>
                                <div className='main-subtitle'>
                                    <p>Student Experience Map</p>
                                </div>
                                <div className='persona-img'>
                                    <img className='map-img goUp'
                                         src={studentMap}
                                         alt='research-map'
                                         onClick={(ev) => this.scaleImg(ev)}/>
                                </div>
                            </section>

                            <section className='ideation'>
                                <div className='main-title'>
                                    <p>Ideation</p>
                                </div>
                                <div className='main-article'>
                                    <p>We collectively brainstormed ideas to solve the problems in our problem space.
                                        We identified a few different possible avenues of research, and the one that
                                        was chosen for implementation was Video Interactivo - a Interactive Video Creation Framework.</p>
                                    <br />
                                    <p>Video Interactivo is a framework for personalized practice tool, with video
                                        and AR as media, taking input from students through the  microphone. Students
                                        interact with the video through speaking and listening and can use the tool at home or in the class.</p>
                                    <br />
                                    <p>Video Interactivo helps to build authentic context and real scenarios close to
                                        students’ real life application, taking advantage of new technology to motivate
                                        students and personalize learning. It provides teachers a more diverse set of
                                        materials and better access to students’ speaking data. </p>
                                </div>
                                <Grid fluid className='ideation-photo goUp' style={{padding: 5}}>
                                    <Row>
                                        <Col lg={6} style={{paddingLeft: 0, paddingRight: 10}}>
                                            <LazyLoad>
                                                <img src={interactivo1} alt='interactivo-1'/>
                                            </LazyLoad>
                                            <div className='main-article'>
                                                <p>1. While shy students like James don't want to talk
                                                    in class at all, others like Melissa feel like they don't
                                                    have enough chance to practice.</p>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{textAlign: 'left', paddingRight: 0, paddingLeft: 10}}>
                                            <LazyLoad>
                                                <img src={interactivo2} alt='interactivo-1'/>
                                            </LazyLoad>
                                            <div className='main-article'>
                                                <p>2. "Video Interactivo" is an interactive video where
                                                    students can "talk" with the speaker with voice or
                                                    visual input.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} style={{paddingLeft: 0, paddingRight: 10}}>
                                            <LazyLoad>
                                                <img src={interactivo3} alt='interactivo-1'/>
                                            </LazyLoad>
                                            <div className='main-article'>
                                                <p>3. Students can practice listening, speaking or
                                                    impromptu conversation according to their levels
                                                    and needs.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{textAlign: 'left', paddingRight: 0, paddingLeft: 10}}>
                                            <LazyLoad>
                                                <img src={interactivo4} alt='interactivo-1'/>
                                            </LazyLoad>
                                            <div className='main-article'>
                                                <p>4. Their decisions and performance will influence
                                                    the development of the stories in the video.
                                                    They can enjoy their own stories while practicing
                                                    the language.

                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </section>

                            <div className='more'>
                                <p>More coming in the summer…</p>
                            </div>
                        </main>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Story