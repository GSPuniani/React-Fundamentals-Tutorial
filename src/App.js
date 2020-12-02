import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title/Title';
import POPOSList from './Components/POPOSList/POPOSList';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './Components/About/About';
import POPOSDetails from './Components/POPOSDetails/POPOSDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About}/>
        <Route path="/details/:id" component={POPOSDetails}/>
        <img src={logo} alt='React Logo'/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
