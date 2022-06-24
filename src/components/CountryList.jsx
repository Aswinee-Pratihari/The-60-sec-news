import React from 'react'
// import img from '../pages/india.png'
import { Link } from 'react-router-dom';
import Countries from '../country.json'
const CountryList = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">TOP HEADLINES BY COUNTRY</h1>
        
      </div>
      <div class="flex flex-wrap -m-2">
        
    
    {
      Countries.map((Country)=>{
return <> 

 <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
  <Link to={`/country/${Country.short}`}> 
<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-600 text-slate-100">
  <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Country.img}/>
  <div class="flex-grow">
    <h2 class="text-gray-900 title-font font-medium">{Country.country}</h2>
    <p class="text-gray-500">{Country.short}</p>
  </div>
</div>
</Link>
</div>
</>  
      })
    }
      </div>
    </div>
  </section>
  )
}

export default CountryList
