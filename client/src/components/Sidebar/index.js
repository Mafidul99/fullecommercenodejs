
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Banner2 from "../../assets/images/banner2.jpg";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [value, setValue]= useState([100, 60000]);
    const [value2, setValue2]= useState(0);

    return (
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>Product Catgories</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="Man" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Woman" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="Beauty" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="Kids" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Kids" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="Kids" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="Kids" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Kids" size="small"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Filter by Price</h6>
                    <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>
                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From:<strong className='text-dark'>
                            Rs: {value[0]}</strong>
                        </span>
                        <span className='ml-auto'>From:<strong className='text-dark'>
                            Rs: {value[1]}</strong>
                        </span>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Product Status</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />}
                                     label="In Stock" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="On Sale" size="small"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Brands</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Frito Lay" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Nespersso" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Frito Lay" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Nespersso" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Frito Lay" size="small"/>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} 
                                    label="Nespersso" size="small"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-5 img__round'>
                    <Link to="#">
                        <img src={Banner2} className='w-100'/>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Sidebar;