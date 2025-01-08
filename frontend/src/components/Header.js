
// import { Link } from "react-router-dom";
// const Header = ()=>{


//     return (
//       <div className=" flex justify-between bg-pink-100 shadow-lg mt-2 mb-2 h-20 items-center">
//         <ul className="flex gap-2 underline text-blue-950">
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           <li>
//             <Link to="/aboutus">AboutUs</Link>
//           </li>
//         </ul>
//       </div>
//     );

// }


// export default Header;


import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mt-2 mb-2 h-20 items-center">
      <ul className="flex gap-6 underline text-blue-950 mx-4">
        <li>
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-blue-700">
            About Us
          </Link>
        </li>

       
      </ul>
    </div>
  );
};

export default Header;
