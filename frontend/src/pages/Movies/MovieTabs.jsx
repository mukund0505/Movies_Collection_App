// import { Link } from "react-router-dom";

// const MovieTabs = ({ userInfo, submitHandler, comment, setComment, movie }) => {
//   return (
//     <div>
//       <section>
//         {userInfo ? (
//           <form onSubmit={submitHandler}>
//             <div className="my-2">
//               <label htmlFor="comment" className="block text-xl mb-2">
//                 Write Your Review
//               </label>

//               <textarea
//                 id="comment"
//                 rows="3"
//                 required
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="p-2 border rounded-lg xl:w-[40rem] text-black"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-teal-600 text-white py-2 px-4 rounded-lg"
//             >
//               Submit
//             </button>
//           </form>
//         ) : (
//           <p>
//             Please <Link to="/login">Sign In</Link> to write a review
//           </p>
//         )}
//       </section>

//       <section className="mt-[3rem]">
//         <div>{movie?.reviews.length === 0 && <p>No Reviews</p>}</div>

//         <div>
//           {movie?.reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-[#1A1A1A] p-4 rounded-lg w-[50%] mt-[2rem]"
//             >
//               <div className="flex justify-between">
//                 <strong className="text-[#B0B0B0]">{review.name}</strong>
//                 <p className="text-[#B0B0B0]">
//                   {review.createdAt.substring(0, 10)}
//                 </p>
//               </div>

//               <p className="my-4">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MovieTabs;

// import { Link } from "react-router-dom";

// const MovieTabs = ({ userInfo, submitHandler, comment, setComment, movie }) => {
//   return (
//     <div>
//       <section>
//         {userInfo ? (
//           <form onSubmit={submitHandler}>
//             <div className="my-2">
//               <label htmlFor="comment" className="block text-xl mb-2">
//                 Write Your Review
//               </label>

//               <textarea
//                 id="comment"
//                 rows="3"
//                 required
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="p-2 border rounded-lg w-full sm:w-[80%] md:w-[60%] xl:w-[40rem] text-black"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-teal-600 text-white py-2 px-4 rounded-lg"
//             >
//               Submit
//             </button>
//           </form>
//         ) : (
//           <p>
//             Please{" "}
//             <Link to="/login" className="text-teal-600 hover:underline">
//               Sign In
//             </Link>{" "}
//             to write a review
//           </p>
//         )}
//       </section>

//       <section className="mt-[3rem]">
//         <div>{movie?.reviews.length === 0 && <p>No Reviews</p>}</div>

//         <div>
//           {movie?.reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-[#1A1A1A] p-4 rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto mt-[2rem]"
//             >
//               <div className="flex justify-between">
//                 <strong className="text-[#B0B0B0]">{review.name}</strong>
//                 <p className="text-[#B0B0B0]">
//                   {review.createdAt.substring(0, 10)}
//                 </p>
//               </div>

//               <p className="my-4">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MovieTabs;

import { Link } from "react-router-dom";

const MovieTabs = ({ userInfo, submitHandler, comment, setComment, movie }) => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Review Form Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 xl:w-1/3">
          {userInfo ? (
            <form onSubmit={submitHandler} className="w-full">
              <div className="my-2">
                <label htmlFor="comment" className="block text-xl mb-2">
                  Write Your Review
                </label>

                <textarea
                  id="comment"
                  rows="3"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="p-2 border rounded-lg w-full sm:w-[80%] md:w-[60%] xl:w-[40rem] text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded-lg mt-4"
              >
                Submit
              </button>
            </form>
          ) : (
            <p>
              Please{" "}
              <Link to="/login" className="text-teal-600 hover:underline">
                Sign In
              </Link>{" "}
              to write a review
            </p>
          )}
        </div>

        {/* Movie Image Section */}
        <div className="w-full lg:w-1/2 xl:w-2/3">
          {/* Assuming you have an image of the movie to show */}
          <img
            src={movie?.imageUrl}
            alt={movie?.title}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mt-[3rem]">
        <div>{movie?.reviews.length === 0 && <p>No Reviews</p>}</div>

        <div>
          {movie?.reviews.map((review) => (
            <div
              key={review._id}
              className="bg-[#1A1A1A] p-4 rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto mt-[2rem]"
            >
              <div className="flex justify-between">
                <strong className="text-[#B0B0B0]">{review.name}</strong>
                <p className="text-[#B0B0B0]">
                  {review.createdAt.substring(0, 10)}
                </p>
              </div>

              <p className="my-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieTabs;
