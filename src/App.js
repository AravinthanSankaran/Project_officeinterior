import './App.css';
import React from 'react';
import Navbar1 from './Component/Navbar';
import Banner from './Component/Banner';
import Body from './Component/Body';
import Footer1 from './Component/Footer1';
import Form from './Component/Form';
import Footer from './Component/footer';
function App(){
    return(
      <div className='body'>
      <Navbar1 />
      <Banner />
      <Body />
      <Footer1 />
      <Form />
      <Footer />
      </div>
    )
   }
   
export default App;
