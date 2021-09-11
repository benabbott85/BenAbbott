import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import Portfolio from './components/portfolio'
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
