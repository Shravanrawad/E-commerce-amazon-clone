import React from 'react'

function Footerlist({title, listitems}) {
  return (
    <div className='w-full'>
        <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
         <ul className='flex flex-col gap-2 font-bodyFont'>
         {
             listitems.map((items) => items.listdata.map((data, i) => (
                 <li key={i}>{data}</li>
             )))
         }
        </ul>
    </div>
  )
}

export default Footerlist
