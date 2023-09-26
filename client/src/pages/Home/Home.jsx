import React from 'react';
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import './Home.scss';

const Home = () => {
    return(
        <div className="home">
            <div className="slider">
                <Slider/>
            </div>
            <FeaturedProducts type="featured"/>
            <FeaturedProducts type="trending"/>
        </div>
    )
}
export default Home