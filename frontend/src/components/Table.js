import { useEffect, useState } from "react";
import { getProduct } from "../utils/Handleapi";
import useFilter from "../Hook/useFilter";

const ProductTable = () => {
  const [product, setProduct] = useState([]);

  const { filteredData, search, handleSearch } = useFilter(product, {
    productName: "",
    color: "",
    category: "",
    price: "",
  });

  const fetchProduct = async () => {
    try {
      const data = await getProduct();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">
              <label className="mr-2">Product</label>
              <input
                type="text"
                className="p-1 border border-gray-300 rounded"
                placeholder="Search Product"
                value={search.productName}
                onChange={(e) => handleSearch("productName", e.target.value)}
              />
            </th>
            <th className="border border-gray-300 p-2">
              <label className="mr-2">Color</label>
              <input
                type="text"
                className="p-1 border border-gray-300 rounded"
                placeholder="Search Color"
                value={search.color}
                onChange={(e) => handleSearch("color", e.target.value)}
              />
            </th>
            <th className="border border-gray-300 p-2">
              <label className="mr-2">Category</label>
              <input
                type="text"
                className="p-1 border border-gray-300 rounded"
                placeholder="Search Category"
                value={search.category}
                onChange={(e) => handleSearch("category", e.target.value)}
              />
            </th>
            <th className="border border-gray-300 p-2">
              <label className="mr-2">Price</label>
              <input
                type="text"
                className="p-1 border border-gray-300 rounded"
                placeholder="Search Price"
                value={search.price}
                onChange={(e) => handleSearch("price", e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">
                  {item.productName}
                </td>
                <td className="border border-gray-300 p-2">{item.color}</td>
                <td className="border border-gray-300 p-2">{item.category}</td>
                <td className="border border-gray-300 p-2">{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
