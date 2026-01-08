// import React from 'react'
// import {useState} from 'react'
// import { useDispatch } from 'react-redux';
// import { setQuery } from '../redux/features/searchSlice';

// const Searchbar = () => {

//     const [text, setText] = useState('');

//     const dispatch = useDispatch();



//     const sumbitHandler = (e)=>{
//       e.preventDefault();
      
//       dispatch(setQuery(text));

//       setText('');
//     }

//   return (
//     <div>
//         <form onSubmit={(e)=>{
//           sumbitHandler(e)
//         }} className='flex bg-gray-800 gap-5 p-10'>

//             <input
//             value={text} 
//             onChange={(e)=>{
//               setText(e.target.value)
//             }}
//              required className='border-2 px-4 py-2 text-xl rounded outline-none' type="text" placeholder='Search anything' />

//             <button className='active:scale-95 cursor-pointerborder-2 px-4 py-2 text-xl rounded outline-none' >Search</button>
//         </form>
      
//     </div>
//   )
// }

// export default Searchbar



import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const Searchbar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex  bg-(--c1) gap-5 py-10 px-10'>

                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    required
                    className='w-full border-2 px-6 py-3 text-xl rounded outline-none'
                    type="text"
                    placeholder='Search anything...' />

                <button className='active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none'>Search</button>
            </form>
        </div>
    )
}

export default Searchbar