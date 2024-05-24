import { useLoaderData } from "react-router-dom"
import Accordion from "../components/Home/Accordion"
import Banner from "../components/Home/Banner"
import Products from "../components/Home/Products"


const Home = () => {
  const data = useLoaderData();
  
  return (
    
    <div>
        <Banner></Banner>
        <Products data={data}/>
        <Accordion/>
        </div>
  )
}

export default Home