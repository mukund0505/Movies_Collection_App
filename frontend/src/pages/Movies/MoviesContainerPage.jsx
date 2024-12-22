// import { useState } from "react";
// import {
//   useGetNewMoviesQuery,
//   useGetTopMoviesQuery,
//   useGetRandomMoviesQuery,
// } from "../../redux/api/movies.js";

// import { useFetchGenresQuery } from "../../redux/api/genre.js";
// import SliderUtil from "../../components/SliderUtil.jsx";

// const MoviesContainerPage = () => {
//   const { data } = useGetNewMoviesQuery();
//   const { data: topMovies } = useGetTopMoviesQuery();
//   const { data: genres } = useFetchGenresQuery();
//   const { data: randomMovies } = useGetRandomMoviesQuery();

//   const [selectedGenre, setSelectedGenre] = useState(null);

//   const handleGenreClick = (genreId) => {
//     setSelectedGenre(genreId);
//   };

//   const filteredMovies = data?.filter(
//     (movie) => selectedGenre === null || movie.genre === selectedGenre
//   );

//   return (
//     <div className="flex flex-col lg:flex-row lg:justify-between items-center">
//       <nav className=" ml-[4rem] flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row">
//         {genres?.map((g) => (
//           <button
//             key={g._id}
//             className={`transition duration-300 ease-in-out hover:bg-gray-200 block p-2 rounded mb-[1rem] text-lg ${
//               selectedGenre === g._id ? "bg-gray-200" : ""
//             }`}
//             onClick={() => handleGenreClick(g._id)}
//           >
//             {g.name}
//           </button>
//         ))}
//       </nav>

//       <section className="flex flex-col justify-center items-center w-full lg:w-auto">
//         <div className="w-full lg:w-[100rem] mb-8 ">
//           <h1 className="mb-5">Choose For You</h1>
//           <SliderUtil data={randomMovies} />
//         </div>

//         <div className="w-full lg:w-[100rem] mb-8">
//           <h1 className="mb-5">Top Movies</h1>
//           <SliderUtil data={topMovies} />
//         </div>

//         <div className="w-full lg:w-[100rem] mb-8">
//           <h1 className="mb-5">Choose Movie</h1>
//           <SliderUtil data={filteredMovies} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MoviesContainerPage;

import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies.js";

import { useFetchGenresQuery } from "../../redux/api/genre.js";
import SliderUtil from "../../components/SliderUtil.jsx";

const MoviesContainerPage = () => {
  const { data } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = data?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center px-4 sm:px-6 lg:px-8">
      {/* Navigation Section */}
      <nav className="flex flex-row lg:flex-col items-start lg:items-center space-x-4 lg:space-x-0 lg:space-y-4 mb-6 lg:mb-0">
        {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-gray-200 block px-3 py-2 rounded text-lg font-medium ${
              selectedGenre === g._id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <section className="flex flex-col items-center w-full lg:w-auto space-y-12">
        {/* Random Movies */}
        <div className="w-full lg:w-[70rem] mb-8">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-5">
            Choose For You
          </h1>
          <SliderUtil data={randomMovies} />
        </div>

        {/* Top Movies */}
        <div className="w-full lg:w-[70rem] mb-8">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-5">
            Top Movies
          </h1>
          <SliderUtil data={topMovies} />
        </div>

        {/* Filtered Movies */}
        <div className="w-full lg:w-[70rem] mb-8">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-5">
            Choose Movie
          </h1>
          <SliderUtil data={filteredMovies} />
        </div>
      </section>
    </div>
  );
};

export default MoviesContainerPage;
