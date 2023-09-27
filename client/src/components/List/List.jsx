import React from "react";
import Card from "../Card/Card"
import "./List.scss"

const List = () => {
    const data = [
        {
            id: 1,
            img: "/img/gloves.jpeg",
            img2: "/img/mouthguard.jpeg",
            title: "Brown Vintage Boxing Gloves",
            isNew: false,
            oldPrice: 29,
            price: 19,
        },
        {
            id: 2,
            img: "/img/mouthguard.jpeg",
            img2: "/img/weights.jpeg",
            title: "Black Mouth Guard",
            isNew: false,
            oldPrice: 15,
            price: 6,
        },
        {
            id: 3,
            img: "/img/weights.jpeg",
            img2: "/img/gloves.jpeg",
            title: "2kg Weights",
            isNew: true,
            oldPrice: 18,
            price: 10,
        },
    ]
    return(
        <div className="list">
            {data.map(item =>(
                <Card item={item} key={item.id}/>
                ))}
            </div>
    )
} 
export default List