import React from 'react';
import Header from './components/header';
import Products from './components/product';

import CategoriesComponent from './components/category';
import ActiveCategory from './components/categories';



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import Votes from './components/vote-counter';
// import Status from './components/status';


export default props => {
  return (
    <>
       <Header />
      <CategoriesComponent />
      <ActiveCategory/>
      <Products />
      
    </>
  )
};