import React from 'react';

import './assets/clock.css';

import Clock from './components/Clock';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
      <React.Fragment>
        <Header />
        <Clock />
        <Footer />
      </React.Fragment>
    );
}

export default App;
