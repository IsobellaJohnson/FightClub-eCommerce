import React from "react";
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "/img/gloves.jpeg",
            img2: "/img/mouthguard.jpeg",
            title: "Brown Vintage Boxing Gloves",
            desc: "Vintage brown boxing gloves made with hand-crafted leather in 1982. Original condition. Minimal wear and tear",
            isNew: false,
            oldPrice: 29,
            price: 19,
        }
    ]
    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete"/>
            </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}
export default Cart