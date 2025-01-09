import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });


const getCarousals = async () => {
    try {
        const { data } = await API.get("/carousals/getCarousal");
        console.log("data carsousal", data);
        
        return data;
    } catch (error) {
        console.log(error);
    }
}


const getCharts = async () => {
    try {
        const { data } = await API.get("/charts/getChart");
        // console.log("data charts", data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


const getProduct = async() =>{
    try{
       const { data } = await API.get("/products/getProduct");
       console.log("data of hanlde api",data);
       
       return data;

    }catch(error){
       console.log(error);
       
    }
}


export { getCarousals, getCharts, getProduct };