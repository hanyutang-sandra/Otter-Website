import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import persona from '../media/Home/persona-border.svg';
import '../styleSheets/home.scss';
import leftSvg from '../media/Home/Home-Shape.svg';

import {top, notTop, goStory} from "../redux/actions";
import store from '../redux/store';

import anime from 'animejs';


class Home extends React.Component {
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        /*this.handleMove('.left-svg');*/
        window.scrollTo(0, 0);
    };

    handleScroll = () => {
        if (window.scrollY/16>=5) {
            store.dispatch(notTop())
        }else{
            store.dispatch(top())
        }
    };

    handleMove = (elem) => {
        anime({
            targets: elem,
            left: 700,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            duration: 20000,
        });
    };

    render () {
        return (
            <Grid className='home-container' fluid>
                <Row className='home'>
                    <Col lg={6} className='home-left'>
                        <div className='left-svg'>
                            <img src={leftSvg} alt='svg' />
                        </div>
                        <div className='left-text'>
                            <p className='text-title'>Learn real language in the real world.</p>
                            <p className='text-subtitle'>A new language learning tool coming soon.</p>
                        </div>
                        <button className='button' onClick={()=>store.dispatch(goStory())}>
                            See On-Going Process
                        </button>
                    </Col>
                    <Col lg={6} className='home-right'>
                        <div className='right-persona'>
                            <img src={persona} alt='student-persona' />
                        </div>
                    </Col>
                </Row>
                <svg className='home-svg-left' viewBox="0 0 581.63 626.68">
                    <path x='0' y='0'
                          d="M580.91,323.68c12.16,176.31-130.27,303-307,303-131,0-247-92-270-216-19.54-105.32,38-174,88-223,57.58-56.43,54.52-167.25,202-186C466.91-20.32,570.91,178.68,580.91,323.68Z"/>
                </svg>
                <svg className='home-svg-right' viewBox="0 0 581.63 626.68">
                    <path x='0' y='0'
                          d="M580.91,323.68c12.16,176.31-130.27,303-307,303-131,0-247-92-270-216-19.54-105.32,38-174,88-223,57.58-56.43,54.52-167.25,202-186C466.91-20.32,570.91,178.68,580.91,323.68Z"/>
                </svg>
                <div style={{width: '100%', height: '15rem'}} />
            </Grid>
        )
    }
}

export default Home