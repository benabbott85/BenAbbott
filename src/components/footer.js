import React from "react"
import {Row} from 'reactstrap'
function footer (){
    return (
        <>
        <Row>
        <a href="https://www.linkedin.com/in/ben-abbott-51394421/" ><i class="fab fa-linkedin fa-4x linkedin" target='_blank'></i></a>
      <a href='https://drive.google.com/file/d/1Q1l-a2Lw8CBPAE-QGwlCfl6umjrBGKZM/view?usp=sharing'><button className ='resumeBtn'target='_blank'>My Resume</button></a>
      <a href="https://github.com/benabbott85"><i class="fab fa-github fa-4x github" target='_blank'></i></a>
      </Row>
      </>
    )
}

export default footer