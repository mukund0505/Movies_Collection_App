// import { useState } from "react";
// import {
//   useCreateGenreMutation,
//   useUpdateGenreMutation,
//   useDeleteGenreMutation,
//   useFetchGenresQuery,
// } from "../../redux/api/genre.js";

// import { toast } from "react-toastify";
// import GenreForm from "../../components/GenreForm.jsx";
// import Modal from "../../components/Modal.jsx";

// const GenreList = () => {
//   const { data: genres, refetch } = useFetchGenresQuery();
//   const [name, setName] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const [updatingName, setUpdatingName] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);

//   const [createGenre] = useCreateGenreMutation();
//   const [updateGenre] = useUpdateGenreMutation();
//   const [deleteGenre] = useDeleteGenreMutation();

//   console.log("genres:", genres);

//   const handleCreateGenre = async (e) => {
//     e.preventDefault();

//     if (!name) {
//       toast.error("Genre name is required");
//       return;
//     }

//     try {
//       const result = await createGenre({ name }).unwrap();

//       if (result.error) {
//         toast.error(result.error);
//       } else {
//         setName("");
//         toast.success(`${result.name} is created.`);
//         refetch();
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Creating genre failed, try again.");
//     }
//   };

//   const handleUpdateGenre = async (e) => {
//     e.preventDefault();

//     if (!updateGenre) {
//       toast.error("Genre name is required");
//       return;
//     }

//     try {
//       const result = await updateGenre({
//         id: selectedGenre._id,
//         updateGenre: {
//           name: updatingName,
//         },
//       }).unwrap();

//       if (result.error) {
//         toast.error(result.error);
//       } else {
//         toast.success(`${result.name} is updated`);
//         refetch();
//         setSelectedGenre(null);
//         setUpdatingName("");
//         setModalVisible(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteGenre = async () => {
//     try {
//       const result = await deleteGenre(selectedGenre._id).unwrap();

//       if (result.error) {
//         toast.error(result.error);
//       } else {
//         toast.success(`${result.name} is deleted.`);
//         refetch();
//         setSelectedGenre(null);
//         setModalVisible(false);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Genre deletion failed. Tray again.");
//     }
//   };

//   return (
//     <div className="ml-[10rem] flex flex-col md:flex-row">
//       <div className="md:w-3/4 p-3">
//         <h1 className="h-12">Manage Genres</h1>
//         <GenreForm
//           value={name}
//           setValue={setName}
//           handleSubmit={handleCreateGenre}
//         />

//         <br />

//         {/* <div className="flex flex-wrap">
//           {genres?.map((genre) => (
//             <div key={genre._id}>
//               <button
//                 className="bg-white border border-teal-500 text-teal-500 py-2 px-4 rounded-lg m-3 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
//                 onClick={() => {
//                   {
//                     setModalVisible(true);
//                     setSelectedGenre(genre);
//                     setUpdatingName(genre.name);
//                   }
//                 }}
//               >
//                 {genre.name}
//               </button>
//             </div>
//           ))}
//         </div> */}

//         <div className="flex flex-wrap">
//           {genres ? (
//             genres.length > 0 ? (
//               genres.map((genre) => (
//                 <div key={genre._id}>
//                   <button
//                     className="bg-white border border-teal-500 text-teal-500 py-2 px-4 rounded-lg m-3 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
//                     onClick={() => {
//                       setModalVisible(true);
//                       setSelectedGenre(genre);
//                       setUpdatingName(genre.name);
//                     }}
//                   >
//                     {genre.name}
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p>No genres available.</p>
//             )
//           ) : (
//             <p>Loading genres...</p>
//           )}
//         </div>

//         <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
//           <GenreForm
//             value={updatingName}
//             setValue={(value) => setUpdatingName(value)}
//             handleSubmit={handleUpdateGenre}
//             buttonText="Update"
//             handleDelete={handleDeleteGenre}
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default GenreList;

import { useState } from "react";
import {
  useCreateGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
  useFetchGenresQuery,
} from "../../redux/api/genre.js";

import { toast } from "react-toastify";
import GenreForm from "../../components/GenreForm.jsx";
import Modal from "../../components/Modal.jsx";

const GenreList = () => {
  const { data: genres, refetch } = useFetchGenresQuery();
  const [name, setName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [updatingName, setUpdatingName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [createGenre] = useCreateGenreMutation();
  const [updateGenre] = useUpdateGenreMutation();
  const [deleteGenre] = useDeleteGenreMutation();

  const handleCreateGenre = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Genre name is required");
      return;
    }

    try {
      const result = await createGenre({ name }).unwrap();

      if (result.error) {
        toast.error(result.error);
      } else {
        setName("");
        toast.success(`${result.name} is created.`);
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Creating genre failed, try again.");
    }
  };

  const handleUpdateGenre = async (e) => {
    e.preventDefault();

    if (!updatingName) {
      toast.error("Genre name is required");
      return;
    }

    try {
      const result = await updateGenre({
        id: selectedGenre._id,
        updateGenre: {
          name: updatingName,
        },
      }).unwrap();

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(`${result.name} is updated`);
        refetch();
        setSelectedGenre(null);
        setUpdatingName("");
        setModalVisible(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteGenre = async () => {
    try {
      const result = await deleteGenre(selectedGenre._id).unwrap();

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(`${result.name} is deleted.`);
        refetch();
        setSelectedGenre(null);
        setModalVisible(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Genre deletion failed. Try again.");
    }
  };

  return (
    <div className="ml-0 md:ml-[10rem] flex flex-col md:flex-row px-4 py-6">
      <div className="md:w-3/4 w-full p-3">
        <h1 className="text-2xl font-bold mb-4">Manage Genres</h1>
        <GenreForm
          value={name}
          setValue={setName}
          handleSubmit={handleCreateGenre}
        />

        <div className="flex flex-wrap mt-6">
          {genres ? (
            genres.length > 0 ? (
              genres.map((genre) => (
                <div
                  key={genre._id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4"
                >
                  <button
                    className="bg-white border border-teal-500 text-teal-500 py-2 px-4 rounded-lg w-full hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                    onClick={() => {
                      setModalVisible(true);
                      setSelectedGenre(genre);
                      setUpdatingName(genre.name);
                    }}
                  >
                    {genre.name}
                  </button>
                </div>
              ))
            ) : (
              <p>No genres available.</p>
            )
          ) : (
            <p>Loading genres...</p>
          )}
        </div>

        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
          <GenreForm
            value={updatingName}
            setValue={setUpdatingName}
            handleSubmit={handleUpdateGenre}
            buttonText="Update"
            handleDelete={handleDeleteGenre}
          />
        </Modal>
      </div>
    </div>
  );
};

export default GenreList;
