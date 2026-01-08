// import { fetchPhotos,fetchVideos,fetchGIF } from "./api/mediaApi"




// const App = () => {

//   // function getPhotos(){
//   //   fetchPhotos()


//   // }


//   return (
//     <div className='h-screen text-white w-full bg-black'>

//       <button className="bg-yellow-400 px-5 py-3 m-5" onClick= {async ()=> {
//         const data = await fetchPhotos('cat')

//         console.log(data.results);
//         } } >Get Photo</button>

    
    
//       <button className="bg-yellow-400 px-5 py-3 m-5"  onClick= {async ()=> {
//         const data = await fetchVideos('cat')

//         console.log(data.videos);
//         } } >Get Video</button>
      
//       <button className="bg-yellow-400 px-5 py-3 m -50" onClick={async ()=>{
//         const data = await fetchGIF('cat');

//         console.log(data.data.results)

//       }}>
//         Get GIF
//       </button>



//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Searchbar from './components/Searchbar'
// import Tabs from './components/Tabs';

// const App = () => {
//   return (
//     <div className='h-screen text-white w-full bg-gray-950'>

//       <Searchbar/>
//       <Tabs/>

      
//     </div>
//   )
// }

// export default App


// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
  
const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App