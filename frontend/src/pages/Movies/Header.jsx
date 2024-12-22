// import SliderUtil from "../../components/SliderUtil.jsx";
// import { useGetNewMoviesQuery } from "../../redux/api/movies.js";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { data } = useGetNewMoviesQuery();

//   return (
//     <div className="flex flex-col mt-[2rem] ml-[2rem] md:flex-row justify-between items-center md:items-start">
//       <nav className="w-full md:w-[10rem] ml-0 md:ml-2 mb-4 md:mb-0">
//         <Link
//           to="/"
//           className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
//         >
//           Home
//         </Link>
//         <Link
//           to="/movies"
//           className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
//         >
//           Browse Movies
//         </Link>
//       </nav>

//       <div className="w-full md:w-[80%] mr-0 md:mr-2">
//         <SliderUtil data={data} />
//       </div>
//     </div>
//   );
// };

// export default Header;

import SliderUtil from "../../components/SliderUtil.jsx";
import { useGetNewMoviesQuery } from "../../redux/api/movies.js";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 px-4 sm:px-6 lg:px-8">
      {/* Navigation Section */}
      <nav className="w-full md:w-[15rem] flex flex-row md:flex-col items-center md:items-start space-x-4 md:space-x-0 md:space-y-2 mb-4 md:mb-0">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:bg-teal-200 block px-3 py-2 rounded text-lg font-medium"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:bg-teal-200 block px-3 py-2 rounded text-lg font-medium"
        >
          Browse Movies
        </Link>
      </nav>

      {/* Slider Section */}
      <div className="w-full md:w-[80%]">
        <SliderUtil data={data} />
      </div>
    </div>
  );
};

export default Header;
