import React from "react"
import {Container, Row, Card, Col,Button, CardImg, CardTitle} from 'reactstrap'
import River from "./assets/east-river.jpeg";
import Ruck from './assets/ruck.jpeg'
function Portfolio(){
    return (
<div>
<h1 className='ptitle'>Here are some of my projects</h1>
<br/>
<br/>
<Row>
<Col md={4}>
    <Card className='ecard'>
        <CardTitle className='etitle'>East River Homes</CardTitle>
        <CardImg className='eriver' src={River} alt='east river'/>
        <a href="https://eastriver-contracting.com/"><Button className="eastbtn">View More</Button></a>
    </Card>
    </Col>

    
    <Card className="ruckcard">
    <Col md={4}>
        <CardTitle className='rtitle'>Ruck Roofing</CardTitle>
        <CardImg className='ruckimg' src={Ruck} alt='east river'/>
        <a href="https://ruckroofing.com/"><Button className="eastbtn">View More</Button></a>
        </Col>
    </Card>
    <br/>
    <br/>
    <Col md={4}>
    <Card>
        <CardTitle className='vtitle'>VoteFromHome</CardTitle>
        <CardImg className='vhome' src='https://ca-times.brightspotcdn.com/dims4/default/04e367d/2147483647/strip/true/crop/2048x1152+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F55%2F17%2F4eacf672c654bed1adb04ce34a85%2Fla-pol-us-vote-california-20160702-photo' alt='east river'/>
        <a href="https://github.com/benabbott85/coronavote"><Button className="eastbtn">View More</Button></a>
    </Card>
    </Col>
</Row>
{/* <Row>
<Col md={4}>
    <Card>
        <CardTitle className='etitle'>VoteFromHome</CardTitle>
        <CardImg className='eriver' href='https://ca-times.brightspotcdn.com/dims4/default/04e367d/2147483647/strip/true/crop/2048x1152+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F55%2F17%2F4eacf672c654bed1adb04ce34a85%2Fla-pol-us-vote-california-20160702-photo' alt='east river'/>
        <a href="https://eastriver-contracting.com/"><Button className="eastbtn">View More</Button></a>
    </Card>
    </Col>

    
    {/* <Card className="ruckcard">
    <Col md={4}>
        <CardTitle className='etitle'>Ruck Roofing</CardTitle>
        <CardImg className='eriver' src={Ruck} alt='east river'/>
        <a href="https://ruckroofing.com/"><Button className="eastbtn">View More</Button></a>
        </Col>
    </Card> */}
    
{/* </Row> */} 

</div>
    )
}

export default Portfolio