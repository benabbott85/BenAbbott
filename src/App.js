import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
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
<Contact/>
    </div>
  );
}

export default App;
