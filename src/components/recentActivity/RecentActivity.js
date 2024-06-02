import React, { useEffect, useState } from 'react'
import RecentActivityItem from './RecentActivityItem'
import CardFiliter from '../card/CardFiliter'
import "./RecentActivity.css"

function RecentActivity() {
    const [items, setItems] =useState([]);
    const [filter, setFilter]= useState('Today');
    const handleFilterChange= filter=>{
        setFilter(filter)
    }

    useEffect(()=>{
        fetch("http://localhost:4000/recentactiviy")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setItems(data);
        })
    })
  return (
    <div className='card'>
        <CardFiliter filterChange={handleFilterChange}/>
        
        <div className='card-body'>
            <h5 className='card-title'>
                Recent Activity <span> |{filter}</span>
            </h5>

            <div className='activity'>
                {
                    items &&
                    items.length >0 &&
                    items.map(item => (
                        <RecentActivityItem key={item._id} item={item} />
                    ))
                }

            </div>

        </div>
      
    </div>
  )
}

export default RecentActivity
