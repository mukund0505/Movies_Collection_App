// import { useGetUsersQuery } from "../../../../redux/api/users.js";

// const PrimaryCard = () => {
//   const { data: visitors } = useGetUsersQuery();

//   return (
//     <div className="w-[100%] h-[10%]  bg-[#282828] text-white rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
//       <p>You have {visitors?.length} new users, watching your content.</p>
//     </div>
//   );
// };

// export default PrimaryCard;

import { useGetUsersQuery } from "../../../../redux/api/users.js";

const PrimaryCard = () => {
  const { data: visitors } = useGetUsersQuery();

  return (
    <div className="w-full bg-[#282828] text-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">Congratulations!</h2>
      <p>You have {visitors?.length || 0} new users watching your content.</p>
    </div>
  );
};

export default PrimaryCard;
