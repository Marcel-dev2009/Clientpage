'use client'
import {Search , X} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence , motion } from 'framer-motion';
export default function Searchbar() {
  const [showInput  , setShowInput] = useState(false);   
  const [query , setQuery] = useState('') 
  const inputRef = useRef();
  useEffect(() => {
   const handleKeydown = (e) => {
    if (e.key && e.key === 'k'){
     e.preventDefault();
     setShowInput(true);
     return;     
    }
    if(showInput && (e.key === 'Escape')) {
      setShowInput(false);     
    }
   };
   document.addEventListener('keydown' , handleKeydown);
  } , [showInput]);    
  return (
    <>
     <div>
       <AnimatePresence mode='wait'>
         {!showInput ? (
          <motion.button 
          key="search-button"
          initial={{opacity : 0 , scale:0.8}}
          animate={{opacity : 1 , scale : 1}}
          exit={{opacity :0 , scale:0.8}}
          transition={{duration :0.2}}
          onClick={() => setShowInput(true)}
          className='p-2 rounded-full transition-all duration-200 text-black active:scale-95 focus:outline-none'
          >
         <Search className='w-4 h-3 md:w-5 md:h-5 dark:text-white'/>
          </motion.button>
         ) : (
          <motion.div
          key="search-input"
          initial={{opacity : 0, width : 0}}
          animate={{opacity : 1 , width : 'auto'}}
          exit={{opacity : 0 , width : 0}}
          transition={{duration : 0.3 , ease: 'easeOut'}}
          className='flex items-center sticky z-10'
          >
           <div className='relative'>
            <motion.input
         /*    onKeyDown={onKeydown} */
            ref={inputRef}
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search Categories and foods..'
             initial={{width : 0}}
             animate={{width : '500px'}}
             transition={{duration : 0.4 , ease: 'easeOut'}}
             className='pl-10 pr-10 py-2 rounded-md border-2 outline-none transition-all duration-200 border-gray-500 text-black
             w-full max-w-[280px] sm:max-w-[200px] md:max-w-[360px] placeholder:text-xs dark:placeholder:text-white'
            >

            </motion.input>
            <Search className='absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400'/>
           </div>
           <button type='button'
           onClick={() => {setShowInput(false)
            setQuery('')
           }}
           className='absolute right-2 top-6 transform -translate-y-1/2
           p-1 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 bg-gray-300'
           >
            <X className='w-4 h-4'/>
           </button>
          </motion.div>
         )}
       </AnimatePresence>
     </div>
    </>
  )
}