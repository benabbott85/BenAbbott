import React from 'react'
import {Container, Row} from 'reactstrap'
import Rct from './assets/react.png'
import JS from './assets/JS.png'
import Node from './assets/node.png'
import Mongo from './assets/mongo.png'
import Material from './assets/material.png'
function tech(){
    return(
<>
<h2>Tech that I use:</h2>
<Row>
<img src={Rct} alt='react'/>
<img src={JS} alt='JS'/>
<img src={Node} alt='node'/>
<img className="mongo"src={Mongo} alt='mongo'/>
<img src={Material} alt ='material'/>
</Row>
</>
    )
}

export default tech