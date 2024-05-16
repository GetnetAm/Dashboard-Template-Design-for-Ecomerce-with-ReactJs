import React, { useState } from 'react'
import CardFiliter from '../card/CardFiliter'
import ReportCharts from './ReportCharts'

function Reports() {
    const [filter, setFilter] =useState('Today');
    const handleFilterChange=filter=>{
        setFilter(filter)
    }
  return (
    <div className='card'>
        <CardFiliter filterChange={handleFilterChange} />
        <div className='card-body'>
            <h5 className='card-title'>
                Reports <span>{filter}</span>
                <ReportCharts />

            </h5>

        </div>

    </div>
  )
}

export default Reports
