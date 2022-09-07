import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import datas from './fake.js'

// let data = [
//   {
//     name: "spoon",
//     price: 200,
//     rating: 4,
//   },
//   {
//     name: "pourch",
//     price: 20000,
//     rating: 5,
//   },
//   {
//     name: "vuol",
//     price: 20,
//     rating: 2,
//   },
//   {
//     name: "spillo",
//     price: 100,//     price: 100,
//     price: 100,
//     price: 100,

//     rating: 1,
//   },
// ];

// const [info , setinfo] =useState([])

const CustomComponent =()=> <>
<h1>new</h1>
<br/>
{datas.map((item, index)=><Fragment key={index}>
  <div className='text-centre border border-blue-300 my-6 rounded-md max-w-md mx-auto'>
    {/* {item.title} */}
    <img src={item.image} alt={item.title} className="block mx-auto w-36 h-36 mb-1" />
  {item.title}
    {/* {item.image} */}
    
    {/* {item.category} */}
    </div>
    {/* <b>........................................................</b> */}
    </Fragment> )}
</>

function app() {
  return (
    // <Fragment>
   
    
    
    <div className="App">     
   
   <CustomComponent />

    </div>
  );
}

export default app;
