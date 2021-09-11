import React from "react"
import {Container, Row, Card, Col} from 'reactstrap'
import ERiver from "./assets/east-river.jpeg"
function Portfolio(){
    return (
<div>
<h1>Here are some of my projects</h1>
<Row>
<Col md={4}>
    <Card>
        <img className='eriver' src={ERiver} alt='east river'/>
    </Card>
    </Col>
</Row>

</div>
    )
}

export default Portfolio