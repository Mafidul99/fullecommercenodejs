
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Everyday fresh Products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free Delivary for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiDiscount1/></span>
                        <span className="ml-2">Daily Mega Dicount</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar/></span>
                        <span className="ml-2">Best price on the Market</span>
                    </div>
                </div>

                <div className="row mt-5 linkWrap">
                    <div className="col">
                        <h5>Fruit & Vegetable</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Meat Seafood</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Fruit & Vegetable</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Fruit & Vegetable</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Fruit & Vegetable</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                            <li><Link to="#">Fresh Vegetable</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-3 pb-3 pt-3 copyrightTab w-100">
                    <div className="copyRight d-flex">
                        <p className="mb-0">Copyright 2024 | All right reserved. Powered by Mandia</p>
                        <ul className="list list-inline ml-auto mb-0">
                                <li className="list-inline-item">
                                    <Link to="#"><FaFacebookF/></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><IoLogoInstagram/></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"><FaTwitter/></Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;