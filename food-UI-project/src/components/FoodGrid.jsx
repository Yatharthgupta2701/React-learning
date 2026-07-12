import React from 'react'
import Cards from './Cards';

const FoodGrid = () => {

    const foods = [
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Pizza",
    price: "15.00",
    rating: "4.5",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Burger",
    price: "9.50",
    rating: "4.8",
  },
  {
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Raspberry Cake",
    price: "7.00",
    rating: "5.0",
  },
  {
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Salmon",
    price: "4.50",
    rating: "4.3",
  },
];


  return (
    <div className='grid grid-cols-2 gap-5 px-6 py-5'>
      {foods.map(function(elem, idx){
        return <div>
            <Cards 
            key = {idx}
            image = {elem.image}
            name = {elem.name}
            price = {elem.price}
            rating = {elem.rating}
            />
        </div>
      })}
    </div>
  )
}

export default FoodGrid
