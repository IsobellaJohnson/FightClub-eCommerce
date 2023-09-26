import {React, useState} from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"
const Slider = () => {
    const [curSlide, setCurSlide] = useState(0)
    const data = [
        "/img/fight2.jpg",
        "/img/fight1.jpg",
        "/img/fight3.jpg",
    ]

    const prevSlide = () => {
        setCurSlide(curSlide === 0 ? 2 : curSlide - 1)
    }

    const nextSlide = () => {
        setCurSlide(curSlide === 2 ? 0 : (prev) => prev + 1)
    }

    return(
        <div className="slider">
                  <div className="container" style={{transform:`translateX(-${curSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>

                </div>
                <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
                </div>
            </div>
        </div>
        )
}
export default Slider