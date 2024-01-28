import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {niosh, noah} from '../assets/index'
const Home = () => {

  useEffect(() => {
    AOS.init();
  
  }, [])
  

 

  
    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
       
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  

    const textToCopy = "7620629160@yesg"

  return (
    <>
    <h1 className='flex text-[50px] font-extrabold text-emerald-400'>This website was created to help my fellow bros</h1>     
    <div data-aos="fade-right" className='flex flex-col flex-wrap items-start mt-36 gap-5'>
    <h2 className="text-neutral-600">Niosh Fernandes, Sound Engineer</h2>
    <p className="italic">"I need donation for headphones"</p>
     <img src={niosh}alt="" />
    </div>

    <div data-aos="fade-left" className='flex flex-col flex-wrap items-end mt-36 gap-5'>
    <h2 className="text-neutral-600">Noah Fernandes, Artist</h2>
    <p className="italic">"I need donation for apple I Pad"</p>
     <img src={noah}alt="" />
    </div>
         <div data-aos="zoom-in-up" className='flex flex-col gap-4'>
         <div  className='mt-36 bg-slate-600 p-5 rounded-md' >
          <h2 className='text-2xl'>How to Donate</h2>
         </div>
         <div className="bg-slate-500 rounded-md">
          <h3>Copy the following UPI address and pay</h3>
          <div className='flex justify-center gap-4 py-3'>
          <p className='font-bold text-xl'>{textToCopy}</p>
          <button className='bg-orange-300 rounded p-1 font-semibold active:bg-orange-700 after:bg-orange-600' onClick={handleCopyClick}>Copy</button>
          </div>
         
         </div>
         </div>
   

    </>
  )
}

export default Home