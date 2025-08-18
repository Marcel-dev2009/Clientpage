'use client'
import Image from 'next/image'
import fish from '../../public/fish.png'
import cow from '../../public/cow.png'
import goat from '../../public/goat.png'
import Footer from './footer'
import styles from './style.module.css';
import white from '../../public/white.png'
import Logo from '../../public/Jevinik logo.jpg'
import jellof from '../../public/jellof.png'
import beef from '../../public/beef.png'
import Link from 'next/link'
import oha from '../../public/oha.png'
import semo from '../../public/semolina.png'
import owerri from '../../public/owerri.png'
import dynamic from 'next/dynamic'
import amala from '../../public/amala.png'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Type from './Type'
import { useState , useEffect} from 'react'
const Typer = dynamic(() => import('./TypingEffect.jsx') , {ssr: false})
export default function Body() {
  const win = typeof window !== "undefined" ? window   : undefined;
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
      <div className="flex flex-col md:flex-row md:gap-[20rem]">

      <div className='p-10'>
         <div>
         <img src="/back.svg" alt="Back" className='absolute top-0 left-0 md:top-0 md:w-[32rem]'/>
         <motion.h1  initial={{opacity : 0 , top:0}} animate={{opacity : 1 , top:'14rem'}} transition={{duration : 5 , ease:'easeIn' , type:'spring', stiffness:100, damping:10 , mass:1}}
         className=' target absolute left-[6.5rem] md:left-[6.5rem] md:top-[13rem] top-[12rem] text-2xl md:text-4xl text-shadow-lg'>Simply Delicious</motion.h1>
         </div>
           <div>
           <motion.h2 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration: 5}}
            className=' text-shadow-md text-[1.5rem] md:text-3xl font-light mt-[13rem] md:mt-[19rem] mb-6'>Jevnik Restaurant..</motion.h2>
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
      <section className='overflow-x-hidden'>
            <div className='grid place-items-center'>
               <h1 className=' target text-[1.5rem] md:text-4xl text-shadow-lg mb-4'>Our Delicious Menu</h1>
            </div>
            <div className={`border border-white/15 ${styles.container} shadow-2xs mb-2`}>
              <div className='border-b border-b-white/15 rounded-full mb-4'>
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
                        <Link href='/Menu/semolina' target='_blank' className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> <br /> {/* SemoLina end */}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={amala} alt='amala' loading='lazy' className='w-[300px] h-[150px] md:w-[200px] transform -translate-x-[6.4rem]'/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`md:mt-7 md:text-[1.5rem] md:mb-2 border-b rounded-full w-fit px-6 transform translate-y-[6rem] translate-x-[3rem] md:translate-x-[-50rem] md:-translate-y-[0.5rem]
                        `}>Amala</h2>
                       <p className={`transform translate-x-[8rem] translate-y-[5rem] md:-translate-x-[52rem] md:translate-y-0 mt-10 ${Narrow ? 'whitespace-nowrap' : 'whitespace-normal'}  `}>
                       {Narrow ? '  Rich, dark, and hearty meal.' : '  Rich, dark, and hearty. A traditional Nigerian dish waiting to elevate your dining experience.'} 
                       </p> <br />
                       <Button asChild className={`transform w-[6rem] translate-x-[19rem] -translate-y-[2.6rem] md:-translate-x-0 mt-6`}>
                        <Link href='/Menu/amala'target='_blank' className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div>
                    <div className='grid place-content-center mb-7 py-4 animate-bounce'>
                      <Button asChild>
                        <Link href='/Menu'>Click to View our Full Menu</Link>
                      </Button>
                      
                    </div>
                 </div> {/*  food menu end */}

               </div>{/*  First content end */}

                 {/* NEW Category */}
                 <div className={`border border-white/15  ${styles.container} shadow-2xs`}>
                 <div className='border-b border-b-white/15 rounded-full mb-10'>
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
                        <Link href='/Menu/owerri' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Owerri end */} <br />

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={oha} alt='oha soup' loading='lazy' className='w-[150px] mt-14 h-[150px] md:w-[200px] transform -translate-x-[14rem]
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
                        <Link href='/Menu/oha' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* Oha end */}
                 
                    <div className='grid place-content-center mb-7 py-4 animate-bounce'>
                      <Button asChild>
                        <Link href='/Menu'>Click to View our Full Menu</Link>
                      </Button>
                      
                    </div>
                 </div>
                 </div>
              </div> <br />
              {/* Proteins */}
                 <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6 mb-4`}>
                 <div className='border-b border-b-white/15 rounded-full mb-4'>
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
                        <Link href='/Menu/beef' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Beef end */} 

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={fish} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? '-translate-x-[15rem]' : ''}`}/>
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-7 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem]'} `}>
                       Fresh Fish</h2>
                       <p className={`transform  mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[55rem]'}`}>
                       {Narrow ? (<h2>Fresh, succulent fish  <br /> for the finsest flavour</h2>) : (<h2>Fresh, succulent fish, sourced daily for the finest flavor and delicate texture.</h2>)}
                       </p>
                       <Button asChild className={`transform mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[52rem]' : '-translate-x-[12rem]'}`}>
                        <Link href='/Menu/fish' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* fish end */}
                 
                    <div className='grid place-content-center mb-7 py-4 animate-bounce'>
                      <Button asChild>
                        <Link href='/Menu'>Click to View our Full Menu</Link>
                      </Button>
                      
                    </div>
                 </div>
                 </div>
              </div> <br />
              {/* Rice  */}
              <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6`}>
                 <div className='border-b border-b-white/15 rounded-full'> {/* Styles here */}
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
                        <Link href='/Menu/jellof' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*Jellof*/}

                    <div className='flex flex-row-reverse gap-[2rem]'>
                    <Image src={white} alt='amala' loading='lazy' className={` w-[150px] h-[150px] mt-14 md:w-[200px] transform ${Narrow ? "-translate-x-[15rem]" : "-translate-x-[4rem]"} `}/> {/*  Revoke ml later */}
                       <div className={`${styles.desc}`}>
                       <h2 className={`mt-4 md:text-[1.5rem] mb-2 border-b rounded-full w-fit transform px-6 ${Narrow ? 'translate-x-[15rem]' :''}`}>
                       White Rice</h2>
                       <p className={`transform mt-10 ${Narrow ? 'translate-x-[10rem]' : '-translate-x-[50rem] '}`}>
                        {Narrow ? (<h2 className='whitespace-nowrap transform translate-x-[2rem]'>A timeless staple, perfectly <br /> cooked to fluffy perfection</h2>) : (<h2> A timeless staple, perfectly cooked to fluffy perfection, offering a versatile base for your  <br />favorite sauces and culinary creations.</h2>)}
                       </p>
                       <Button asChild className={`transform  mt-6 ${styles.menuButtonrev} ${Narrow ? 'translate-x-[55rem]' : '-translate-x-[5rem]' }`}>
                        <Link href='/Menu/white' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/*  white end */}
                 
                    <div className='grid place-content-center mb-7 py-4 animate-bounce'>
                      <Button asChild>
                        <Link href='/Menu'>Click to View our Full Menu</Link>
                      </Button>
                    </div>
                 </div>
                 </div>
              </div> <br />
              {/* Pepper Soup */}
              <div className={`border border-white/15 ${styles.container} shadow-2xs mt-6 mb-10`}>
                 <div className='border-b border-b-white/15 rounded-full'> {/* Styles here */}
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
                        <Link href='/Menu/goat' target='_blank'  className='px-6'>Learn More</Link>
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
                        <Link href='/Menu/cow' target='_blank'  className='px-6'>Learn More</Link>
                       </Button>
                       </div>
                    </div> {/* cow leg pepper soup */}
                 
                    <div className='grid place-content-center mb-7 py-4 animate-bounce'>
                      <Button asChild>
                        <Link href='/Menu'>Click to View our Full Menu</Link>
                      </Button>
                    </div>
                 </div>
                 </div>
              </div> <br />
            </div>
        </section> <br />
        <footer>
           <Footer/> 
        </footer>
     </>
  )
}