import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {

    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>
    // {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // })
  return (
    <>
    <div className='text-center bg-gray-700 p-3 text-white text-2xl'>GitHub followers: {data.followers}</div>
    <img src={data.avatar_url} alt="github profile" width={300}/>
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () =>{
   const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}
