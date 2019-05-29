import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/header.css'

class Header extends React.Component {
    render () {
        return (
            <Grid fluid className='header-container' >
                <Row className='header'>
                    <Col lg={6} className="logo">
                        <img className="logoPic" src="../media/logo.svg" alt='team-logo' />
                        <span>Team Otter</span>
                    </Col>
                    <Col lg={6} className="breadcrumb">
                        <span>Home</span>
                        <span>Story</span>
                        <span>Team</span>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Header