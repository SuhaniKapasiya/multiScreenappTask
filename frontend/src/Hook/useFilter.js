import { useEffect, useState } from "react"



const useFilter = (data, initialSearchState)=>{


    const [filteredData,setFilteredData] = useState([]);
    const [search,setSearch] = useState(initialSearchState);

    useEffect(()=>{

        const filtered = data.filter((item)=>
            Object.keys(search).every((key)=>
                item[key]
                .toString()
                .toLowerCase()
                .includes(search[key].toLowerCase())
        
        )
       );
       setFilteredData(filtered);

    },[search,data])

    const handleSearch = (key, value) => {
      setSearch((prev) => ({
        ...prev,
        [key]: value,
      }));
    };


    return {filteredData,search,handleSearch}

}


export default useFilter;