import { useEffect } from "react";
import { getProduct } from "../utils/Handleapi";

const ProductTable = () =>{

    const fetchProduct = async ()=>{
      
        const data = await getProduct();
        console.log("table data ",data);
        

    }

    useEffect(()=>{
     fetchProduct();

    },[])
    return(
        <div>
           <h1>Table</h1>

        </div>
    )
}


export default ProductTable;