import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Story from './story';
import Team from './team';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    page: state.changePage.page
});

class Page extends React.Component {
    render () {
        console.log(window.screen.availWidth);
        return (
                <Grid fluid
                      style={window.screen.availWidth < 768?
                          {padding: '0', width: '100%'}
                          : null}>
                    <Row style={window.screen.availWidth < 768?
                        {padding: '0', width: '100%', margin: 0, boxShadow: '0 2px 8px #d8d8d8',
                            position: 'fixed', zIndex: '100', backgroundColor: '#ffffff', overflowX: 'hidden'}
                        : null}>
                        <Col lg={12} xs={12}>
                            <Header />
                        </Col>
                    </Row>
                    <Row style={window.screen.availWidth < 768? {margin: 0, padding: 0}:null}>
                        <Col lg={12}>
                            {this.props.page === 'Home'? <Home/>:null}
                            {this.props.page === 'Story'? <Story/>:null}
                            {this.props.page === 'Team'? <Team/>:null}
                        </Col>
                    </Row>
                    <Row style={window.screen.availWidth < 768? {padding: '0 2rem',  margin: 0,}:{padding: '0 6.1rem'}}>
                        <Col lg={8} lgOffset={2} xs={12}>
                            <Footer />
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default connect(mapStateToProps)(Page)