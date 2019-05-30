import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './header';
import Footer from './footer';
import Home from './home';
import Story from './story';
import Team from './team';

class Page extends React.Component {
    render () {
        return (
            <Router>
                <Grid fluid>
                    <Row p>
                        <Col lg={12}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Home />
                        </Col>
                    </Row>
                    <Row style={{padding: '0 6.1rem'}}>
                        <Col lg={8} lgOffset={2}>
                            <Footer />
                        </Col>
                    </Row>
                </Grid>

            </Router>
        )
    }
}

export default Page