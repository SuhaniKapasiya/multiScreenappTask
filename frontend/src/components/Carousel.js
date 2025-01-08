import React, { useEffect, useState } from 'react'
import { getCarousals } from '../utils/Handleapi';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Carousel() {

  const [carsousal, setCarsousal] = useState([]);
  const [currentIndex ,  setCurrentIndex] = useState(0);
   

const handlePre = ()=>{
  
  if(currentIndex === 0){

    setCurrentIndex(carsousal.length-1)
    return;
  }

  setCurrentIndex(currentIndex -1);

}

const handleNext = ()=>{

 if(currentIndex===  carsousal.length -1){
    
  setCurrentIndex(0);
   return;
 }

 setCurrentIndex(currentIndex+1);

}

    const fetchCarousal = async () => {

        const data = await getCarousals();
        // console.log("data carsousal in fronted", data);
        
        setCarsousal(data); 
    }
    
    useEffect(() => {
      fetchCarousal();
    }, []);


    if(carsousal.length === 0 ){
        return (
          <div className="flex items-center justify-center h-screen">
            Loading...
          </div>
        );
    }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 w-auto">
      <div className="relative w-full max-w-md h-90 overflow-hidden border border-gray-200 rounded-lg shadow-md bg-white">
        <MdKeyboardArrowLeft
          onClick={handlePre}
          className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-700 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 active:scale-95"
          size={30}
        />
        <img
          src={carsousal[currentIndex]?.image}
          alt="carouselimag"
          className="w-full h-70 object-cover"
        />
        <MdKeyboardArrowRight
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-700 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 active:scale-95"
          size={30}
        />
      </div>

      <div className="flex space-x-2">
        {carsousal.map((_, index) => (
        
          
          <button
            key={index._id}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel
