import React, { useState } from 'react';
import './Sidebar.css';
import {
    FaBars,
    FaBox,
    FaSignOutAlt
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: '/inventory',
            name: 'Inventory',
            icon:<FaBox/>
        },
        {
            path: '/',
            name: 'Log Out',
            icon:<FaSignOutAlt/>
        }
    ]
    return (
        <div className='container m-0 p-0'>
            <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
                <div className='top_section'>
                    <div className="icon"><FaBars onClick={toggle}/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className='link_text' onClick={toggle}>Menu</div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar