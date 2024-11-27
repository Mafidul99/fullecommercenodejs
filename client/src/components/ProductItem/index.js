import React, { useContext, useEffect, useState} from 'react';
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MyContext } from '../../App';


const ProductItem = (props) => {

   const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setIsOpenProductModal(true);

    }

    
    return (
        <>
            <div className={`productItem ${props.itemView}`}>
                <div className="img_Wrapper">
                    <img src="https://pngimg.com/d/iphone_12_PNG23.png" className="w-100" />
                    <span className="badge badge-primary">28%</span>
                    <div className="actions">
                        <Button onClick={()=>viewProductDetails(1)}><BsArrowsFullscreen /></Button>
                        <Button><FaRegHeart style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>Iphone 13Pro 8GB/256GB Glod Color</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only"
                        value={4.5} precision={0.5} readOnly size="small" />

                    <div className="d-flex">
                        <span className="oldPrice">$30.00</span>
                        <span className="netPrice text-danger ml-2">$20.00</span>
                    </div>

                    <div className='d-flex align-items-center justify-content-center'>
                        <Button className='btn-blue btn-cart btn-round mt-3'>Add to Cart</Button>
                    </div>
                </div>
            </div>

            
        </>
    )

}

export default ProductItem;