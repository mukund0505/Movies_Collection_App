// import Main from "./Main/Main.jsx";
// import Sidebar from "./Sidebar/Sidebar.jsx";

// const AdminDashboard = () => {
//   return (
//     <>
//       <Sidebar />
//       <Main />
//     </>
//   );
// };

// export default AdminDashboard;

import Main from "./Main/Main.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Main />
    </div>
  );
};

export default AdminDashboard;
