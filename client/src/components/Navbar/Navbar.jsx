import {React, useState} from 'react';
import {Link} from "react-router-dom"
import Cart from "../Cart/Cart"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import './Navbar.scss'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/en.png" alt="english" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>NZD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className="link" to="products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/3">Kids</Link>
                </div>
            </div>
            <div className="center">
                <Link className="link" to="/">Fight Club</Link>
            </div>
            <div className="right">
            <div className="item">
                <Link className="link" to="/">Home</Link>
            </div>
            <div className="item">
                <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
                <Link className="link" to="/">Contact</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick = {()=> setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
                </div>
            </div>
            </div>
        </div>
        {open && <Cart/>}
        </div>
    )
}
export default Navbar