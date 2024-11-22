
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaAngleRight } from "react-icons/fa6";

const Navigation =()=>{

    const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navpart1'>
                            <div className='catWrapper'>
                                <Button className='allCatTab align-items-center' 
                                    onClick={()=>setIsOpenSidebarVal(!isOpenSidebarVal)}>
                                    <span className='icon1 mr-2'><IoIosMenu/></span>
                                    <span className='text'>All Categories</span>
                                    <span className='icon2 ml-2'><FaAngleDown/></span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to="/Home"><Button>Man <FaAngleRight className='ml-auto'/></Button></Link>
                                            <div className='submenu'>
                                                <Link to="/Home"><Button>Cothing</Button></Link>
                                                <Link to="/Home"><Button>footwear</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/Home"><Button>Woman <FaAngleRight className='ml-auto'/></Button></Link>
                                            <div className='submenu'>
                                                <Link to="/Home"><Button>Cothing</Button></Link>
                                                <Link to="/Home"><Button>footwear</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                                <Link to="/Home"><Button>watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/Home"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/Home"><Button>watch</Button></Link></li>
                                        <li><Link to="/Home"><Button>kids</Button></Link></li>
                                        <li><Link to="/Home"><Button>gift</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-10 navpart2 d-flex align-items-center'> 
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item active'>
                                    <Link to="/Home">
                                        <Button>Home</Button>
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>Man</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/Home"><Button>Cothing</Button></Link>
                                        <Link to="/Home"><Button>footwear</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>Woman</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/Home"><Button>Cothing</Button></Link>
                                        <Link to="/Home"><Button>footwear</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>Beauty</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/Home"><Button>Cothing</Button></Link>
                                        <Link to="/Home"><Button>footwear</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>watch</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/Home"><Button>Cothing</Button></Link>
                                        <Link to="/Home"><Button>footwear</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>kids</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/Home"><Button>Cothing</Button></Link>
                                        <Link to="/Home"><Button>footwear</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                        <Link to="/Home"><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home"><Button>gift</Button></Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home">
                                        <Button>Blog</Button>
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/Home">
                                        <Button>ContactUs</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;