// const Modal = ({ isOpen, onClose, children }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="fixed inset-0 bg-black opacity-50"></div>
//           <div className="absolute top-[40%] left-[20%] bg-white p-4 rounded-lg z-10 text-right">
//             <button
//               className="text-black font-semibold hover:text-gray-700 focus:outline-none mr-2"
//               onClick={onClose}
//             >
//               X
//             </button>
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Modal;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="absolute top-[40%] left-[10%] sm:left-[20%] bg-white p-4 rounded-lg z-10 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <button
              className="text-black font-semibold hover:text-gray-700 focus:outline-none mr-2 absolute top-2 right-2"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
