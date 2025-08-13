'use client'
import Image from 'next/image'
import Logo from '../../public/Jevinik logo.jpg'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Type from './Type'
import { useState , useEffect} from 'react'
const Typer = dynamic(() => import('./TypingEffect.jsx') , {ssr: false})
export default function Body() {
  const useWidth = (threshold = 1080) => {
    const [Narrow , setIsNarrow] = useState(typeof window !== undefined ? window.innerWidth <= threshold : false)
    useEffect(() => {
     function onResize(){
       setIsNarrow(window.innerWidth<= threshold)
     }
     window.addEventListener('resize' , onResize);
     onResize();
     return () => window.removeEventListener('resize' , onResize);
    } , [threshold])
    return Narrow
   }
   const Narrow = useWidth(768);
  return (
     <>
      <div className="flex flex-col md:flex-row md:gap-[20rem]">

      <div className='p-10'>
         <div>
         <img src="/back.svg" alt="Back" className='absolute top-0 left-0 md:top-0 md:w-[32rem]'/>
         <motion.h1  initial={{opacity : 0 , top:0}} animate={{opacity : 1 , top:'14rem'}} transition={{duration : 5 , ease:'easeIn' , type:'spring', stiffness:100, damping:10 , mass:1}}
         className='absolute left-[6.5rem] md:left-[6.5rem] md:top-[13rem] top-[12rem] text-2xl md:text-4xl text-shadow-lg'>Simply Delicious</motion.h1>
         </div>
           <div>
           <motion.h2 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration: 5}}
            className='text-shadow-md text-[1.5rem] md:text-3xl font-light mt-[13rem] md:mt-[19rem] mb-6'>Jevnik Restaurant..</motion.h2>
           <div className='transform -translate-x-10 absolute'>
           {
            Narrow ? (<div className='ml-30'><Type/></div>) : (<div className='ml-20'><Typer/></div>)
           } 
           </div>
        </div>
        </div> 
        <div className='p-10 flex justify-center items-center'> 
          <Image src={Logo} alt='Jevnik Logo' loading='lazy'/>
        </div>
        
      </div>
     </>
  )
}