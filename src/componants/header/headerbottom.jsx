import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidenavcontent from './sidenavcontent';
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';


const Headerbottom = () => {
  const ref = useRef()
  const [sidebar,setsidebar] = useState(false)
  const userinfo = useSelector((state) => state.amazon.userinfo)

  useEffect(()=>{
     document.body.addEventListener('click',(e)=>{
        if(e.target.contains(ref.current)){
            setsidebar(false)
        }
     })
  },[ref,sidebar]) 

  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light flex items-center text-white'>
         <ul className='flex items-center gap-2 text-sm tracking-wide   '>
            <li onClick={()=> setsidebar(true)} className='headerHover flex items-center gap-1'><MenuIcon/>All</li>
            <li className='headerHover hidden md:inline-flex'>Today's Deals</li>
            <li className='headerHover hidden md:inline-flex'>Customer Service</li>
            <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
            <li className='headerHover hidden md:inline-flex'>Registry</li>
            <li className='headerHover hidden md:inline-flex'>Sell</li>
         </ul>
         {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-10'>
                     <div className='w-full h-full relative'>
                          <div ref={ref} className='w-[350px] h-full bg-white border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon/>
                                {
                                 userinfo ? <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello,{userinfo.username}</h3> : <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello , Sign in</h3>
                                }
                            </div>

                            <Sidenavcontent 
                            title="Digital Content & Devices"
                            one="Amazon Music"
                            two="Kindle E-readers & books"
                            three="Amazon Appstore" 
                            />

                            <Sidenavcontent 
                            title="Shop By Department"
                            one="Electronics"
                            two="Computers"
                            three="Smart Home" 
                            />

                            <Sidenavcontent 
                            title="Programs & Features"
                            one="Gift Cards"
                            two="Amazon live"
                            three="International Shopping" 
                            />

                            <Sidenavcontent 
                            title="Digital Content & Devices"
                            one="Amazon Music"
                            two="Kindle E-readers & books"
                            three="Amazon Appstore" 
                            />   
                          </div>
                        <span onClick={()=> setsidebar(false)} className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300' 
                        ><CloseIcon/></span>
                     </div>
                </div>
            )
         }
    </div>
  )
}

export default Headerbottom
