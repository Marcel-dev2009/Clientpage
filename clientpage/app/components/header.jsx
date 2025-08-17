'use client'
import Link from 'next/link'
import styles from './style.module.css'
import Image from 'next/image'
import Logo from '../../public/Jevinik logo.jpg'
import Searchbar from './Searchbar'
import {motion} from 'framer-motion'
import Theme from './Theme'
import SideBar from './sideBar'
import { Button } from '@/components/ui/button'
export default function Header() {
  return (
    <>
    <div className='sticky z-[1000]'>
       <motion.nav
       className={`flex bg-zinc-200 border-b h-20 border-b-white/15 p-4 ${styles.header} sticky z-10 transition-all duration-100
        dark:bg-black `}>
          
        <span className='flex'>
        <div>
          <Link href="#"> <Image src={Logo} alt='Jevinik' className='w-8 h-8 mt-1 rounded-lg fixed md:static dark:bg-black'/></Link>
        </div>
          <ul className=' hidden md:flex gap-4 px-8 py-2 border-r border-r-gray-400 whitespace-nowrap'> 
           <Link href={'/'} target='_blank'>Home</Link>      
           <Link href={'/Menu'} target='_blank'>Menu</Link>      
           <Link href={'/Contact'} target='_blank'>Contact us</Link>      
          </ul>
        </span> {/* Menu Nav */}
         <div className='flex justify-between'>
         <div className=' ml-10 md:ml-24 mt-2 absolute'>
         <Searchbar/>
         </div> {/* Seaarch Div */}
          <div>
           <span className='md:block'><Theme/></span>
           <Button className={`${styles.button} absolute right-4 top-8 hidden md:block text-center`} variant='secondary' asChild>
             <Link href='/Login'>Sign In</Link>
           </Button>
          <div className=' sm:block md:hidden'><SideBar/></div>
          </div>
         </div>
      </motion.nav>   
    </div>
   </>
  )
}