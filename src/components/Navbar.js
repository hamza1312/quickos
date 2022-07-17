import React from 'react'
import logo from '../logo.svg';
const Navbar = () => {
    let li ="mr-9 te cusor-pointer hover:text-blue-600";
    let btn = "border-2 border-blue-600 px-5 mr-5 py-2 te cursor-pointer hover:bg-blue-600 hover:text-white text-blue-600  rounded-lg"
    let sbtn = "px-5 mr-5 py-2 cursor-pointer text-blue-600 "
  return (
    <nav className='p-6  fixed w-screen items-center text-black border-b-2  bg-white  flex flex-row justify-between  border-r-2 '>
        <img src={logo} width={122}></img>
        <ul className='inline-flex '>
            <li className={li}>
                About
            </li >
            <li className={li}>
                Trade
            </li >
            <li className={li}>
                Data
            </li>
            <li className={li}>
                Pricing
            </li>
            <li className={li}>
                Our Team
            </li>
        </ul>
        <ul className='inline-flex '>
        <li className={sbtn}>
                Login
            </li >
            <li className={btn}>
                Signup
            </li >
        </ul>
    </nav>
  )
}

export default Navbar