import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {BrowserRouter as Link} from "react-router-dom";
import '../styleSheets/header.scss';
import logo from '../media/logo.svg';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
    };

    onHover = (ev) => {
        ev.currentTarget.childNodes[1].childNodes[0].setAttribute('x2', '43');
    };

    onLeave = (ev) => {
        ev.currentTarget.childNodes[1].childNodes[0].setAttribute('x2', '6')
    };

    onClick = (ev) => {
        console.log(ev.currentTarget.getAttribute('data-link'))
    };

    render () {
        return (
            <Grid fluid className='header-container' >
                <Row className='header'>
                    <Col lg={6} className="logo">
                        <span className='logoBox' data-link="#" onClick={this.onClick.bind(this)}>
                            <img className='logoPic' src={logo} alt='otter-logo'/>
                            <span className='logoName'>Team Otter</span>
                        </span>
                    </Col>
                    <Col lg={6} className="breadcrumb">
                        <ul className='breadcrumbBox'>
                            <li className='breadcrumbHome'
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.onLeave.bind(this)}
                                onClick={this.onClick.bind(this)}>
                                Home
                                <svg>
                                    <line x1='6' y1='6' x2='43' y2='6'/>
                                </svg>
                            </li>
                            <li className='breadcrumbStory' data-link="#"
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.onLeave.bind(this)}
                                onClick={this.onClick.bind(this)}>
                                Story
                                <svg>
                                    <line x1='6' y1='6' x2='6' y2='6'/>
                                </svg>
                            </li>
                            <li className='breadcrumbTeam' data-link="#"
                                onMouseOver={this.onHover.bind(this)}
                                onMouseOut={this.onLeave.bind(this)}
                                onClick={this.onClick.bind(this)}>
                                Team
                                <svg>
                                    <line x1='6' y1='6' x2='6' y2='6'/>
                                </svg>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Header