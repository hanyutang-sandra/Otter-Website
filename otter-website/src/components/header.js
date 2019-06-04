import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/header.scss';
import logo from '../media/logo.svg';

import {goHome, goStory, goTeam} from "../redux/actions";
import store from '../redux/store';
import { connect } from 'react-redux';

import anime from 'animejs';

const mapStateToProps = state => ({
    position: state.listenScroll.position,
    page: state.changePage.page
});

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
    };

    onHover = (ev) => {
        anime({
            targets: ev.currentTarget.childNodes[1].childNodes[0],
            x2: {value: 43, duration: 1000, delay: 0},
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    };

    onLeave = (ev) => {
        anime({
            targets: ev.currentTarget.childNodes[1].childNodes[0],
            x2: {value: 6, duration: 1000, delay: 0},
            easing: 'easeOutElastic(1, .8)',
            loop: false
        })
    };

    render () {
        return (
            <Grid fluid className='header-container' >
                <Row className='header'
                     style={this.props.position==='notTop'? {borderRadius: '0 0 2.5rem 2.5rem', boxShadow:' 0 2px 8px #d8d8d8', transition: '0.5s ease'}:null}
                >
                    <Col lg={6} className="logo">
                        <span className='logoBox' onClick={()=>store.dispatch(goHome())}>
                            <img className='logoPic' src={logo} alt='otter-logo'/>
                            <span className='logoName'>Team Otter</span>
                        </span>
                    </Col>
                    <Col lg={6} className="breadcrumb">
                        <ul className='breadcrumbBox'>
                            <li className='breadcrumbHome'
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.props.page==='Home'?null:this.onLeave.bind(this)}
                                onClick={()=>store.dispatch(goHome())}>
                                Home
                                <svg>
                                    <line x1='6'
                                          y1='6'
                                          x2={this.props.page ==='Home'?'43':'6'}
                                          y2='6'/>
                                </svg>
                            </li>
                            <li className='breadcrumbStory' data-link="#"
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.props.page==='Story'?null:this.onLeave.bind(this)}
                                onClick={()=>store.dispatch(goStory())}>
                                Story
                                <svg>
                                    <line x1='6'
                                          y1='6'
                                          x2={this.props.page ==='Story'?'43':'6'}
                                          y2='6'/>
                                </svg>
                            </li>
                            <li className='breadcrumbTeam' data-link="#"
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.props.page==='Team'?null:this.onLeave.bind(this)}
                                onClick={()=>store.dispatch(goTeam())}>
                                Team
                                <svg>
                                    <line x1='6'
                                          y1='6'
                                          x2={this.props.page ==='Team'?'43':'6'}
                                          y2='6'/>
                                </svg>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(Header)