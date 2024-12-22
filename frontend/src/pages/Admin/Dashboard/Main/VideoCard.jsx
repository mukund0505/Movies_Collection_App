// const VideoCard = ({ image, title, date, comments }) => {
//   return (
//     <>
//       <div className="flex items-center w-[90%] mt-5">
//         <div>
//           <img src={image} alt="Card Image" className="h-[3rem]" />
//         </div>

//         <div className="ml-4">
//           <h2 className="text-lg text-white">{title}</h2>
//           <p className="text-gray-500 mb-3">{date}</p>
//         </div>

//         <div className="flex-grow mb-5 flex justify-end items-center">
//           <div className="text-white text-lg">{comments}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoCard;

const VideoCard = ({ image, title, date, comments }) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-[#1a1a1a] rounded-lg shadow-lg mt-4">
      <img src={image} alt="Card Image" className="h-12 w-12 rounded-lg" />
      <div className="flex-1">
        <h2 className="text-lg text-white font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
      <div className="text-white font-bold">{comments}</div>
    </div>
  );
};

export default VideoCard;
