/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */


function SingleProduct({shoe}) {
  const{id,title,brand,price,description,image_url}=shoe;
  console.log(image_url)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold">{price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
        <Link to={`/products/${id}`}>See Details</Link>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleProduct
