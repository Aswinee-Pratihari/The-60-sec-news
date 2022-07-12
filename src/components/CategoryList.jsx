import React from 'react'
import { Link } from "react-router-dom";
import Category from '../Category.json'
const CategoryList = () => {
    return (
  
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">TOP HEADLINES BY CATEGORY</h1>

      </div>
      <div class="flex flex-wrap -m-3">
{

Category.map(category=>{
return   <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link to={`/category/${category.name}`}>
<a class="block relative h-48 rounded overflow-hidden">
<img alt="ecommerce" class="object-cover object-center w-full h-full block" src={category.img} />
</a>
<div class="mt-2">

<h2 class="text-gray-900 title-font text-lg text-center font-medium">{category.name.toUpperCase()}</h2>

</div>
</Link>
</div>
})
}
         
      </div>
  </div>
</section>


    )
}

export default CategoryList
