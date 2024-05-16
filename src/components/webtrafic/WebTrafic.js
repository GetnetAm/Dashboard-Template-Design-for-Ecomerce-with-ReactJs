import React, { useState } from 'react'
import CardFiliter from '../card/CardFiliter'
import WebTraficChart from './WebTraficChart';

function WebTrafic() {
    const [filter, setFilter]= useState("Today");
    const handleFilterChange= filter=>{
        setFilter(filter);
    }
  return (
    <div className='card'>
        <CardFiliter filterChange={handleFilterChange} />
        <div className='card-body pb-0'>
            <h5 className='card-title'>
                Website Traffic <span> | {filter}</span>

            </h5>
            <WebTraficChart />

        </div>
      
    </div>
  )
}

export default WebTrafic
