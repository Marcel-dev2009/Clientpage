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
    <div>
       <motion.nav
       className={`flex bg-zinc-200 border-b h-20 border-b-white/15 p-4 ${styles.header} sticky z-10 transition-all duration-100
        dark:bg-black `}>
          
        <span className='flex'>
        <div>
          <Link href="#"> <Image src={Logo} alt='Jevinik' className='w-8 h-8 mt-1 rounded-lg fixed md:static dark:bg-black'/></Link>
        </div>
          <ul className=' hidden md:flex gap-4 px-8 py-2 border-r border-r-gray-400'> 
           <Link href={'/'}>Home</Link>      
           <Link href={'/'}>About</Link>      
           <Link href={'/'}>Contact us</Link>      
          </ul>
        </span> {/* Menu Nav */}
         <div className='flex justify-between'>
         <div className=' ml-10 md:ml-24 mt-2'>
         <Searchbar/>
         </div> {/* Seaarch Div */}
          <div>
           <span className='md:block'><Theme/></span>
           <Link href='/'>
           <Button className={`${styles.button} absolute right-4 top-8 hidden md:block `} variant='secondary'>Login</Button>
           </Link>
          <div className=' sm:block md:hidden'><SideBar/></div>
          </div>
         </div>
      </motion.nav>   
    </div>
   </>
  )
}