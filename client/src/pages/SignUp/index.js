import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/logo.webp";
import google from "../../assets/images/Google_Icon.webp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const SignUp = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, []);

    return (
        <>
            <section className="section signInPage">
                <div className="shape-button">
                    <svg fill="#fff" id="Layer_1" x="0px" viewBox="0 0 1921 819.8"
                        style={{ enableBackground: 'new 0 0 1921 819.8' }}>
                        <path class="st0" d="M1921,413.1v406.7H0V0.5h0.41228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,
                        57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="box card p-3 show border-0">
                        <div className="text-center">
                            <img src={Logo} />
                        </div>

                        <form className="mt-3">
                            <h2 className="mt-4">Sign Up</h2>
                            <div className="form-group">
                                <TextField id="standard-basic" type="email" label="Email"
                                    required variant="standard" className="w-100" />
                            </div>

                            <div className="form-group">
                                <TextField id="standard-basic" type="password" label="Password"
                                    required variant="standard" className="w-100" />
                            </div>


                            <a className="border-effect cursor txt">Forgot Password?</a>

                            <div className="d-flex align-items-center mt-3 mb-3">
                                <div className="row w-100">
                                    <div className="col-md-6">
                                        <Button className="btn-blue w-100 btn-lg btn-big ">
                                            Sign In 
                                        </Button>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                    <Link to="/" className="d-block w-100">
                                        <Button className="btn-lg btn-big w-100" 
                                            variant="outlined" onClick={()=>context.setIsHeaderFooterShow(true)}>
                                            Cancel 
                                        </Button>
                                    </Link>
                                    </div>
                                </div> 
                            </div>
                            <p className="txt">Not Resigter? <Link to="/login" className="border-effect cursor">Sign In</Link>
                            </p>

                            <h6 className="mt-4 text-center font-weight-bold">Or Continue with Social Account</h6>

                            <Button className="loginWithGoogle mt-2" variant="outlined">
                                <img src={google}/>
                                    Sign In With Google
                            </Button>
                            
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;