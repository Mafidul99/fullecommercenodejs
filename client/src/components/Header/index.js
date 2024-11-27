import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';
import { FiUser } from "react-icons/fi";
import Button from '@mui/material/Button';
import { IoBagOutline } from "react-icons/io5";




import CountryDropdown from '../CountryDropdown';
import SearchBar from '../SearchBar';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = ()=>{

    const context = useContext(MyContext);

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-bule ">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID 19</b> epidemic,
                             Order may be processed with a alight dely
                            </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}>
                                   <img src={Logo} alt='Logo'/>
                                </Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length!==0 && <CountryDropdown/>
                                }
                                
                                <SearchBar/>

                                <div className='d-flex align-items-center ml-auto part3'>
                                    {
                                        context.isLogin!==true ? 
                                    <Link to="/login">
                                        <Button className='btn-blue btn-sml btn-round mr-3'>
                                            Sign In </Button></Link> :
                                    <Button className='circle mr-3'><FiUser/></Button>
                                    }

                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                        <Button className='circle ml-2'><IoBagOutline/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>
            </div>
        </>
    )

}

export default Header;