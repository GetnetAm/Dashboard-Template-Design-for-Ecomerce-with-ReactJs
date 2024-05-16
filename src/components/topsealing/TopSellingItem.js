import React from 'react'

function TopSellingItem({item}) {
  return (
    <tr>
        <th scope='row'>
            <a href='/'>
                <img src={item.preview} alt=''/>

            </a>

        </th>

        <td>
            <a href='/' className='text-primary fw-bold'>
                {item.name}
            </a>
        </td>

        <td>${item.price}</td>
        <td className='fw-bold'>{item.sold}</td>
        <td>${(item.price * item.sold).toLocaleString()}</td>
      
    </tr>
  )
}

export default TopSellingItem
