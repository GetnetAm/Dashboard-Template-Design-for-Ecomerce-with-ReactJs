import React, { useState } from 'react'
import CardFiliter from '../card/CardFiliter'
import BudgetChart from './BudgetChart'

function BudgetReport() {
    const [filter, setFilter]= useState('Today');
    const handleFilterChange= filter=>{
        setFilter(filter);
    }
  return (
    <div className='card'>
        <CardFiliter filterChange={handleFilterChange} />
        <div className='card-body pb-0'>
            <h5 className='card-title'>
                Budget Report <span> | {filter}</span>

            </h5>
            <BudgetChart />

        </div>
      
    </div>
  )
}

export default BudgetReport
