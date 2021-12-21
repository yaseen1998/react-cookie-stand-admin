import time from "../data"
import React, { useState } from 'react';
import { Result } from "postcss";

const ReportTable = (props)=>{
    let[data,setdata] = useState([])
    let [totalrow, settotalrow] = useState(0);
    let [totalcol, settotalcol] = useState(Array(15).fill(0));
    let{result,show}=props
    const randomnumber = (minimum,maximum,average,location)=>{
        let rand = []
        rand.push(location)
        let randomNumber
        for(let i = 0 ; i<14 ;i++){
            randomNumber = Math.floor(Math.floor(Math.random() * (maximum - minimum+ 1) + minimum) * average)
            rand.push (randomNumber)
            totalrow+=randomNumber
            totalcol[i] +=  randomNumber
        }
        totalcol[14] += totalrow
        rand.push(totalrow)
        data.push(rand)
        result.pop()
        console.log(totalcol)

    }
    
    return(
        <section className='absolute mt-10 top-2/4 left-1/4 bg-emerald-300'>
            {
            !show &&
            <h1>
            No Cookie Stands Available
            </h1>
            }
            {
            show &&
        <div>
        <table className='w-1/2 mx-auto my-4'>
          <thead>
              {
              time.map(data=>{
                  return(
                    <th className='border border-blue-600'>{data}</th>
                  )
              })
            }
          </thead>
          <tbody>
              {
                 
                  result.length > 0 && 
                   
                  randomnumber(parseInt(result[0].minimum),
                                    parseInt(result[0].maximum),
                                    parseInt(result[0].average),
                                    result[0].locatin
                                   )
            }
            {
                
                 data.map(results => {
                    return (
                        <tr>
                            {
                                results.map(answer=>{
                                    return(
                                    <td className='border border-blue-600'>{answer}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })}

                
                <tr>
                <td className='border border-blue-600'>Total</td>
                    
                   
                    {
                totalcol.map(answer=>{
                    return(
                        <td className='border border-blue-600'>{answer}</td>
                        )
                })
            }
                </tr>
            
          
          </tbody>
          </table>
        </div>
}
      </section>
        
    )
        
}
export default ReportTable