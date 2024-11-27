
import React, { useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import { MyContext } from '../../App';
import Rating from '@mui/material/Rating';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from '../ProductZoom';



const ProductModal = (props) => {    

    const context = useContext(MyContext);   

    return (
        <>
            <Dialog open={true} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
                <Button className='colse_' onClick={() => context.setIsOpenProductModal(false)}>
                    <MdClose />
                </Button>
                <h4 className='mb-1 font-weight-bold'>Products Name</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands :</span>
                        <span className="ml-2"><b>Welch's</b></span>
                    </div>
                    <Rating className="" name="read-only"
                        value={4.5} precision={0.5} readOnly size="small" />
                </div>
                <hr />

                <div className="row mt-2 productDetailsModal">
                    <div className="col-md-5">
                        <ProductZoom/>
                    </div>
                    <div className="col-md-7">
                        <div className="info d-flex align-items-center mb-3">
                            <span className='oldPrice lg mr-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.35</span>
                        </div>
                        <span className='badge bg-success'>IN STOCK</span>
                        <p className='mt-3'>Produ Discraption</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to Cart</Button>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'>
                                <IoIosHeartEmpty />&nbsp;ADD TO WISHLIST
                            </Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'>
                                <MdOutlineCompareArrows />&nbsp;COMPARE
                            </Button>
                        </div>
                    </div>
                </div>

            </Dialog>
        </>
    )

}

export default ProductModal;