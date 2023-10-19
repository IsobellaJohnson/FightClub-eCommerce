import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
                    headers: {
                        Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                });
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };        
    fetchData();
}, [])


    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>This is the content of the featured products component.
                    This component will be dynamic and reusable and I am excited
                    to learn about reusability and better my React knowledge. Leshgoo
                </p>
            </div>
            <div className="bottom">
                {data.map(item =>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}
export default FeaturedProducts;