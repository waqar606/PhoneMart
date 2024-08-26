import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setproduct(filterProduct[0]);
    const related = items.filter(
      (suman) => suman.category === product.category
    );
    setRelatedProducts(related);
  }, [id, product.category]);
  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-danger">Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
