import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


const ProductItem = () => {
    return (
        <div className="item productItem">
            <div className="imgWrapper">
                <img src="https://pngimg.com/d/iphone_12_PNG23.png" className="w-100" />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button><BsArrowsFullscreen /></Button>
                    <Button><FaRegHeart style={{ fontSize:'20px' }}/></Button>
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
            </div>
        </div>
    )

}

export default ProductItem;