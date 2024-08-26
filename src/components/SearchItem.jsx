import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setfilterData] = useState([]);
  useEffect(() => {
    const Filter = items.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );

    setfilterData(Filter);
  }, [term]);
  return (
    <>
      <Product items={filterData}></Product>
    </>
  );
};

export default SearchItem;
