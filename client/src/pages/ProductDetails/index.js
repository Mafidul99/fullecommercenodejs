

import ProductZoom from "../../components/ProductZoom";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import QuantityBox from "../../components/QuantityBox";
import Button from '@mui/material/Button';
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const Ratinglabels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(retingvalue) {
  return `${retingvalue} Star${retingvalue !== 1 ? 's' : ''}, ${Ratinglabels[retingvalue]}`;
}

const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const [retingvalue, setRetingValue] = useState(2);
    const [retinghover, setRetingHover] = useState(-1);


    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProductZoom />
                        </div>
                        <div className="col-md-8 pl-5">
                            <h2 className="hd text-capitalize">Product Name XYZ</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className=" mr-2">Brands : </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>

                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className=" cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>
                            <span className="badge badge-success">IN STOCK</span>
                            <p className="mt-3 mb-0">Ratings provide insight regarding others' opinions and experiences,
                                and can allow the user to submit a rating of their own. Ratings provide insight regarding others' opinions and experiences,
                                and can allow the user to submit a rating of their own. Ratings provide insight regarding others' opinions and experiences,
                                and can allow the user to submit a rating of their own. Ratings provide insight regarding others' opinions and experiences,
                                and can allow the user to submit a rating of their own. Ratings provide insight regarding others' opinions and experiences,
                                and can allow the user to submit a rating of their own.
                            </p>

                            <div className="productSize d-flex align-items-center mt-2">
                                <span>Size / Weight</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`}
                                            onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`}
                                            onClick={() => isActive(1)}>100g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`}
                                            onClick={() => isActive(2)}>300g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`}
                                            onClick={() => isActive(3)}>400g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`}
                                            onClick={() => isActive(4)}>500g</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round">
                                    <MdShoppingCart />&nbsp; ADD to Cart
                                </Button>
                                <Tooltip title="Add to Wishlist" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                                        <FaRegHeart />
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Add to Compare" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                                        <MdOutlineCompareArrows />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className='list list-inline'>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => setActiveTabs(0)}>Description</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => setActiveTabs(1)}>Additional info</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => setActiveTabs(2)}>Reviews (3)</Button>
                                </li>
                            </ul>

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>Ratings provide insight regarding others' opinions and experiences,
                                        and can allow the user to submit a rating of their own. Ratings provide insight regarding others'
                                        opinions and experiences, and can allow the user to submit a rating of their own.
                                        Ratings provide insight regarding others' opinions and experiences, and can allow the user to
                                        submit a rating of their own.</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (W/O Wheel)</th>
                                                    <td>
                                                        <p>35"L x 24"W x 37-45"H</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (W/O Wheel)</th>
                                                    <td>
                                                        <p>35"L x 24"W x 37-45"H</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className='row'>
                                        <div className='col-md-9'>
                                            <h3 className="headText">Customer questions & answers</h3>
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image_round">
                                                    <div className="rounded-circle">
                                                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />                                                        
                                                    </div>
                                                        <span className="text-g d-block text-center font-weight-bold">
                                                            Nofino Finance
                                                        </span>  
                                                </div>
                                                <div className="info pl-5">
                                                        <div className="d-flex align-items-center w-100">
                                                            <h5 className="lightColor">10/12/2024</h5>
                                                            <div className="ml-auto">
                                                                <Rating name="half-rating-read" value={4.5} precision={0.5}
                                                                    readOnly size="small" />
                                                            </div>                                                            
                                                        </div>
                                                        <p> Outlined buttons are also a lower emphasis alternative to contained buttons,
                                                            or a higher emphasis alternative to text buttons.
                                                            Outlined buttons are also a lower emphasis alternative to contained buttons,
                                                            or a higher emphasis alternative to text buttons.
                                                            Outlined buttons are also a lower emphasis alternative to contained buttons,
                                                            or a higher emphasis alternative to text buttons.
                                                            </p>                                                        
                                                    </div>
                                            </div>
                                            <div className="align-items-center w-100">
                                                <form className="reviewForm">
                                                    <h4>add a review</h4>
                                                    <div className="form-group">
                                                        <textarea className="form-control textarea" placeholder="write a Review">

                                                        </textarea>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control inputText"
                                                                    placeholder="Name" name="userName" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">                                                                
                                                                <Rating
                                                                    name="hover-feedback"
                                                                    size="large"
                                                                    retingvalue={retingvalue}
                                                                    precision={0.5}
                                                                    getLabelText={getLabelText}
                                                                    onChange={(event, newValue) => {
                                                                    setRetingValue(newValue);
                                                                    }}
                                                                    onChangeActive={(event, newHover) => {
                                                                    setRetingHover(newHover);
                                                                    }}
                                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="25px" />}
                                                                />
                                                                {retingvalue !== null && (
                                                                    <Box sx={{ ml: 1 }}>{Ratinglabels[retinghover !== -1 ? retinghover : retingvalue]}</Box>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <Button type="submit" className="btn-blue btn-lg btn-big btn-round"> Submit Review</Button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <RelatedProducts title="Related Products" />
                    <RelatedProducts title="Recently Viewed Products" />
                </div>
            </section>
        </>
    )
}

export default ProductDetails;