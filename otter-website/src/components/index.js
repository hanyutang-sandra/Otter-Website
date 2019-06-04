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
        return (
                <Grid fluid>
                    <Row>
                        <Col lg={12}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            {this.props.page === 'Home'? <Home/>:null}
                            {this.props.page === 'Story'? <Story/>:null}
                            {this.props.page === 'Team'? <Team/>:null}
                        </Col>
                    </Row>
                    <Row style={{padding: '0 6.1rem'}}>
                        <Col lg={8} lgOffset={2}>
                            <Footer />
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default connect(mapStateToProps)(Page)