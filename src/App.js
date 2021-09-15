import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import Portfolio from './components/portfolio';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/modetheme";

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
      <button className='darkbtn'onClick={() => themeToggler()}>Light Mode/Dark Mode</button>
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
<button>Check out my work</button>
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
