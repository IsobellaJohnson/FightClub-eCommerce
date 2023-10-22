import React from "react";
import Card from "../Card/Card"
import "./List.scss"
import useFetch from '../../hooks/useFetch'

const List = ({ subCats, catId, maxPrice, sort }) => {
    console.log(subCats)
 
    const apiUrl = `/products?populate=*&[filters][categories][id][$eq]=${catId}&${subCats
        .map((item) => `[filters][sub_categories][id][$eq]=${item}`)
        .join('')}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  
    const { data, loading, error } = useFetch(apiUrl);
    console.log(apiUrl)
  
    return (
      <div className="list">
        {error ? {error} : loading ? "Loading..." : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    );
  };
  
  export default List;
  

  