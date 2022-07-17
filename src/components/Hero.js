import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col  justify-center  items-center  text-center  h-screen text-black   py-96 px-40'>
        <h1 className='text-7xl  font-bold text-accent'>
            Discover latest crypto news!
        </h1>
        <p className='mt-10 text-gray-400'>Register now to get Quick crypto/stock news,we also provide test trading.</p>
        <div className='flex flex-row mt-10 p-6 shadows rounded-lg w-3/6 justify-between'>
            <input type={"email"} placeholder={"Register for News..."} className={"w-full p-4 bg-gray-100 mr-5 rounded-lg outline-none"}></input>
            <button className='px-8 py-5 rounded-lg  text-white bg-blue-600'>Register</button>
        </div>
        
        
    </div>
  )
}

export default Hero