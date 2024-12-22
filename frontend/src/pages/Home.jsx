// import Header from "./Movies/Header.jsx";
// import MoviesContainerPage from "./Movies/MoviesContainerPage.jsx";

// const Home = () => {
//   return (
//     <>
//       <Header />
//       {/* changed css here */}
//       <section className="mt-[10rem] md:mt-[7rem] sm:mt-[5rem] px-4 sm:px-2 md:px-6 lg:px-8">
//         <MoviesContainerPage />
//       </section>
//     </>
//   );
// };

// export default Home;

import Header from "./Movies/Header.jsx";
import MoviesContainerPage from "./Movies/MoviesContainerPage.jsx";

const Home = () => {
  return (
    <>
      <Header />
      {/* Responsive section spacing and padding */}
      <section className="mt-[8rem] md:mt-[6rem] sm:mt-[4rem] px-4 sm:px-2 md:px-6 lg:px-8">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;
