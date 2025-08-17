import styles from './style.module.css'
export default function Footer() {
  return (
    <>
    <div className={`border border-white/15  ${styles.container} shadow-2xs mb-2`}>
              <div className='m-4'>
                <h2 className='border-b dark:border-b-white/15 border-b-black rounded-md w-fit py-2 text-[1rem] md:text-[2rem]'>Opening Hours</h2>
              </div>
              <div className='flex border-b dark:border-b-white/15 border-b-black rounded-md justify-between px-6 py-2'>
               <h3 className="text-[1rem] md:text-[1.2rem]">  Jevinik Afrika</h3>
               <h4 className="text-[1rem] md:text-[1.2rem]">Mon - Sat 09:00 am - 10:00 pm</h4>
              </div> <br />
              <div className='flex border-b dark:border-b-white/15 border-b-black rounded-md justify-between px-6 py-2 text-[1rem] md:text-[1.2rem]'>
              <h2>Jevinik Chinese </h2>
              <h4>Tue - Sun 11:00 am - 10:00 pm</h4>
              </div>
              <div className='grid place-content-center py-2 text-[1rem] md:text-[1.2rem]'>
                <h1 className='text-[1.4rem] md:text-2xl'> &copy; Developed By Marcel</h1>
                <pre>Meeeh this site is cool init</pre>
              </div>
            </div>
    </>
  )
}