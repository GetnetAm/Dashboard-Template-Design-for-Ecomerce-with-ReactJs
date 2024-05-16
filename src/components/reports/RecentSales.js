import React, { useEffect, useState } from 'react'
import CardFiliter from '../card/CardFiliter'
import RecentSalesTable from './RecentSalesTable'


function RecentSales() {
    const [items, setItems]=useState([]);
    const [filter, setFilter]= useState("Today");
    const handleFilterChange= filter=>{
        setFilter(filter);
    };
    useEffect(()=>{
        fetch("http://localhost:4000/recentsales")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setItems(data);
        })
    })
  return (
    <div className='card recent-sales overflow-auto'>
        <CardFiliter filterChange={handleFilterChange} />
        <div className='card-body'>
            <h5 className='card-title'>
                Recent Sales <span> | {filter}</span>

            </h5>

            <RecentSalesTable items={items}/>

            

        </div>
      
    </div>
  )
}

export default RecentSales
