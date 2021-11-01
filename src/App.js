import React from 'react'
// import logo from './logo.svg';
import './App.css';
// import {Link, Router, Switch} from 'react-router-dom'
// import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import Portfolio from './components/portfolio';
import Tech from './components/tech'
// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./components/modetheme";
import Timeline from './components/timeline';
// import MaterialNav from './components/materialnav'

function App() {

  

  return (
    <div className="App">
     
      
      
<div class="background"></div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
<h1 className="ben">Ben Abbott</h1>
<h2 className="stack">Full Stack Software Engineer</h2>
<h2 className="me">Denver, Colorado</h2>
<p className="me">Contact me to collaborate: 
  <br/>
  babbott85@gmail.com
  <br/>
  Tel: (516)318-1366
</p>

 <a  href='https://github.com/benabbott85' target='_blank' rel="noreferrer"><button className= 'workBtn'>CHECK OUT MY WORK</button></a>
 <br/>
 <br/>
 <a href='https://drive.google.com/file/d/1Q1l-a2Lw8CBPAE-QGwlCfl6umjrBGKZM/view?usp=sharing' target='_blank' rel="noreferrer"><button className ='resumeBtn'>MY RESUME</button></a>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
 <Tech/>
<Portfolio/>
<Timeline/>
<Contact/>
<br/>
<br/>
<Footer/>

    </div>
  );
}

export default App;
