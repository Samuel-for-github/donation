import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json'
import {useTypewriter, Cursor} from 'react-simple-typewriter'; 
const Loader = () => {

    const [text] = useTypewriter({
        words: ['Help Us By Donating These Talented People'],
        typeSpeed: 55
    }) 

  return (
    <div className='h-screen flex items-center flex-col'>
       <h1 className="font-bold text-blue-500 text-3xl">{text} <Cursor/></h1>
      
       <div className='w-[720px]'>
       {/* <Lottie animationData={animationData} /> */}
       </div>
     
    </div>
  )
}

export default Loader