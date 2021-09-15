import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import {Link, Router, Switch} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import Portfolio from './components/portfolio';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/modetheme";
import Slide from './components/assets/switch.gif'
const StyleApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyleApp>
      <button className='darkbtn'onClick={() => themeToggler()}>
<div class="background"></div>
<label for="toggle" class="title">Change Mode</label></button>
      {/* <Color> */}
      {/* <Header/> */}
<h1>Ben Abbott</h1>
<h2>Full Stack Software Engineer</h2>
<p>Contact me to collaborate: 
  <br/>
  babbott85@gmail.com
  <br/>
  Tel: (516)318-1366
</p>

 <a href='./portfolio'><button>Check out my work</button></a>

<Portfolio/>
<Contact/>
<br/>
<br/>
<Footer/>
{/* </Color> */}

      </StyleApp>
    </ThemeProvider>
    </div>
  );
}

export default App;
