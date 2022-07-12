

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TopHeadlines = () => {
const [headlines,Setheadlines]=useState([]);

  const showheadline=async()=>{
    const url="https://newsapi.org/v2/top-headlines?country=in&apiKey=be140003ebdc40c4ae3dca5b50ae067a"
    let data=await fetch(url);
    let parsedata=await data.json();
Setheadlines(parsedata.articles[0]);
console.log(parsedata.articles[0]);
  }
  useEffect(()=>{
showheadline();
  },[])
  return (
    <section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5  items-center justify-center flex-col">
<h1 class="sm:text-5xl text-3xl py-10 font-medium title-font mb-4 text-gray-900">TOP NEWS OF THE DAY</h1>
  <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={headlines.urlToImage}/>
  <div class="text-center lg:w-2/3 w-full">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{headlines.title}</h1>
    <p class="mb-8 leading-relaxed">{headlines.description}</p>
    <div class="flex justify-center">
      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href={headlines.url}>Read More</a> </button>
      {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
    </div>
  </div>
</div>
</section>
  )
}

export default TopHeadlines
