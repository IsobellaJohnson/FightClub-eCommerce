import React, {useState} from 'react';
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"

const Product = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(0);
    const images = [
        "https://images.pexels.com/photos/6296009/pexels-photo-6296009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2204182/pexels-photo-2204182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=> setSelectedImage(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImage]} alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>Boxing Classes</h1>
                <span className="price">$30</span>
                <p>Purchase our boxing classes for only $30 a month. 
                    This boxing class includes conditioning, sparring and a complimentary
                    snack of free unlimited banana protein shakes. How good.
                </p>
                <div className="quantity">
                    <button onClick={e=>setQuantity(prev=> prev === 1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={e=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                <AddShoppingCartIcon/> Add To Cart
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> Add To Wishlist
                    </div>
                    <div className="item">
                        <BalanceIcon/> Add To Compare
                    </div>
                </div>
                <div className="info">
                    <span>Location: Auckland</span>
                    <span>Duration: 30 Minutes</span>
                    <span>Tag: Boxing, Classes, Lesson, Fighting</span>
                </div>
                <hr/>
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}
export default Product