import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SearchResults from '../pages/SearchResults';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [search,setSearch]=useState("");
  const [isShown, setIsShown] = useState(false);
  const [result,setResult]=useState("");

  useEffect(()=>{
setIsShown(false);
  },[])

  const handleSearch=()=>{
    if (search) {
       setResult(search);
      setIsShown(true);
      setSearch("");
      console.log("doing")
    }
  }
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ...">
      <Link to={'/'}>
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        
        <span class="ml-3 text-xl">THE-60-SEC-NEWS</span>
      </a>
      </Link>
   


      <div className="flex  justify-center ...">
      <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
         
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  placeholder='add keyword to search'
           
           value={search} 
           onChange={(e)=> setSearch(e.target.value.toLowerCase())}/> 
        </div>
        <Link to={`/news/${search}`}>   <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleSearch}>Search</button></Link>
        </div>
    </div>
 
  </header>
  )
}

export default Navbar
