import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, Link} from "react-router-dom";

const InventoryItemView = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:8081/items/"+id)
        .then(res => {
            console.log(res)
            setItem(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="container">
        <div className='row'>
        <div className='col-md-12'>
        <h1>Item Details</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div className="m-2">
                                ID: {item.item_id}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Name: {item.item_name}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Serial#: {item.item_serial}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Quantity: {item.item_quantity}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="m-2">
                                Remarks: {item.item_remarks}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Purchase Date: {item.item_buy_date}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Cost: {item.item_buy_cost}
                            </div>
                        </td>
                        <td>
                            <div className="m-2">
                                Department: {item.dept_name}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="m-2">
                                Description: {item.item_desc}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to="/inventory">Back</Link>
            </div>
      </div>
      </div>
    </div>
  )
}

export default InventoryItemView