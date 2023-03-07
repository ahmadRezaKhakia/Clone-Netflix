/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect , useState } from 'react';
import requests from '../requests';



function Account() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get(requests.popular)
      .then((response) => {
      setMovies(response.data.results);   
      })
    
  },[])
  
  console.log(movies);
 


  return (
      <div className=''>
      {
        
        movies.map(item => <div className='w-full h-full  text-white' key={item.id}>
          <div className='flex justify-around mb-8 bg-black bg-opacity-90 m-5 p-5 rounded shadow-2xl	 shadow-gray-800'>
          <div className=' flex flex-col text-center m-3  border-3'>
          <p className='sm:text-sm md:font-bold lg:text-xl w-full p-5 text-orange-400'>{item.title}</p>
            <img className='rounded' src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title} />
          </div>
          <div className='sm:w-[700px] sm:text-xs sm:m-3 lg:text-xl flex flex-col justify-center '>

            <div className='text-justify font-mono'>
              <p className='md:text-base sm:text-sm lg:m-2 xl:text-xl lg:p-2 xl:leading-10 xl:font-serif xl:font-medium '> <span className='font-bold text-orange-400 pr-3'> overview: </span>  {item.overview}</p>
            </div>
            <p className='m-2 p-2'><span className='font-bold text-orange-400 pr-3'> language: </span> {item.original_language}</p>
            <span className='m-2 p-2'><span className='font-bold text-orange-400 pr-3'> popularity: </span> {item.popularity.toFixed(0)}</span>
            <span className='m-2 p-2'><span className='font-bold text-orange-400 pr-3'> vote_average: </span> {item.vote_average}</span>
            <p className='m-2 p-2'><span className='font-bold text-orange-400 pr-3'> release_date: </span> {item.release_date}</p>
            </div>
            </div>
        </div>)
        
      }
    </div>
  )
}

export default Account;