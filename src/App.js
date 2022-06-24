import {BrowserRouter, BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
// import NewsList from './pages/CountryNews'
import Categorynews from './pages/Categorynews'
import CountryNews from './pages/CountryNews'
const App = () => {
  const apikey = process.env.APP_KEY;
  console.log(apikey)
  return (
    <BrowserRouter>
     
          <Navbar/>
       <Routes>
         <Route path="/" element={<Hero/>}/>
         <Route path='/country/:id' element={<CountryNews/>} apikey={apikey}/>
         <Route path='/category/:name' element={<Categorynews/>}/>
         </Routes>
         
        </BrowserRouter>
  )
}

export default App


