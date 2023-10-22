import {React} from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );
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
                {error? "Error loading data!" : loading ? "Loading..." : data?.map(item =>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}
export default FeaturedProducts;