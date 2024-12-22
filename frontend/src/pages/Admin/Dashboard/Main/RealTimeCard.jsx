// import { useGetUsersQuery } from "../../../../redux/api/users.js";
// import PrimaryCard from "./PrimaryCard.jsx";

// const RealTimeCard = () => {
//   const { data: visitors } = useGetUsersQuery();

//   return (
//     <div className="w-[20rem] mt-10 bg-[#282828] text-[#fff] rounded-lg shadow-lg p-4">
//       <h2 className="text-2xl font-bold mb-2">Realtime</h2>
//       <p className="text-gray-500 mb-4">Update Live</p>
//       <div className="border-t border-[#666] my-7"></div>
//       <h2 className="text-2xl font-bold mb-2">{visitors?.length}</h2>
//       <p className="text-gray-500 mb-2">Subscribe</p>
//       <hr />

//       <PrimaryCard />
//     </div>
//   );
// };

// export default RealTimeCard;

import { useGetUsersQuery } from "../../../../redux/api/users.js";
import PrimaryCard from "./PrimaryCard.jsx";

const RealTimeCard = () => {
  const { data: visitors } = useGetUsersQuery();

  return (
    <div className="mt-10 w-full max-w-md mx-auto bg-[#282828] text-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">Realtime</h2>
      <p className="text-gray-400 mb-4">Update Live</p>
      <div className="border-t border-[#666] my-7"></div>
      <h2 className="text-2xl font-bold">{visitors?.length}</h2>
      <p className="text-gray-400 mb-2">Subscribers</p>
      <hr />
      <PrimaryCard />
    </div>
  );
};

export default RealTimeCard;
