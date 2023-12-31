import React from 'react';
import Slider from "../../components/Slider/Slider"
import Categories from "../../components/Categories/Categories"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Contact from "../../components/Contact/Contact"
import './Home.scss';

const Home = () => {
    return(
        <div className="home">
            <div className="slider">
                <Slider/>
            </div>
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
            <Contact/>
        </div>
    )
}
export default Home