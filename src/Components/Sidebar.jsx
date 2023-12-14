import React, { useState } from 'react';
import './Sidebar.css';
import {
    FaBars,
    FaTh,
    FaBox,
    FaDoorClosed,
    FaMailBulk,
    FaCalendarAlt,
    FaSignOutAlt
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../Images/unicore_logo_white.png';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: '/dashboard_admin',
            name: 'Dashboard',
            icon:<FaTh/>
        },
        {
            path: '/inventory',
            name: 'Inventory',
            icon:<FaBox/>
        },
        {
            path: '/rooms',
            name: 'Rooms',
            icon:<FaDoorClosed/>
        },
        {
            path: '/requests',
            name: 'Requests',
            icon:<FaMailBulk/>
        },
        {
            path: '/wschedules',
            name: 'Working Student Schedules',
            icon:<FaCalendarAlt/>
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
                    <img src={logo} alt='logo' className="logo" style={{width: "100%", height: "100%", display: isOpen ? "block" : "none"}} onClick={toggle}/>  
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                            <FaBars onClick={toggle}/>
                        </div>
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