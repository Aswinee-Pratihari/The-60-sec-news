import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Categorynews = (props) => {

    const {name} = useParams();
    const [details,Setdetails]=useState([]);

    const showresult = async()=>{
        // const url= `https://newsapi.org/v2/top-headlines?category=${name}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const url=`https://newsapi.org/v2/top-headlines?category=${name}&apiKey=be140003ebdc40c4ae3dca5b50ae067a`
        let data=await fetch(url);
        let parsedata=await data.json();
        Setdetails(parsedata.articles);
    }
    useEffect(()=>{
        showresult();
    },[])


  return (
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-8 py-24 mx-auto">
      <div class="flex flex-wrap -m-12">
  {
  details.map((item)=>{
      return  <div class="p-12 md:w-1/2 flex flex-col items-start">
   <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={item.urlToImage} alt="blog"/> 
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.title}</h2>
      <p class="leading-relaxed mb-8">{item.description}</p>
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <a class="text-indigo-500 inline-flex items-center" href={item.url}>Read More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      
      </div>
      <div class="inline-flex items-center">
        
        <span class="flex-grow flex flex-col pl-4">
          <span class="text-gray-400 text-xs tracking-widest mt-0.5">AUTHOR</span>
          <span class="title-font font-medium text-gray-900">{item.author}</span>
        </span>
      </div>
    </div>
  })
  }
  
       
  
  
        </div>
        </div>
        </section>
  )
}

export default Categorynews
