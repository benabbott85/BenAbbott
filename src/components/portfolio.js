import React from "react"
import {Container, Row, Card, Col,Button, CardImg, CardTitle} from 'reactstrap'
import ERiver from "./assets/east-river.jpeg";
import Ruck from './assets/ruck.jpeg'
function Portfolio(){
    return (
<div>
<h1 className='ptitle'>Here are some of my projects</h1>
<Row>
<Col md={4}>
    <Card>
        <CardTitle className='etitle'>East River Homes</CardTitle>
        <CardImg className='eriver' src={ERiver} alt='east river'/>
        <a href="https://eastriver-contracting.com/"><Button className="eastbtn">View More</Button></a>
    </Card>
    </Col>

    
    <Card className="ruckcard">
    <Col md={4}>
        <CardTitle className='etitle'>Ruck Roofing</CardTitle>
        <CardImg className='eriver' src={Ruck} alt='east river'/>
        <a href="https://ruckroofing.com/"><Button className="eastbtn">View More</Button></a>
        </Col>
    </Card>
    
</Row>

</div>
    )
}

export default Portfolio