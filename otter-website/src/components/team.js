import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/team.scss';
import cover from "../media/Team/Team-Cover.jpg";
import shiv from '../media/Team/Team-Shiv.jpg';
import wei from '../media/Team/Team-Wei.jpg';
import mingtong from '../media/Team/Team-Mingtong.jpg';
import wenjie from '../media/Team/Team-Wenjie.jpg';
import hanyu from '../media/Team/Team-Hanyu.jpg';
import resume from '../media/Team/resume.svg';
import portfolio from '../media/Team/portfolio.svg';
import linkedin from '../media/Team/linkedin.svg';

import anime from 'animejs';

import LazyLoad from 'react-lazyload';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function getSiblings(elem) {
    let siblings = [];
    [...elem.parentNode.childNodes].forEach(sibling =>
        sibling === elem ? null : siblings.push(sibling)
    );
    return siblings
}


class Team extends React.Component {

    componentDidMount = () => {
        this.backgroundAnimation('.cover-img-cover', '.cover-text');
        window.scrollTo(0, 0);
        window.addEventListener('wheel', this.showPosition)
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
        document.querySelector('.side-svg line').setAttribute('y1',  ev.currentTarget.offsetTop + 5.5);
        document.querySelector('.side-svg line').setAttribute('y2',  ev.currentTarget.offsetTop+ 6.5);
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
        document.querySelectorAll('.members>ul>li').forEach((elem) => {
            if (elem.offsetTop-window.scrollY-window.innerHeight < 0) {
                document.querySelector('.' + elem.getAttribute('class') + '-anchor').style.color = 'black';
                getSiblings(document.querySelector('.' + elem.getAttribute('class') + '-anchor' ))
                    .forEach((elem) => elem.style.color = '#979797');

                if (document.querySelector('.' + elem.getAttribute('class') + '-anchor').style.color === 'black') {
                    let target = document.querySelector('.' + elem.getAttribute('class') + '-anchor');
                    document.querySelector('.side-svg line').setAttribute('y1', target.offsetTop + 5.5);
                    document.querySelector('.side-svg line').setAttribute('y2', target.offsetTop + 6.5);
                }
            }

        });

    };

    render () {
        return (
            <Grid className='team-container' fluid>
                <Row>
                    <Col lg={2}>
                        <aside className='team-side'>
                            <svg className='side-svg'>
                                <line x1='6' y1='30' x2='6' y2='31'/>
                            </svg>
                            <ul>
                                <li className='shiv-anchor'
                                    data-name=".shiv"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                    style={{color: 'black'}}
                                >
                                    Team Lead
                                </li>
                                <li className='wei-anchor'
                                    data-name=".wei"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                >
                                    Research Lead
                                </li>
                                <li className='mingtong-anchor'
                                    data-name=".mingtong"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                >
                                    Content Lead
                                </li>
                                <li className='wenjie-anchor'
                                    data-name=".wenjie"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                >
                                    Design Lead
                                </li>
                                <li className='hanyu-anchor'
                                    data-name=".hanyu"
                                    onClick={this.anchorClick.bind(this)}
                                    onMouseOver={this.hoverAnimation.bind(this)}
                                    onMouseOut={this.leaveAnimation.bind(this)}
                                >
                                    Development Lead
                                </li>
                            </ul>
                        </aside>
                    </Col>

                    <Col lg={8} >
                        <main className='team-main'>
                            <section className='cover'>
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
                                        <p className='coverText-title'>Team Otter</p>
                                        <p className='coverText-article'>We are a group of master students in Carnegie Mellon University. We study Educational Technology and Applied Learning Science in Human-Computer Interaction Institute, School of Computer Science. </p>
                                    </div>
                                </div>
                            </section>

                            <section className='members'>
                                <ul>
                                    <li className='shiv'>
                                        <Grid fluid>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className='members-img'>
                                                        <LazyLoad>
                                                            <img src={shiv} alt='shiv'/>
                                                        </LazyLoad>
                                                    </div>
                                                    <div className='members-text'>
                                                        <p>Shivang Gupta</p>
                                                        <br />
                                                        <p>Team Lead</p>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <p className='members-intro'>I received my Bachelor’s degree in Computer Science from the Hong Kong University of Science and Technology. I worked as a learning engineer in Hong Kong and IT Manager in India.
                                                        After graduation, I plan to work in a product/project management role where I can apply my interdisciplinary skill set. In my free time I love trying out teas from around the world and at any given time
                                                        you will find music in at least 10 different languages on my phone.</p>
                                                    <div className='members-link'>
                                                        <ul>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={resume} alt='resume-link' />
                                                                </div>
                                                                <span>Resume</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={portfolio} alt='portfolio-link' />
                                                                </div>
                                                                <span>Portfolio</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={linkedin} alt='linkedin-link' />
                                                                </div>
                                                                <span>LinkedIn</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </li>

                                    <li className='wei'>
                                        <Grid fluid>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className='members-img'>
                                                        <LazyLoad>
                                                            <img src={wei} alt='wei' />
                                                        </LazyLoad>
                                                    </div>
                                                    <div className='members-text'>
                                                        <p>Wei Gong</p>
                                                        <br />
                                                        <p>Research Lead</p>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <p className='members-intro'>I earned my Bachelor’s degree in Spanish from …. I worked as a product manager, and freelance Span ish interpreter and teacher. After graduation,
                                                        I plan to work as a learning experience designer/researcher where I can apply my passion in both product design and education. In my free time, I love learning different
                                                        musical instruments and I enjoy spending time alone with my cat.</p>
                                                    <div className='members-link'>
                                                        <ul>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={resume} alt='resume-link' />
                                                                </div>
                                                                <span>Resume</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={portfolio} alt='portfolio-link' />
                                                                </div>
                                                                <span>Portfolio</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={linkedin} alt='linkedin-link' />
                                                                </div>
                                                                <span>LinkedIn</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </li>

                                    <li className='mingtong'>
                                        <Grid fluid>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className='members-img'>
                                                        <LazyLoad>
                                                            <img src={mingtong} alt='mingtong' />
                                                        </LazyLoad>
                                                    </div>
                                                    <div className='members-text'>
                                                        <p>Mingtong Zhang</p>
                                                        <br />
                                                        <p>Content Lead</p>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <p className='members-intro'>I got my Bachelor’s degree in Educational Technology and Instruction from Beijing Normal University, the best place in China to train instructors.
                                                        I also worked as a high school teacher intern and  part-time tutor. I enjoy learning
                                                        Japanese and consider it a precious first-hand experience of second language acquisition. I also love cooking and was a semi-professional Starcraft player. </p>
                                                    <div className='members-link'>
                                                        <ul>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={resume} alt='resume-link' />
                                                                </div>
                                                                <span>Resume</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={portfolio} alt='portfolio-link' />
                                                                </div>
                                                                <span>Portfolio</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={linkedin} alt='linkedin-link' />
                                                                </div>
                                                                <span>LinkedIn</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </li>

                                    <li className='wenjie'>
                                        <Grid fluid>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className='members-img'>
                                                        <LazyLoad>
                                                            <img src={wenjie} alt='wenjie' />
                                                        </LazyLoad>
                                                    </div>
                                                    <div className='members-text'>
                                                        <p>Wenjie Li</p>
                                                        <br />
                                                        <p>Design Lead</p>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <p className='members-intro'>With a background in language and art, I worked as an editor and designer in a
                                                        publishing house in Beijing, China before coming to CMU. I'm also a freelance illustrator since college!
                                                        After gruaduation, I’m pursuing a career as a UX designer. I love everything about art and language. I can speak four languages including Japanese and French. I also practice Aikido!</p>
                                                    <div className='members-link'>
                                                        <ul>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={resume} alt='resume-link' />
                                                                </div>
                                                                <span>Resume</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={portfolio} alt='portfolio-link' />
                                                                </div>
                                                                <span>Portfolio</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={linkedin} alt='linkedin-link' />
                                                                </div>
                                                                <span>LinkedIn</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </li>

                                    <li className='hanyu'>
                                        <Grid fluid>
                                            <Row>
                                                <Col lg={3}>
                                                    <div className='members-img'>
                                                        <LazyLoad>
                                                            <img src={hanyu} alt='hanyu' />
                                                        </LazyLoad>
                                                    </div>
                                                    <div className='members-text'>
                                                        <p>Hanyu Tang</p>
                                                        <br />
                                                        <p>Development Lead</p>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <p className='members-intro'>With a unique, interdisciplinary background in arts and sciences, I enjoy exploring the convergence between humanities and technology. Before coming to CMU, I have interned
                                                        as a software engineer, and I also dream to be one after graduation. Currently, I’m living with a cute French bulldog. During my free time, I like to explore this city and enjoy the beautiful weather with him.</p>
                                                    <div className='members-link'>
                                                        <ul>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={resume} alt='resume-link' />
                                                                </div>
                                                                <span>Resume</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={portfolio} alt='portfolio-link' />
                                                                </div>
                                                                <span>Portfolio</span>
                                                            </li>
                                                            <li>
                                                                <div className='link-logo'>
                                                                    <img src={linkedin} alt='linkedin-link' />
                                                                </div>
                                                                <span>LinkedIn</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </li>
                                </ul>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Team