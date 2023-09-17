import React from 'react'
import { Button } from 'react-bootstrap'

export default function Item({item,decCount,incCount,handleRemove}) {

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td><Button variant="secondary" onClick={decCount}>-</Button></td>  
                <td>{item.quantity}</td>
                <td><Button onClick={incCount}>+</Button></td>
                <td><Button variant="danger" onClick={handleRemove}>Remove</Button></td>
                <td>₹{item.price}</td>
            </tr>
        </>
    )
}
