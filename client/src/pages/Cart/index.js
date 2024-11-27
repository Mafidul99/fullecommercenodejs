
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import QuantityBox from '../../components/QuantityBox';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { TbShoppingCartFilled } from "react-icons/tb";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                        <h2 className="hd mb-1">Your Cart</h2>
                        <p>There are 
                            <b className='text-red'>3</b> 
                            Products in your Cart
                        </p>
                    <div className="row">
                        <div className="col-md-8 pr-5">   
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="40%">Product</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="25%">Quantity</th>
                                            <th width="10%">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://pngimg.com/d/iphone_12_PNG23.png" 
                                                                className="w-100"/>
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Peoduct Name Peoduct Name Peoduct Name </h6>
                                                            <Rating className="mt-2 mb-2" name="read-only"
                                                                value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox/>
                                            </td>
                                            <td width="10%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoClose/></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://pngimg.com/d/iphone_12_PNG23.png" 
                                                                className="w-100"/>
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Peoduct Name Peoduct Name Peoduct Name </h6>
                                                            <Rating className="mt-2 mb-2" name="read-only"
                                                                value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox/>
                                            </td>
                                            <td width="10%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoClose/></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://pngimg.com/d/iphone_12_PNG23.png" 
                                                                className="w-100"/>
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Peoduct Name Peoduct Name Peoduct Name </h6>
                                                            <Rating className="mt-2 mb-2" name="read-only"
                                                                value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox/>
                                            </td>
                                            <td width="10%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoClose/></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='card border p-3 cartDetails'>
                                <h5>Cart Totals</h5>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Shipping</span>
                                    <span className='ml-auto'><b>Free</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Estimate for</span>
                                    <span className='ml-auto'><b>India</b></span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Total</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                            </div>
                            <Button className='btn-blue btn-big btn-lg'>
                                <TbShoppingCartFilled/>
                                Proceed To Checout
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart;