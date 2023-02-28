import React from 'react';

import Navbar from '../components/Navbar';
import Row from '../components/Row';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

function Landing() {
  return (
    <div>
        <Navbar/>
        <Row/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default Landing;