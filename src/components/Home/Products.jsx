/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SingleProduct from "../SingleProduct"


function Products({data}) {
  console.log(data)
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">check out products</h1>
      <div className="flex gap-3 justify-center"> 
       {
        data.slice(0,3).map(shoe=>
          <SingleProduct key={shoe.id} shoe={shoe}/>
        )
       }
       
      </div>
    </div>
  )
}

export default Products
