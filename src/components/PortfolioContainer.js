// import React, { useState } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');

  
//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//     </div>
//   );
// }}
