// import SecondaryCard from "./SecondaryCard.jsx";
// import VideoCard from "./VideoCard.jsx";
// import RealTimeCard from "./RealTimeCard.jsx";

// import {
//   useGetTopMoviesQuery,
//   useGetAllMoviesQuery,
// } from "../../../../redux/api/movies.js";
// import { useGetUsersQuery } from "../../../../redux/api/users.js";

// const Main = () => {
//   const { data: topMovies } = useGetTopMoviesQuery();
//   const { data: visitors } = useGetUsersQuery();
//   const { data: allMovies } = useGetAllMoviesQuery();

//   const totalCommentsLength = allMovies?.map((m) => m.numReviews);
//   const sumOfCommentsLength = totalCommentsLength?.reduce(
//     (acc, length) => acc + length,
//     0
//   );

//   return (
//     <div>
//       <section className="flex justify-around">
//         <div className="ml-[14rem] mt-10">
//           <div className="-translate-x-4 flex">
//             <SecondaryCard
//               pill="Users"
//               content={visitors?.length}
//               info="20.2k more then usual"
//               gradient="from-teal-500 to-lime-400"
//             />
//             <SecondaryCard
//               pill="Comments"
//               content={sumOfCommentsLength}
//               info="742.8k more then usual"
//               gradient="from-[#CCC514] to-[#CDCB8E]"
//             />
//             <SecondaryCard
//               pill="Movies"
//               content={allMovies?.length}
//               info="372+ more then usual"
//               gradient="from-green-500 to-lime-400"
//             />
//           </div>
//           <div className="flex justify-between w-[90%] text-white mt-10 font-bold">
//             <p>Top Content</p>
//             <p>Comments</p>
//           </div>

//           {topMovies?.map((movie) => (
//             <VideoCard
//               key={movie._id}
//               image={movie.image}
//               title={movie.name}
//               date={movie.year}
//               comments={movie.numReviews}
//             />
//           ))}
//         </div>

//         <div>
//           <RealTimeCard />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Main;

import SecondaryCard from "./SecondaryCard.jsx";
import VideoCard from "./VideoCard.jsx";
import RealTimeCard from "./RealTimeCard.jsx";

import {
  useGetTopMoviesQuery,
  useGetAllMoviesQuery,
} from "../../../../redux/api/movies.js";
import { useGetUsersQuery } from "../../../../redux/api/users.js";

const Main = () => {
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: visitors } = useGetUsersQuery();
  const { data: allMovies } = useGetAllMoviesQuery();

  const totalCommentsLength = allMovies?.map((m) => m.numReviews);
  const sumOfCommentsLength = totalCommentsLength?.reduce(
    (acc, length) => acc + length,
    0
  );

  return (
    <main className="flex-1 p-4">
      <section className="flex flex-wrap justify-around gap-4">
        <SecondaryCard
          pill="Users"
          content={visitors?.length}
          info="20.2k more than usual"
          gradient="from-teal-500 to-lime-400"
        />
        <SecondaryCard
          pill="Comments"
          content={sumOfCommentsLength}
          info="742.8k more than usual"
          gradient="from-[#CCC514] to-[#CDCB8E]"
        />
        <SecondaryCard
          pill="Movies"
          content={allMovies?.length}
          info="372+ more than usual"
          gradient="from-green-500 to-lime-400"
        />
      </section>

      <div className="mt-10 text-white">
        <div className="flex justify-between">
          <p className="font-bold">Top Content</p>
          <p className="font-bold">Comments</p>
        </div>

        {topMovies?.map((movie) => (
          <VideoCard
            key={movie._id}
            image={movie.image}
            title={movie.name}
            date={movie.year}
            comments={movie.numReviews}
          />
        ))}
      </div>

      <RealTimeCard />
    </main>
  );
};

export default Main;
