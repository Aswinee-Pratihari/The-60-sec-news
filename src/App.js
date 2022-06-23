import {BrowserRouter, BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'

export default class App extends Component {
  render() {
    return (
    //  <BrowserRouter>
     <>
     
     <Navbar/>
     <Hero/>
     </>
    //  {/* </BrowserRouter> */}
    )
  }
}
