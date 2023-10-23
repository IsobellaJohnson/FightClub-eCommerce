import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id;
    const [selectedImage, setSelectedImage] = useState("img");
    const [quantity, setQuantity] = useState(0);
    const apiUrl = `/products/${id}?populate=*`

    const { error, loading, data } = useFetch(apiUrl);

    const dispatch = useDispatch();

    console.log(apiUrl)
    console.log(data)

    const setSelectedImg = (img) => {
        setSelectedImage(img);
    };



    return (
        <div className="product">
            {error ? {error} :
            loading ? (
                "loading"
            ) : (
                <>
                    <div className="left">
                        <div className="images">
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.img?.data[0]?.attributes?.url
                                }
                                alt=""
                                onClick={(e) => setSelectedImg("img")}
                            />
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes?.img2?.data[0]?.attributes?.url
                                }
                                alt=""
                                onClick={(e) => setSelectedImg("img2")}
                            />
                        </div>
                        <div className="mainImg">
                            <img
                                src={
                                    process.env.REACT_APP_UPLOAD_URL +
                                    data?.attributes[selectedImage]?.data[0]?.attributes?.url
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <h1 className="title">{data?.attributes.title}</h1>
                            <span className="price">${data?.attributes.price}</span>
                            <p>{data?.attributes.desc}
                            </p>
                            <div className="quantity">
                                <button onClick={e => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                                {quantity}
                                <button onClick={e => setQuantity(prev => prev + 1)}>+</button>
                            </div>
                            <button
                            className="add"
                            onClick={() =>
                                dispatch(
                                addToCart({
                                    id: data.id,
                                    title: data.attributes.title,
                                    desc: data.attributes.desc,
                                    price: data.attributes.price,
                                    img: data.attributes.img.data[0].attributes.url,
                                    quantity,
                                }))}
                            >
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
                </>
            )}
        </div>
    );
}

export default Product;
