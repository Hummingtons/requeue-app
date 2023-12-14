import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const InventoryItemEdit = () => {
    const {id} = useParams();
    const [item, setItem] = useState({
        item_name: "",
        item_serial: '',
        item_quantity: '',
        item_desc: '',
        item_remarks: '',
        item_buy_date: '',
        item_buy_cost: '',
        dept_id: '',
    });

    const [departments, setDepartment] = useState([]);
 
    const location = useLocation();
    const navigate = useNavigate();
 
    const itemId = location.pathname.split("/")[3];
 
    const handleChange = (e) => {
        setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
    useEffect(() => {
        axios.get("http://localhost:8081/items/"+id)
        .then(res => {
            console.log(res)
            setItem(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
      const fetchAllDepartments = async () => {
        try {
          const res = await axios.get("http://localhost:8081/departments");
          setDepartment(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllDepartments();
    }, []);
 
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/items/${itemId}`, item);
            alert("Item Updated!");
            navigate("/inventory");
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div className="container-fluid">
        <div className="d-flex justify-content-start">
            <Link to="/inventory">Back</Link>
        </div>
        <h2 className='d-flex justify-content-center p-3'>Edit Item</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="mb-3 mt-3">
                        <label className="form-label">Item Name:</label>
                        <input type="text" className="form-control" id="item_name" placeholder="Enter Item Name" name="item_name" value={item.item_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Remarks:</label>
                        <input type="text" className="form-control" id="item_remarks" placeholder="Enter Remarks" name="item_remarks" value={item.item_remarks} onChange={handleChange} />
                </div>
              </td>
              <td>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Department:</label>
                        <select className="form-control" id="dept_id" name="dept_id" value={item.dept_id} onChange={handleChange}>
                          {
                            departments.map((department, i) => {
                              return (
                                <option value={department.dept_id} key={i}>{department.dept_name}</option>
                              )
                            })
                          }
                        </select>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Purchase Date:</label>
                        <input type="text" className="form-control" id="item_buy_date" placeholder="Enter Purchase Date" name="item_buy_date" value={item.item_buy_date} onChange={handleChange} />
                </div>
              </td>
              <td>
                <div className="mb-3 mt-3">
                        <label className="form-label">Quantity:</label>
                        <input type="number" className="form-control" id="item_quantity" placeholder="Enter Quantity" name="item_quantity" value={item.item_quantity} onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Cost:</label>
                        <input type="number" className="form-control" id="item_buy_cost" placeholder="Enter Cost" name="item_buy_cost" value={item.item_buy_cost} onChange={handleChange} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <tbody>
            <tr>
              <td>
                  <div className="mb-3 mt-3 align-text-top">
                        <label className="form-label">Description:</label>
                        <textarea className="form-control" id="item_desc" placeholder="Enter Item Description" name="item_desc" value={item.item_desc} onChange={handleChange} />
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
        </div>
    </div>
  )
}

export default InventoryItemEdit