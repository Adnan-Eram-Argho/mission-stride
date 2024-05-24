/* eslint-disable no-unused-vars */


function AddProduct() {


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
await fetch("http://localhost:3000/shoes",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body :JSON.stringify( data)
}).then(res=>res.json())
.then(data=>{
    console.log(data)
form.reset()})



    }
  return (
    <div>
      
      <h1 className="text-5xl font-bold text-center">add a product</h1>
      <div className="my-16">
        <form onSubmit={handleSubmit}>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="text" name="id" placeholder="id"/>
            </div>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="text" name="title" placeholder="title"/>
            </div>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="text" name="brand" placeholder="brand"/>
            </div>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="number" name="price" placeholder="price" />
            </div>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="description" name="description" placeholder="description"/>
            </div>
            <div>
                <input className="bg-gray-200 p-4 w-full border-black border rounded-lg m-2" type="text" name="image_url" placeholder="image_url" />
            </div>
            <div className="mt-2 flex justify-center items-center">
                <input type="submit"  className="btn bg-red-500 w-3/4 text-white p-4" value="add Product" />

            </div>
        </form>

      </div>
    </div>
  )
}

export default AddProduct
