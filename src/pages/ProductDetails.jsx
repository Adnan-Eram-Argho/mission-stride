/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"


function ProductDetails() {
    const shoe = useLoaderData();

    const{id,title,brand,price,description,image_url}=shoe
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      <img className="h-[400px]" src={image_url} alt="product image" />
      <h3 className="text-2xl font-semibold"> {price}$$</h3>
      <h3 className="text-xl font-semibold"> {brand}</h3>
      <p className="text-lg font-light">{description}</p>

    </div>
  )
}

export default ProductDetails
