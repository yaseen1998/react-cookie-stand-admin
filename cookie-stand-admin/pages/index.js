import Head from 'next/head'
import React, { useState } from 'react';
export default function Home() {
  const [location, setLocation] = useState('');
  const [miniumum, setminiumum] = useState('');
  const [maximum, setmaximum] = useState('');
  const [average, setaverage] = useState('');
  const [result, setresult] = useState([]);
  
  const handlelsubmit = (e)=>{
    e.preventDefault();
    let answer = {
      locatin : location,
      minimum : miniumum,
      maximum : maximum ,
      average : average
    }
    setresult([answer,...result])
    console.log(result);
  }
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='bg-emerald-500 h-12'>
        <nav>
          <div className='p-3 text-lg font-medium'> 
          <h1 >Cookie Stand Admin</h1>
          </div>
        </nav>
      </header>
      <main className="relative h-screen">
        <section className='bg-emerald-300 h-40 w-fit absolute top-1/4 left-1/4'>
          <h1 className='text-center'>Create Cookie Stand</h1>
        <form onSubmit={handlelsubmit}>
        <div className='h-12 pl-5 '>
        <label for="setlocation"  >Location</label>
        <input type="text" name="setlocation"  className='w-11/12' onChange={(e) => setLocation(e.target.value)}/>
        </div>
          <div className='flex pl-5 pr-5' >
          
          <div className='flex flex-col'>
        <label for="fname"  >Minimum customer Per Hour</label>
        <input type="text" name="fname"  onChange={(e) => setminiumum(e.target.value)}/>
        </div>
        <div className='flex flex-col ml-5'>
        <label for="lname" >Mmaximum customer Per Hour</label>
        <input type="text"  name="lname" onChange={(e) => setmaximum(e.target.value)}/>
        </div>
        <div className='flex flex-col ml-5'>
        <label for="average" >Average Cookies per Sale</label>
        <input type="text"  name="average" onChange={(e) => setaverage(e.target.value)}/>
        </div>
        <input type="submit" value="Submit" className='bg-emerald-500 ml-5 w-40 cursor-pointer' />
        </div>
      </form>
       </section>
       <section className='absolute top-3/4 left-1/3'>
         <div>
         {
              result.map(answer =>{
                return (
                  <h2 className='border border-blue-600'> {'{'}"location" : "{answer.locatin}" , "miniumum" : {answer.minimum} 
                  , "maximum" : {answer.maximum} , "average" : {answer.average}{'}'} </h2>
                 
                )
              })
            }
         </div>
       </section>
      </main>

      <footer className='bg-emerald-500 h-12'>
      <div className='p-3 text-lg font-medium'> 
          <h1 >copy right yaseen</h1>
          </div>
      </footer>
    </div>
  )
}
