import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import persona from '../media/Home/Home-Persona.png';
import '../styleSheets/home.scss';

class Home extends React.Component {
    render () {
        return (
            <Grid fluid className='home-container'>
                <Row className='home'>
                    <Col lg={6} className='home-left'>
                        <svg className='left-svg' viewBox="0 0 581.63 626.68">
                            <path x='0' y='0'
                                  d="M580.91,323.68c12.16,176.31-130.27,303-307,303-131,0-247-92-270-216-19.54-105.32,38-174,88-223,57.58-56.43,54.52-167.25,202-186C466.91-20.32,570.91,178.68,580.91,323.68Z"/>
                        </svg>
                        <div className='left-text'>
                            <svg>
                                <text className='text-title' x='0' y='50'>Learn real language</text>
                                <text className='text-title' x='0' y='110'>in real world.</text>
                                <text className='text-subtitle' x='0' y='170'>A new language learning tool coming</text>
                                <text className='text-subtitle' x='0' y='205'>soon.</text>
                            </svg>
                        </div>
                        <button className='button'>
                            See On-Going Process
                        </button>
                    </Col>
                    <Col lg={6} className='home-right'>
                        <svg viewBox="0 0 581.63 626.68" width="0" height="0">
                            <defs>
                                <clipPath id='persona-clip'>
                                    <path x='0' y= '0'
                                          d="M617.45,257.48c12.16,176.31-114.27,291-291,291s-299-73-322-197c-19.53-105.33,25.32-208.9,133-286,81-58,161-68,239-65C525.45,6.21,607.45,112.48,617.45,257.48Z"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <div className='right-persona'>
                            <img src={persona} alt='student-persona' />
                        </div>
                    </Col>
                </Row>
                <Row className='home-svg'>
                    <svg>

                    </svg>
                    <svg>

                    </svg>
                </Row>
            </Grid>
        )
    }
}

export default Home