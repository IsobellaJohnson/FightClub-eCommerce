import {React} from 'react';
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/2204182/pexels-photo-2204182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <button>
                        <Link className="link" to="products/1">
                            Apparel and Gear
                            </Link>
                            </button>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <button>
                    <Link className="link" to="products/2">
                        Training Equipment
                        </Link>
                        </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/6295706/pexels-photo-6295706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <button>
                    <Link className="link" to="products/3">
                        Footwear
                        </Link>
                        </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/6296053/pexels-photo-6296053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <button>
                            <Link className="link" to="products/4">
                                Fight Accessories
                                </Link>
                                </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/9944386/pexels-photo-9944386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <button>
                            <Link className="link" to="products/5">
                                Nutrition and Suppliments
                                </Link>
                                </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/6296009/pexels-photo-6296009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <button>
                        <Link className="link" to="products/6">
                            Fight Memorabilia
                            </Link>
                            </button>
                </div>
            </div>
        </div>
    )
} 
export default Categories