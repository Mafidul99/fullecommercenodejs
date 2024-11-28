
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { useState, useContext } from "react";
import { MyContext } from "../../App";


const Sidebar = () =>{

    const [activeTab, setActiveTab]= useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu]= useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) =>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    };

    

 return(
    <>
     <div className="sidebar">        
        <ul>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab=== 0 ? 'active' : ''}`} 
                            onClick={()=>isOpenSubmenu(0)}>
                        <span className="icon"><RiDashboardHorizontalFill/></span>
                            Dashboard                    
                    </Button>
                </Link>
            </li>
            <li>
                <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(1)}>
                    <span className="icon"><MdOutlineProductionQuantityLimits/></span>
                         Products
                    <span className="arrow"><IoIosArrowForward/></span>
                </Button>
                <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`} >
                    <ul className="submenu">
                        <li><Link to={"/products"}>Products List</Link></li>
                        <li><Link to={"/product/details"}>Products View</Link></li>
                        <li><Link to={"/product/add"}>Products Upload</Link></li>
                    </ul>
                </div>
            </li>
            <li>
                <Button className={`w-100 ${activeTab===2 && isToggleSubmenu===true ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(2)}>
                    <span className="icon"><MdOutlineProductionQuantityLimits/></span>
                         Category
                    <span className="arrow"><IoIosArrowForward/></span>
                </Button>
                <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`} >
                    <ul className="submenu">
                        <li><Link to={"/category"}>Category List</Link></li>
                        <li><Link to={"/category/add"}>Add Category</Link></li>
                    </ul>
                </div>
            </li>
            
        </ul>

        <br/>
        <div className="logoutWrapper">
           <div className="logoutBox">
                <Button variant="contained"><AiOutlineLogout/> LogOut</Button>
           </div>
        </div>

     </div>
    </>
 )
}

export default Sidebar;