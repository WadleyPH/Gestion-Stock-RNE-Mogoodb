import React from "react";
import './sidebar.css';
import { BsCart3, BsBackspace, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from 'react-icons/bs';


const Sidebar = ({ isOpen, OpenSideBar }) => {

    return (
        <aside id="sidebar" className={isOpen ? "sidebar-responsive" : ""}>
            < div className="sidebar-title" >
                <div className="sidebar-brand">
                    <BsCart3 className="icon_header" />&nbsp; SHOP
                </div>
                <span className="icon close_icon"><BsBackspace onClick={OpenSideBar} /></span>
            </div >
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">
                        <BsGrid1X2Fill className="icon" />&nbsp; Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillArchiveFill className="icon" />&nbsp; Products
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGrid3X3GapFill className="icon" />&nbsp; Categories
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsPeopleFill className="icon" />&nbsp; Customers
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsListCheck className="icon" />&nbsp; Inventory
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsMenuButtonWideFill className="icon" />&nbsp; Rapports
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className="icon" />&nbsp; Setting
                    </a>
                </li>
            </ul>
        </aside >
    )

}

export default Sidebar