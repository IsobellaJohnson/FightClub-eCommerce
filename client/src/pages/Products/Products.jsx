import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState('desc');
  const [selected, setSelected] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelected(
      isChecked
        ? [...selected, value] //when checked add value to array
        : selected.filter((item) => item !== value) //handle uncheck -- remove item from array wehn unchecked
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Filter by level</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={60}
              max={250}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
            <div className="right">
                <img className="catImg"
                src="https://images.pexels.com/photos/6295706/pexels-photo-6295706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""/>
                <List subCats={selected} catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}
export default Products