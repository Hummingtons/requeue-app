import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//mergeing Sidebar Component, Inventory.jsx, Login.jsx and DashboardAdmin.jsx
function Login() {
    const [values, setValues] = useState({
        user_idnum: '',
        user_password: ''
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data === "Success") {
                navigate('/inventory');
            }
            else {
                alert("Account does not exist.");
            }
        })
        .catch(err => console.log(err));
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <input type="number" placeholder='ID Number' id="login_idnum" name='user_idnum' value={values.user_idnum} onChange={handleInput} className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <input type="password" placeholder='Password' name='user_password' value={values.user_password} onChange={handleInput} className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login