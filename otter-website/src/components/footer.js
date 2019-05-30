import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styleSheets/footer.scss';

class Footer extends React.Component {
    render () {
        return (
            <Grid fluid className='footer-container'>
                <Row className='footer'>
                    <Col lg={6}>
                        <p>Copyright &#xa9;️Team Otter 2019</p>
                        <p>Carnegie Mellon University</p>
                        <p className='department'>Human-Computer Interaction Institute</p>
                    </Col>
                    <Col lg={6}>
                        <p>Contact Us</p>
                        <p>otter.metals@gamil.com</p>
                        <p>5000 Forbes Avenue, Pittsburgh, P.A., 15213</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer