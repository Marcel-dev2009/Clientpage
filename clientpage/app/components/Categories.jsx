'use client'
import { motion } from "framer-motion"
import TypeIntro from "./TypeIntro"
import fish from '../../public/fish.png'
import cow from '../../public/cow.png'
import goat from '../../public/goat.png'
import Footer from './footer'
import yam from '../../public/yam.png'
import garri from "../../public/garri.png"
import { useState  , useEffect} from "react"
import jellof from '../../public/jellof.png'
import abak from '../../public/abak.png'
import bitter from '../../public/bitter.png'
import beef from '../../public/beef.png'
import Link from 'next/link'
import afang from '../../public/afang.png'
import Image from "next/image"
import stew from '../../public/stew.png'
import assortps from '../../public/assortps.png'
import oha from '../../public/oha.png'
import ogbono from '../../public/ogbono.png'
import semo from '../../public/semolina.png'
import goatm from '../../public/goatm.png'
import eba from '../../public/eba.png'
import dried from '../../public/dried.png'
import owerri from '../../public/owerri.png'
import assort from '../../public/assort.png'
import chicken from '../../public/chicken.png'
import editan from '../../public/editan.png'
import uziza from '../../public/uziza.png'
import cowm from '../../public/cowm.png'
import cole from '../../public/cole.png'
import stock from '../../public/stock.png'
import okra from "../../public/okra.png"
import coco from '../../public/coco.png'
import mama from '../../public/mama.png'
import fried from '../../public/fried.png' 
import ff from '../../public/ff.png'
import plant from '../../public/plant.png'
import moi from '../../public/moi.png'
import stockps from '../../public/stockps.png' 
import chickps from '../../public/chick.png' 
import dsp from '../../public/dsp.png'
import native from '../../public/native.png'
import beefps from '../../public/beefps.png'
import vegies from '../../public/vegies.png'
import egusi from '../../public/egusi.png'
import amala from '../../public/amala.png'
import styles from '../components/style.module.css'
import white from '../../public/white.png'
import { Button } from "@/components/ui/button"

export default function Categories() {
   const win = typeof window !== 'undefined' ? window : null;
  const useWidth = (threshold = 1080) => {
    const [Narrow , setIsNarrow] = useState(win ? win.innerWidth <= threshold : false)
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
   <div className="overflow-x-hidden">
    <div className="grid place-items-center mt-2 mb-[5rem]">
      <motion.h1
        initial={{opacity : 0 , top:0}}
         animate={{opacity : 1 , top:'8rem'}} 
         transition={{duration : 5 , ease:'easeIn' , type:'spring', stiffness:100, damping:10 , mass:1}}
       className=" absolute text-[1.4rem] md:text-2xl">Welcome to Our Full Menu Page</motion.h1>
       <TypeIntro/>
    </div>{/*  Welcome div */}
{/*     Menu div */}
<div className={`border border-white/15 ${styles.container} shadow-2xs mb-2`}>
              <div className='mb-4'>
                 <h2 className='md:text-2xl grid place-items-center mt-2 border-b border-b-gray-black p-4'>Swallows</h2>
                 <div> 
                    <div className='flex md:flex-row flex-col gap-[2rem]'>
                    <Image src={semo} alt='semolina' loading='lazy' className='w-[200px] transform translate-x-[6.4rem] md:transform md:translate-x-[8rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='md:mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6'>Semolina</h2>
                       <p className='md:-translate-x-[15rem] mt-10'>
                       Smooth, nourishing semolina delight. Your ideal partner for rich soups and stews
                       </p>
                       <Button asChild className={`transform -translate-x-[12rem] mt-6 ${styles.menuButton}`}>
                        <Link href='/Menu/semolina'  target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> <br /> {/* SemoLina end */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                      <Image src={amala} alt='amala' loading='lazy' className='w-[300px] h-[150px] md:w-[200px] transform -translate-x-[6.4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`md:mt-7 md:text-[1.5rem] md:mb-2 border-b rounded-full w-fit px-6 transform translate-y-[6rem] translate-x-[3rem] md:translate-x-[-50rem] md:-translate-y-[0.5rem]
                        `}>Amala</h2>
                       <p className={`transform translate-x-[8rem] translate-y-[5rem] md:-translate-x-[52rem] md:translate-y-0 mt-10 ${Narrow ? 'whitespace-nowrap' : 'whitespace-normal'} `}>
                       {Narrow ? '  Rich, dark, and hearty meal.' : '  Rich, dark, and hearty. A traditional Nigerian dish waiting to elevate your dining experience.'} 
                       </p> <br />
                       <Button asChild className={`transform w-[6rem] translate-x-[19rem] -translate-y-[2.6rem] md:-translate-x-0 mt-6`}>
                        <Link href='/Menu/amala' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div> <br />
                       

                    </div>

                    
                       <div className='flex md:flex-row flex-col gap-[2rem]'>
                       <Image src={yam} alt='semolina' loading='lazy' className='w-[200px] transform translate-x-[6.4rem] md:transform md:translate-x-[8rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='md:mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6'>Pounded Yam</h2>
                       <p className='md:-translate-x-[15rem] mt-10'>
                       Pure comfort, expertly pounded for a flawless pairing with rich sauces.
                       </p>
                       <Button asChild className={`transform -translate-x-[12rem] mt-6 ${styles.menuButton}`}>
                        <Link href='/Menu/yam'  target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> <br /> {/* Yam end */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                      <Image src={garri} alt='garri' loading='lazy' className='w-[300px] h-[150px] md:w-[200px] transform -translate-x-[6.4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`md:mt-7 md:text-[1.5rem] md:mb-2 border-b rounded-full w-fit px-6 transform translate-y-[7rem] translate-x-[10rem] md:translate-x-[-50rem] md:-translate-y-[0.5rem]
                        `}>Garri</h2>
                       <p className={`transform translate-x-[10rem] translate-y-[7rem] md:-translate-x-[52rem] md:translate-y-0 mt-10 ${Narrow ? 'whitespace-nowrap' : 'whitespace-normal'} `}>
                       {Narrow ? '  Authentic west african cusine.' : 'Crisp and satisfying, the perfect side for a taste of authentic West African cuisin.'} 
                       </p> <br />
                       <Button asChild className={`transform w-[6rem] translate-x-[19rem] -translate-y-[1rem] md:-translate-x-0 mt-6`}>
                        <Link href='/Menu/garri'  target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div> <br />
                    </div>
                    <div className='flex md:flex-row flex-col gap-[2rem]'>
                    <Image src={eba} alt='semolina' loading='lazy' className='w-[200px] transform translate-x-[6.4rem] md:transform md:translate-x-[8rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='md:mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6'>Eba</h2>
                       <p className='md:-translate-x-[20rem] mt-10'>
                       It is known for promoting heart health, aiding digestion, and providing a sustained release of energy.
                       </p>
                       <Button asChild className={`transform -translate-x-[12rem] mt-6 ${styles.menuButton}`}>
                        <Link href='/Menu/eba'  target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> <br /> {/* Eba end */}
                 </div> {/*  food menu end */}
               </div>{/*  First content end */}


                 {/* NEW Category */}
                 <div className={`border border-white/15  ${styles.container} shadow-2xs`}>
                 <div className='mb-10'>
                 <h2 className='md:text-2xl grid place-items-center mt-2 border-b border-b-gray-black p-4'>Soups</h2>
                 <div> 
                    <div className='flex gap-[2rem]'>
                    <Image src={owerri} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[13rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Ofe Owerri Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[20rem]'}`}>
                         {Narrow ? 'A culinary journey to Owerri, Nigeria' : (<h2>
                           A culinary journey to Owerri, Nigeria, our soup blends assorted meats, <br />
                        local spices, and vegetables for an authentic and flavorful experience.
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/owerri' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Owerri end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={oha} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[12rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                     Oha Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? `Hamornizing the distinct flavour of oha leaves` : (<h2 >
                        A delicious Nigerian specialty, harmonizing the distinct flavor of <br />
                       oha leaves with assorted meats for a taste of culinary excellence.
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/oha' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Oha end */}
                   
                    <div className='flex gap-[2rem]'>
                    <Image src={afang} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[13rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Afang Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[10rem]'}`}>
                         {Narrow ? 'A culinary journey to Owerri, Nigeria' : (<h2>
                          A delectable Nigerian specialty featuring a vibrant mix of <br />vegetables and protein, a true delight for the senses.
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[8rem]'}`}>
                        <Link href='/Menu/afang' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* afang end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={ogbono} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[12rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                      Ogbono soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? `A luscious blend of ground ogbono seeds` : (<h2 >
                          A luscious blend of ground ogbono seeds, vegetables, and meats, <br/>
                           offering a delightful taste of Nigerian comfort in every bowl.. <br />
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/ogbono' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Ogbono end */}

                    <div className='flex gap-[2rem]'>
                    <Image src={bitter} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[12rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'> Bitterleaf soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[10rem]'}`}>
                         {Narrow ? 'The unique flavor of bitterleaf ' : (<h2>
                          A bold Nigerian classic, blending the richness of assorted <br/>
                           meats with the unique flavor of bitterleaf for an  <br/>
                           unforgettable culinary experience. <br/>
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[10rem]'}`}>
                        <Link href='/Menu/bitter' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Bitter end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={abak} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[13rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                     Abak Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? `Hamornizing the distinct flavour of oha leaves` : (<h2 >
                          A flavorful blend of Efik ingredients, with some periwinkle to keep you busy
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/abak' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Abak end */}

                    <div className='flex gap-[2rem]'>
                    <Image src={editan} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[13rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Editan Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[20rem]'}`}>
                         {Narrow ? 'A culinary journey to Owerri, Nigeria' : (<h2>
                          A harmonious blend of nutritious vegetables and assorted meats <br/>
                           with periwinkles, creating a flavorful and hearty Nigerian delicacy <br/>
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/editan' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Editan end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={okra} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[14rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                      Okra Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? `A delightful medley of fresh okra` : (<h2 >
                          A delightful medley of fresh okra, vegetables, and choice meats, <br />
                          creating a hearty and satisfying Nigerian dish
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/okra' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Okara end */}

                    <div className='flex gap-[2rem]'>
                    <Image src={egusi} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[13rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Egusi Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[20rem]'}`}>
                         {Narrow ? ' A delightful melange of ground melon seeds' : (<h2>
                          A delightful melange of ground melon seeds, vegetables, <br/>
                          and meats, offering a rich and savory taste of Nigerian cuisine. <br/>
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/egusi' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Egusi end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={uziza} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[12rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                    Uziza Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? ` Featuring the aromatic uziza leaves` : (<h2 >
                          A flavorful Nigerian creation featuring the aromatic uziza leaves, <br/>
                           complemented by a blend of spices, vegetables, <br/>
                           and meats for a memorable culinary experience. <br/>
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/uziza' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* uziza end */}

                    <div className='flex gap-[2rem]'>
                    <Image src={mama} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[13rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'> Mama's Delight Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[20rem]'}`}>
                         {Narrow ? 'A savory masterpiece crafted with love' : (<h2>
                          A savory masterpiece crafted with love, featuring a  <br/>
                          symphony of flavors that evoke the warmth of home-cooked goodness <br/>
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/mama' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Delight end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={oha} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[13rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 ${Narrow ? 'translate-x-[14rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                     Oha Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[56rem]'}`}>
                        {Narrow ? `Hamornizing the distinct flavour of oha leaves` : (<h2 >
                        A delicious Nigerian specialty, harmonizing the distinct flavor of <br />
                       oha leaves with assorted meats for a taste of culinary excellence.
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/oha' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Oha end */}

                    <div className='flex gap-[2rem]'>
                    <Image src={vegies} alt='owerri soup' loading='lazy' className=' w-[150px] h-[150px] md:w-[200px] transform translate-x-[12rem]
                     md:translate-x-[8rem] mt-[7rem] md:mt-14'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'> Vegetable Soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[10rem]' : '-translate-x-[20rem]'}`}>
                         {Narrow ? ' Featuring a symphony of flavors' : (<h2>
                          A savory masterpiece crafted with love,  <br/>
                          featuring a symphony of flavors that evoke the warmth of home-cooked goodness.
                         </h2>) }
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/vegies' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Vegetable end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={native} alt='native soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[12rem]
                    md:-translate-x-[4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap ${Narrow ? 'translate-x-[12rem] -translate-y-[2rem]' : '-translate-x-[50rem]'}`}>
                     Native Soup</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[50rem]'}`}>
                        {Narrow ? `Hamornizing the distinct flavour of oha leaves` : (<h2 >
                          A celebration of local flavors and culinary tradition, <br/> 
                          our native soup captures the essence of homegrown ingredients in every taste.
                        </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[10rem]'}`}>
                        <Link href='/Menu/native' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Native end */}

                 </div>
                 </div>
              </div> <br />
     
              {/* Proteins */}
                 <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6 mb-4`}>
                 <div className='mb-4'>
                 <h2 className='md:text-2xl grid place-items-center mt-2 border-b border-b-gray-black p-4'>Proteins</h2>
                 <div> 
                    <div className='flex gap-[2rem]'>
                    <Image src={beef} alt='semolina' loading='lazy' className='w-[150px] h-[150px] mt-20 ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-9'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6'>Beef</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[15rem]'}`}>
                      {Narrow ? (<h2 className='whitespace-nowrap'>Juicy, tender beef <br />with savory flavour</h2>) : (<h2>
                        Juicy, tender beef, perfectly seasoned and cooked to bring out its rich, <br /> savory flavor.
                      </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[34rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/beef' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Beef end */} 

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={fish} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? '-translate-x-[12rem]' : ''}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem]'} `}>
                       Fresh Fish</h2>
                       <p className={`transform  mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[55rem]'}`}>
                       {Narrow ? (<h2>Fresh, succulent fish  <br /> for the finsest flavour</h2>) : (<h2>Fresh, succulent fish, sourced daily for the finest flavor and delicate texture.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[12rem]'}`}>
                        <Link href='/Menu/fish' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* fish end */}
                 
                    <div className='flex gap-[2rem]'>
                    <Image src={dried} alt='semolina' loading='lazy' className='w-[150px] h-[150px] mt-20 ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-9'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6'>Dried fish</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[10rem]'}`}>
                      {Narrow ? (<h2 className='whitespace-nowrap'>Flavorful dried fish</h2>) : (<h2>
                        Flavorful dried fish, naturally preserved for a smoky,<br /> savory taste that enriches every dish.
                      </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[34rem]' : '-translate-x-[10rem]'}`}>
                        <Link href='/Menu/dried' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Dried end */}  {/* */}
                 
                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={assort} alt='assorted meat' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? '-translate-x-[12rem]' : '-translate-6'}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem]'} `}>
                       Assorted Meat</h2>
                       <p className={`transform  mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[60rem]'}`}>
                       {Narrow ? (<h2>Assorted meat is a mix of different beef <br/> and animal parts used for rich flavor.
       </h2>) : (<h2>Delicious assorted meat, a flavorful mix of tender beef, <br /> tripe, and other cuts, seasoned and cooked to perfection.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[12rem]'}`}>
                        <Link href='/Menu/assort' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Assorted end */} {/* */}

                    <div className='flex gap-[2rem]'>
                    <Image src={chicken} alt='semolina' loading='lazy' className='w-[150px] h-[150px] mt-20 ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-9'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transform -translate-x-6'>Chicken</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[18rem]'}`}>
                      {Narrow ? (<h2 className='whitespace-nowrap'>Juicy, tender Chicken <br />with savory flavour</h2>) : (<h2>
                        Juicy, tender Chicken, perfectly seasoned and cooked to bring out its rich, <br /> savory flavor.
                      </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[34rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/chicken' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Chicken end */} {/*  */} 

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={goatm} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? '-translate-x-[12rem]' : ''}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem]'} `}>
                       Goat Meat</h2>
                       <p className={`transform  mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[52rem]'}`}>
                       {Narrow ? (<h2>Fresh, succulent Goat meat  <br /> for the finsest flavour</h2>) : (<h2>Fresh, succulent Goat meat, sourced daily for the finest flavor and delicate texture.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[12rem]'}`}>
                        <Link href='/Menu/goatm' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* goatm end */} {/*  */}

                    <div className='flex gap-[2rem]'>
                    <Image src={cowm} alt='semolina' loading='lazy' className='w-[150px] h-[150px] mt-20 ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-9'/>
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transform -translate-x-10'>Cow Meat</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[15rem]'}`}>
                      {Narrow ? (<h2 className='whitespace-nowrap'>Juicy, tender beef <br />with savory flavour</h2>) : (<h2>
                        Juicy, tender beef, perfectly seasoned and cooked to bring out its rich, <br /> savory flavor.
                      </h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[34rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/cowm' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*cow end */} {/*  */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={stock} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? '-translate-x-[12rem]' : ''}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem]'} `}>
                       Stock Fish</h2>
                       <p className={`transform  mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[55rem]'}`}>
                       {Narrow ? (<h2>Fresh, succulent fish  <br /> for the finsest flavour</h2>) : (<h2>Fresh, succulent fish, sourced daily for the finest flavor and delicate texture.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[12rem]'}`}>
                        <Link href='/Menu/stock' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* stock end */} {/* i */}
                 </div>
                 </div>
              </div> <br />

              {/* Rice  */}
              <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6`}>
                 <div> {/* Styles here */}
                 <h2 className='md:text-2xl grid place-items-center mt-2 border-b border-b-gray-black p-4'>Rice and Sides</h2>
                 <div> 
                    <div className='flex gap-[2rem]'>
                    <Image src={jellof} alt='semolina' loading='lazy' className='w-[150px] mt-18 h-[150px] ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-6'/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Jellof Rice</h2>
                       <p className={`transform mt-10 ${Narrow ? '-translate-x-[15rem]' : '-translate-x-[24rem]'} `}>
                       {Narrow ? (<h2>A vibrant West African classic</h2>) : (<h2> A vibrant West African classic, our Jollof Rice is a fragrant and flavorful dish, perfectly <br />seasoned and cooked to perfection for a true taste of celebration. 1Ng - 0Gh</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[35rem] translate-y-2.5' : '-translate-x-[15rem]'}`}>
                        <Link href='/' className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Jellof*/}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={white} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? "-translate-x-[12rem]" : "-translate-x-[4rem]"} `}/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-4 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[15rem]' :''}`}>
                       White Rice</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem] '}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap transform translate-x-[2rem]'>A timeless staple, perfectly <br /> cooked to fluffy perfection</h2>) : (<h2> A timeless staple, perfectly cooked to fluffy perfection, offering a versatile base for your  <br />favorite sauces and culinary creations.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem]' : '-translate-x-[5rem]' }`}>
                        <Link href='/' className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*  white end */}
                   
                    <div className='flex gap-[2rem]'>
                    <Image src={cole} alt='semolina' loading='lazy' className='w-[150px] mt-18 h-[150px] ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-6'/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6  transform -translate-x-7 whitespace-nowrap'>Coleslaw</h2>
                       <p className={`transform mt-10 ${Narrow ? '-translate-x-[15rem]' : '-translate-x-[24rem]'} `}>
                       {Narrow ? (<h2>A delightful medley of shredded cabbagec</h2>) : (<h2> Crisp and refreshing, our coleslaw is a delightful medley of shredded cabbage <br /> and carrots tossed in a tangy dressing—a perfect, crunchy side for any meal</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[35rem] translate-y-2.5' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/cole' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Cole end*/}  {/* */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={coco} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? "-translate-x-[13rem]" : "-translate-x-[4rem]"} `}/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-4 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[15rem]' :'-translate-x-[50rem]'}`}>
                      Coconut Rice</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[55rem] '}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap transform translate-x-[2rem]'>A fragrant blend of rice <br /> cooked in coconut milk<br /> cooked to fluffy perfection</h2>) : (<h2> A tropical twist on a classic dish, our Coconut Rice is a <br />fragrant blend of rice cooked in coconut milk, creating a rich and <br />flavorful experience with every bite</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem]' : '-translate-x-[5rem]' }`}> 
                        <Link href='/Menu/coco' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*  coco end */} {/*  */}

                    <div className='flex gap-[2rem]'>
                    <Image src={plant} alt='semolina' loading='lazy' className='w-[150px] mt-18 h-[150px] ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-6'/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Fried Plantain</h2>
                       <p className={`transform mt-10 ${Narrow ? '-translate-x-[15rem]' : '-translate-x-[24rem]'} `}>
                       {Narrow ? (<h2>Our very own golden fried plantains</h2>) : (<h2> Savor the sweet and savory perfection of our golden fried plantains, <br/> a delightful side dish or snack that captures the essence of Caribbean and African cuisine.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[35rem] translate-y-2.5' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/plant' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*plantain*/} {/*  */} 

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={stew} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? "-translate-x-[14rem]" : "-translate-x-[4rem]"} `}/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-4 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[15rem]' :'-translate-x-[40rem]'}`}>
                      Stew</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem] '}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap transform translate-x-[2rem]'>A timeless staple, perfectly <br />A rich blend of aromatic spices </h2>) : (<h2> Our savory stew is a culinary masterpiece, featuring a rich blend of <br/> aromatic spices and slow-cooked goodness, elevating any dish it accompanies.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem]' : '-translate-x-[5rem]' }`}>
                        <Link href='/Menu/stew' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*  stew end */} {/*  */} 
 
                    <div className='flex gap-[2rem]'>
                    <Image src={moi} alt='semolina' loading='lazy' className='w-[150px] mt-18 h-[150px] ml-16 md:w-[200px] transform translate-x-[8rem] md:mt-6'/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className='mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap'>Moi - Moi</h2>
                       <p className={`transform mt-10 ${Narrow ? '-translate-x-[15rem]' : '-translate-x-[24rem]'} `}>
                       {Narrow ? (<h2>A steamed delicacy made from ground beans</h2>) : (<h2> A steamed delicacy made from ground beans, spices, and other flavorful ingredients, <br/> creating a savory and satisfying Nigerian delight.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[35rem] translate-y-2.5' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/moi' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Moi*/} {/* im*/}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={fried} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? "-translate-x-[13rem]" : "-translate-x-[4rem]"} `}/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-4 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[15rem]' :'-translate-x-[42rem]'}`}>
                       Fried Rice</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem] '}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap transform translate-x-[2rem]'>A timeless staple, perfectly <br />A delicious medley <br /> of fragrant rice</h2>) : (<h2> A delicious medley of fragrant rice, colorful vegetables, and savory <br /> seasonings, expertly stir-fried to perfection for a delightful culinary experience.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem]' : '-translate-x-[5rem]' }`}>
                        <Link href='/Menu/fried' target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*fried end */} {/* */}
                 </div>
                 </div>
              </div> <br />














              {/* Pepper Soup */}
              <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6 mb-10`}>
                 <div> {/* Styles here */}
                 <h2 className='md:text-2xl grid place-items-center mt-2 border-b border-b-gray-black p-4'>Pepper Soup</h2>
                 <div> 
                    <div className='flex gap-[2rem]'>
                    <Image src={goat} alt='semolina' loading='lazy' className=' w-[150px] h-[150px] mt-20 md:w-[200px] transform translate-x-[14rem] md:mt-6'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap ${Narrow ? '-translate-x-8' : ''}`}>Goat meat pepper soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[11rem]' : '-translate-x-[20rem]'}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap '>Spicy and aromatic <br /> goat meat pepper soup</h2>) : (<h2>  Spicy and aromatic goat meat pepper soup, slow-cooked with fresh herbs and <br /> bold African spices for a rich, comforting taste</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/' className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Goat meat pepper soup*/}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={cow} alt='amala' loading='lazy' className={`w-[150px] mt-18 h-[150px] md:w-[200px] transform  ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[2rem]'}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transfrom
                       ${Narrow ? 'whitespace-nowrap translate-x-[12rem]' : ' -translate-x-[45rem]'} `}>
                       Cowleg Pepper Soup</h2>
                       <p className={`transform mt-10  ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[45rem] '}`}>
                       {Narrow ? (<h2 className='whitespace-nowrap'>Hearty cow leg pepper <br /> soup <br /> with flavourful experience</h2>) : (<h2> Hearty cow leg pepper soup, simmered to perfection with traditional spices and herbs for a rich, <br /> flavorful experience.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem] ' : '-translate-x-[2rem] '}`}>
                        <Link href={`/`}   className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* cow leg pepper soup */}
                  
                    <div className='flex gap-[2rem]'>
                    <Image src={assortps} alt='semolina' loading='lazy' className=' w-[150px] h-[150px] mt-20 md:w-[200px] transform translate-x-[12rem] md:mt-6'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap ${Narrow ? '-translate-x-26' : '-translate-x-8'}`}>Assorted meat pepper soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[11rem]' : '-translate-x-[20rem]'}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap '>Spicy and aromatic <br /> goat meat pepper soup</h2>) : (<h2>  Spicy and aromatic goat meat pepper soup, slow-cooked with fresh herbs and <br /> bold African spices for a rich, comforting taste</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/assortps' target="_blank" className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Goat meat pepper soup*/}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={ff} alt='Fresh Fish Pepper soup' loading='lazy' className={`w-[150px] mt-18 h-[150px] md:w-[200px] transform  ${Narrow ? '-translate-x-[14rem]' : '-translate-x-[2rem]'}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transfrom
                       ${Narrow ? 'whitespace-nowrap translate-x-[12rem]' : ' -translate-x-[45rem]'} `}>
                      Fresh Fish Pepper Soup</h2>
                       <p className={`transform mt-10  ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[45rem] '}`}>
                       {Narrow ? (<h2 className='whitespace-nowrap'>Hearty Fresh fish pepper soup <br /> soup <br /> with flavourful experience</h2>) : (<h2> Hearty Fresh Fish pepper soup, simmered to perfection with traditional spices and herbs for a rich, <br /> flavorful experience.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem] ' : '-translate-x-[2rem] '}`}>
                        <Link href='/Menu/ff'  target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* cow leg pepper soup */} {/* ' */}

                    <div className='flex gap-[2rem]'>
                    <Image src={stockps} alt='semolina' loading='lazy' className=' w-[150px] h-[150px] mt-20 md:w-[200px] transform translate-x-[13rem] md:mt-6'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap ${Narrow ? '-translate-x-26' : ''}`}>Stock Fish pepper soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[11rem]' : '-translate-x-[20rem]'}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap '>Spicy and aromatic <br /> stock fish pepper soup</h2>) : (<h2>  Spicy and aromatic stock fish pepper soup, slow-cooked with fresh herbs and <br /> bold African spices for a rich, comforting taste</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/stockps'  target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Goat meat pepper soup*/} {/* */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={chickps} alt='amala' loading='lazy' className={`w-[150px] mt-18 h-[150px] md:w-[200px] transform  ${Narrow ? '-translate-x-[13rem]' : '-translate-x-[2rem]'}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transfrom
                       ${Narrow ? 'whitespace-nowrap translate-x-[12rem]' : ' -translate-x-[45rem]'} `}>
                      Chicken Pepper Soup</h2>
                       <p className={`transform mt-10  ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[45rem] '}`}>
                       {Narrow ? (<h2 className='whitespace-nowrap'>Hearty Chicken pepper <br /> soup <br /> with flavourful experience</h2>) : (<h2> Hearty Chicken pepper soup, simmered to perfection with traditional spices and herbs for a rich, <br /> flavorful experience.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem] ' : '-translate-x-[2rem] '}`}>
                        <Link href='/Menu/chickps'  target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* cow leg pepper soup */} {/* */}

                    <div className='flex gap-[2rem]'>
                    <Image src={dsp} alt='semolina' loading='lazy' className=' w-[150px] h-[150px] mt-20 md:w-[200px] transform translate-x-[14rem] md:mt-6'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 transform md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 whitespace-nowrap ${Narrow ? '-translate-x-26' : ''}`}>Dried Fish pepper soup</h2>
                       <p className={`transform  mt-10 ${Narrow ? '-translate-x-[11rem]' : '-translate-x-[20rem]'}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap '>smoky Nigerian soup made <br /> with dried fish<br /> goat meat pepper soup</h2>) : (<h2>  Dried Fish Pepper Soup is a spicy, smoky Nigerian soup made with dried fish.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButton} ${Narrow ? '-translate-x-[30rem]' : '-translate-x-[15rem]'}`}>
                        <Link href='/Menu/dsp'  target="_blank"  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Goat meat pepper soup*/} {/*  */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={beefps} alt='amala' loading='lazy' className={`w-[150px] mt-18 h-[150px] md:w-[200px] transform  ${Narrow ? '-translate-x-[12rem]' : '-translate-x-[2rem]'}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit px-6 transfrom
                       ${Narrow ? 'whitespace-nowrap translate-x-[12rem]' : ' -translate-x-[45rem]'} `}>
                       Beef Pepper Soup</h2>
                       <p className={`transform mt-10  ${Narrow ? 'translate-x-[12rem]' : '-translate-x-[45rem] '}`}>
                       {Narrow ? (<h2 className='whitespace-nowrap'>Beef Pepper Soup is a <br/> spicy Nigeria  soup made <br/> and aromatic spices.
                      </h2>) : (<h2> **Beef Pepper Soup** is a spicy Nigerian soup made with tender beef and aromatic spices.
                         </h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem] ' : '-translate-x-[2rem] '}`}>
                        <Link href='/Menu/beefps'  target="_blank"   className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* cow leg pepper soup */} {/* ' */}
                 </div>
                 </div>
              </div> <br />
              </div> <br />
              <div>
                  <Footer/>
                 </div>
   </div>
   </>
  )
}