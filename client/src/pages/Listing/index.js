import Sidebar from "../../components/Sidebar";
import Catbanner from "../../assets/images/categorices/catBanner.jpg";
import ProductItem from "../../components/ProductItem";
import Button from '@mui/material/Button';
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

import Pagination from '@mui/material/Pagination';


const Listing = () => {

     const [anchorEl, setAnchorEl] = useState(null);
     const [productView, setProductView] = useState('four');
        const openDropdown = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

    return (
        <>
            <section className="product_Listing_page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <img src={Catbanner} className='w-100' style={{ borderRadius: '8px' }} />

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className='d-flex align-items-center btnWrapper'>
                                    <Button className={productView==='one' && 'act'} 
                                        onClick={()=>setProductView('one')}>
                                        <GiHamburgerMenu />
                                    </Button>
                                    <Button className={productView==='three' && 'act'}
                                        onClick={()=>setProductView('three')}>
                                        <TfiLayoutGrid3Alt />
                                    </Button>
                                    <Button className={productView==='four' && 'act'}
                                        onClick={()=>setProductView('four')}>
                                        <TfiLayoutGrid4 />
                                    </Button>
                                </div>
                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}>
                                            Show 9 <FaAngleDown />
                                    </Button>
                                    <Menu
                                        className="w-100 showPerPageDropdown text-center"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>9</MenuItem>
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                        <MenuItem onClick={handleClose}>100</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                            </div>

                            <div className="mt-5 d-flex align-items-center justify-content-center">
                                <Pagination count={10} color="primary" size="large"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Listing;