import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:8081/items");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllItems();
  }, []);

  console.log(items);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/items/${id}`);
      alert("Item Deleted!");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const itemSearch = (item) => {
    return search.toLowerCase() === ''
    ? item
    : item.item_id.toString().toLowerCase().includes(search) || item.item_name.toLowerCase().includes(search) || item.item_serial.toLowerCase().includes(search);
  }

  return (
    <div className="container-fluid">
    <h2 className='w-100 d-flex justify-content-center p-3'>Items Table</h2>
        <div className='row'>
            <div className='col-md-12'>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div className="mb-3 mt-3">
                        <p><Link to="/inventory/item_add" className="btn btn-success">Add New Item</Link></p>
                      </div>
                    </td>
                    <td>
                      <div className="mb-3 mt-3">
                        <input type="text" className="form-control" placeholder="Search by ID, Name, or Serial#" onChange={handleChangeSearch} />
                     </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Serial#</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Purchase Date</th>
                    <th>Cost</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.filter(itemSearch).map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.item_id} </td>
                                <td>{item.item_name} </td>
                                <td>{item.item_serial} </td>
                                <td>{item.item_quantity} </td>
                                <td>{item.item_desc} </td>
                                <td>{item.item_remarks} </td>
                                <td>{item.item_buy_date} </td>
                                <td>{item.item_buy_cost} </td>
                                <td>{item.dept_name} </td>
                                <td>
                                    <Link to={`/inventory/item_view/${item.item_id}`} className="btn btn-success mx-1 my-1">View</Link>
                                    <Link to={`/inventory/item_edit/${item.item_id}`} className="btn btn-info mx-1 my-1">Edit</Link>
                                    <button onClick={()=>handleDelete(item.item_id)} className="btn btn-danger mx-1 my-1">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    </div>
  );
}

export default Inventory