import { useState } from 'react'
import Todolist from './Todolist'

function App() {


  return (
    <>
     
 <Todolist/>
    </>
  )
}

export default App






// import './App.css';
// import Navbar from './components/navbar'
// import Home from './components/home';
// import AddVideos from './components/addVideos'
// import PageNotFound from './components/pageNotFound';
// import { BrowserRouter ,Routes,Route } from 'react-router-dom'; 
// import AddShort from './components/addShort';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route element={<Home />} path='/' />
//           <Route element={<AddVideos/>} path='/addVideo' />
//           <Route element={<AddShort/>} path='/addShort' />
//           <Route element={<PageNotFound />} path='*' />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// //git add .
// //git commit -m "msg"
// //git push