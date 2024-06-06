import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/header.css';
import logo from '../media/logo.svg';
import hamburgerBtnImg  from '../media/Group 2.svg';
import closeBtn from '../media/Group 2-2.svg';

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
            menuOpen: false,
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

    expandMenu = () => {
        this.setState({menuOpen: true});
        let header = document.querySelector('.header-container');
        header.style.height = '15rem';
        header.style.transition = '0.7s ease';


    };

    closeMenu = () => {
        this.setState({menuOpen: false});
        let header = document.querySelector('.header-container');
        header.style.height = '3.75rem';
        header.style.transition = '0.7s ease';

    };

    renderRight = (device) => {
        if (device < 768){
            return (
                <Col xs={6} className="hamburgerBtn">
                    <span>
                        {this.state.menuOpen?
                            <img src={closeBtn} alt='hamburgerBtn' onClick={this.closeMenu}/>
                            : <img src={hamburgerBtnImg} alt='hamburgerBtn' onClick={this.expandMenu}/>
                        }
                    </span>
                </Col>
            )
        }else {
            return (
                <Col lg={6} md={6} className="breadcrumb">
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
            )
        }
    };

    renderMenu = (screen) => {
        if (screen < 768) {
            let menu = [
                <Row key='home' className='menuItem'>
                    <Col xs={12} onClick={()=>{
                        store.dispatch(goHome());
                        this.closeMenu()}}
                         style={this.props.page === 'Home'? {color: '#979797'}:null}
                    >Home</Col>
                </Row>,
                <Row key='team' className='menuItem'>
                    <Col xs={12}
                         onClick={()=>{
                             store.dispatch(goStory());
                             this.closeMenu()}}
                         style={this.props.page === 'Story'? {color: '#979797'}:null}
                    >Story</Col>
                </Row>,
                <Row key='story' className='menuItem'>
                    <Col xs={12} onClick={()=>{
                        store.dispatch(goTeam());
                        this.closeMenu()}}
                         style={this.props.page === 'Team'? {color: '#979797'}:null}
                    >Team</Col>
                </Row>
            ];
            return menu
        }
    };


    render () {
        return (
            <Grid fluid className='header-container' >
                <Row className='header'
                     style={this.props.position==='notTop'? {borderRadius: '0 0 2.5rem 2.5rem', boxShadow:' 0 2px 8px #d8d8d8', transition: '0.5s ease'}:null}
                >
                    <Col lg={6} xs={6} className="logo">
                        <span className='logoBox' onClick={()=>store.dispatch(goHome())}>
                            <img className='logoPic' src={logo} alt='otter-logo'/>
                            {window.screen.availWidth >=768? <span className='logoName'>Team Otter</span>:null}
                        </span>
                    </Col>

                    {this.renderRight(window.screen.availWidth)}
                </Row>
                {this.renderMenu(window.screen.availWidth)}
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(Header)