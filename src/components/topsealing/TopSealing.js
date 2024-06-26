import React, { useEffect, useState } from 'react'
import "./TopSealing.css"
import CardFiliter from '../card/CardFiliter';
import TopSellingItem from './TopSellingItem';
function TopSealing() {
    const [items, setItems]= useState([]);
    const [filter, setFilter]= useState('Today');
    const handleFilterChange= filter=>{
        setFilter(filter)
    }


    useEffect(()=>{
        fetch("http://localhost:4000/topselling")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setItems(data);
        })
    })
  return (
    <div className='card top-selling overflow-auto'>
        <CardFiliter filterChange={handleFilterChange} />

        <div className='card-body pb-0'>
            <h5 className='card-title'>
                Top Selling <span> | {filter}</span>
            </h5>

            <table className='table table-borderless'>
                <thead className='table-light'>
                    <tr>
                        <th scope='col'>Preview</th>
                        <th scope='col'>Product</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Solid</th>
                        <th scope='col'>Revenue</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        items && 
                        items.length >0 &&
                        items.map(item=><TopSellingItem key={item._id} item={item} />)
                    }
                </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default TopSealing
