// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   useGetSpecificMovieQuery,
//   useAddMovieReviewMutation,
// } from "../../redux/api/movies.js";
// import MovieTabs from "./MovieTabs.jsx";

// const MovieDetails = () => {
//   const { id: movieId } = useParams();
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
//   const { userInfo } = useSelector((state) => state.auth);
//   const [createReview, { isLoading: loadingMovieReview }] =
//     useAddMovieReviewMutation();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       await createReview({
//         id: movieId,
//         rating,
//         comment,
//       }).unwrap();

//       refetch();

//       toast.success("Review created successfully");
//     } catch (error) {
//       toast.error(error.data || error.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Link
//           to="/"
//           className="  text-white font-semibold hover:underline ml-[20rem]"
//         >
//           Go Back
//         </Link>
//       </div>

//       <div className="mt-[2rem]">
//         <div className="flex justify-center items-center">
//           <img
//             src={movie?.image}
//             alt={movie?.name}
//             className="w-[70%] rounded"
//           />
//         </div>
//         {/* Container One */}
//         <div className="container  flex justify-between ml-[20rem] mt-[3rem]">
//           <section>
//             <h2 className="text-5xl my-4 font-extrabold">{movie?.name}</h2>
//             <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
//               {movie?.detail}
//             </p>
//           </section>

//           <div className="mr-[5rem]">
//             <p className="text-2xl font-semibold">
//               Releasing Date: {movie?.year}
//             </p>

//             <div>
//               {movie?.cast.map((c) => (
//                 <ul key={c._id}>
//                   <li className="mt-[1rem]">{c}</li>
//                 </ul>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="container ml-[20rem]">
//           <MovieTabs
//             loadingMovieReview={loadingMovieReview}
//             userInfo={userInfo}
//             submitHandler={submitHandler}
//             rating={rating}
//             setRating={setRating}
//             comment={comment}
//             setComment={setComment}
//             movie={movie}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;

// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   useGetSpecificMovieQuery,
//   useAddMovieReviewMutation,
// } from "../../redux/api/movies.js";
// import MovieTabs from "./MovieTabs.jsx";

// const MovieDetails = () => {
//   const { id: movieId } = useParams();
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
//   const { userInfo } = useSelector((state) => state.auth);
//   const [createReview, { isLoading: loadingMovieReview }] =
//     useAddMovieReviewMutation();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       await createReview({
//         id: movieId,
//         rating,
//         comment,
//       }).unwrap();

//       refetch();

//       toast.success("Review created successfully");
//     } catch (error) {
//       toast.error(error.data || error.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Link
//           to="/"
//           className="text-white font-semibold hover:underline mt-4 sm:ml-4 md:ml-[10rem] lg:ml-[20rem] xl:ml-[20rem]"
//         >
//           Go Back
//         </Link>
//       </div>

//       <div className="mt-[2rem]">
//         <div className="flex justify-center items-center">
//           <img
//             src={movie?.image}
//             alt={movie?.name}
//             className="w-full sm:w-[90%] md:w-[70%] lg:w-[70%] rounded"
//           />
//         </div>

//         {/* Container One */}
//         <div className="flex flex-col md:flex-row justify-between mx-auto mt-[3rem] px-4 sm:px-2 md:px-6 lg:px-8 max-w-screen-xl">
//           <section className="md:w-[60%]">
//             <h2 className="text-4xl sm:text-5xl my-4 font-extrabold">
//               {movie?.name}
//             </h2>
//             <p className="my-4 text-[#B0B0B0]">{movie?.detail}</p>
//           </section>

//           <div className="mt-4 md:mt-0 md:w-[35%] text-center md:text-left">
//             <p className="text-2xl font-semibold">
//               Releasing Date: {movie?.year}
//             </p>

//             <div>
//               {movie?.cast.map((c, index) => (
//                 <ul key={index} className="mt-[1rem]">
//                   <li>{c}</li>
//                 </ul>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-[3rem] mx-auto px-4 sm:px-2 md:px-6 lg:px-8 max-w-screen-xl">
//           <MovieTabs
//             loadingMovieReview={loadingMovieReview}
//             userInfo={userInfo}
//             submitHandler={submitHandler}
//             rating={rating}
//             setRating={setRating}
//             comment={comment}
//             setComment={setComment}
//             movie={movie}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies.js";
import MovieTabs from "./MovieTabs.jsx";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="text-white font-semibold hover:underline mt-4 sm:ml-4 md:ml-[10rem] lg:ml-[20rem] xl:ml-[20rem]"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-[2rem]">
        <div className="flex justify-center items-center">
          <img
            src={movie?.image}
            alt={movie?.name}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[70%] rounded"
          />
        </div>

        {/* Content Below Image */}
        <div className="flex flex-col md:flex-row justify-between mt-[3rem] mx-auto px-4 sm:px-2 md:px-6 lg:px-8 max-w-screen-xl">
          {/* Left Section - Movie Info */}
          <section className="md:w-[60%] md:ml-[5%]">
            <h2 className="text-4xl sm:text-5xl my-4 font-extrabold">
              {movie?.name}
            </h2>
            <p className="my-4 text-[#B0B0B0]">{movie?.detail}</p>
          </section>

          {/* Right Section - Releasing Date and Cast */}
          <div className="mt-4 md:mt-0 md:w-[35%] text-center md:text-left md:ml-[5%]">
            <p className="text-2xl font-semibold">
              Releasing Date: {movie?.year}
            </p>

            <div>
              {movie?.cast.map((c, index) => (
                <ul key={index} className="mt-[1rem]">
                  <li>{c}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Movie Reviews Section */}
        <div className="mt-[3rem] mx-auto px-4 sm:px-2 md:px-6 lg:px-8 max-w-screen-xl">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
