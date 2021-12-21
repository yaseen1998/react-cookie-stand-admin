import React, { useState } from 'react';
import ReportTable from './ReportTable';
const CreateForm = (props)=>{
    const [location, setLocation] = useState('');
    const [miniumum, setminiumum] = useState('');
    const [maximum, setmaximum] = useState('');
    const [average, setaverage] = useState('');
    const [result, setresult] = useState([]);
    const [show, setshow] = useState(false);
    
    const handlelsubmit = (e)=>{
      e.preventDefault();
      let answer = {
        locatin : location,
        minimum : miniumum,
        maximum : maximum ,
        average : average
      }
      setresult([answer])
      setshow(true)
    }
    return(
        <>
        <section className='absolute h-40 bg-emerald-300 w-fit top-1/4 left-1/4'>
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
        <input type="submit" value="Submit" className='w-40 ml-5 cursor-pointer bg-emerald-500' />
        </div>
      </form>
      </section>
        <ReportTable result ={result} show={show}/>
    </>
    )
}
export default CreateForm