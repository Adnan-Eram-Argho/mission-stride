 
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

 

function EditProduct() {
  const shoe = useLoaderData();
const[title,setTitle]= useState(shoe.title);
const[price,setPrice]= useState(shoe.price);
const[brand,setBrand]= useState(shoe.brand);
const[id,setId]= useState(shoe.id);
const[description,setDescription]= useState(shoe.description);
const[image_url,setImage_url]= useState(shoe.image_url);




  console.log(shoe)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title= form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        const data ={id,title,brand,price,description,image_url};
        console.log(data)
        await fetch(`http://localhost:3000/shoes/${shoe.id}`,{
          method:"PATCH",
          body:JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
    }
          return (
            <div>
              
              <h1 className="text-5xl font-bold text-center">Edit a product</h1>
              <div className="my-16">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="text" name="id" placeholder="id" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="text" name="title" value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="text" name="brand" placeholder="brand" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                    </div>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="number" name="price" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    </div>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="description" name="description" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div>
                        <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2 text-black" type="text" name="image_url" placeholder="image_url" value={image_url} onChange={(e)=>setImage_url(e.target.value)}/>
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input type="submit"  className="btn bg-red-500 w-3/4 text-white p-4" value="Edit Product" />
        
                    </div>
                </form>
        
              </div>
            </div>
          )
}

export default EditProduct
