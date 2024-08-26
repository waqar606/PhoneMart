import React from "react";
import { items } from "./Data";
import { Link } from "react-router-dom";
const Cart = ({ cart, setcart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 && (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        )}
        {cart.map((product) => {
          return (
            <>
              <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        })}
      </div>
      {cart.length !== 0 && (
        <div className="text-center my-5">
          <button className="btn btn-warning mx-5 ">CheckOut</button>
          <button onClick={() => setcart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;

// import React from "react";
// import { Link } from "react-router-dom";
// import { items } from "./Data";
// const Cart = ({ cart, setdata }) => {
//   return (
//     <>
//       {cart.map((product) => {
//         <div className="card mb-3" style={{ maxWidth: "700px" }}>
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img
//                 src={product.imgSrc}
//                 className="img-fluid rounded-start"
//                 alt="..."
//               />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <button className="btn btn-primary mx-3">
//                   {product.price} ₹
//                 </button>
//                 <button className="btn btn-warning">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>;
//       })}
//       {/* <div className="card mb-3" style={{ maxWidth: "700px" }}>
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={product.imgSrc}
//               className="img-fluid rounded-start"
//               alt="..."
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text">{product.description}</p>
//               <button className="btn btn-primary mx-3">
//                 {product.price} ₹
//               </button>
//               <button className="btn btn-warning">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Cart;
