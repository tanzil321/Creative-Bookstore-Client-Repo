import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const dataFetch = () => {
       return axios.get('https://creative-bookstore-server.vercel.app/catagories')
        
    }
    const { data, isLoading } = useQuery(['category'], dataFetch,{
        refetchOnWindowFocus:true,
        refetchOnReconnect:true,
        refetchIntervalInBackground:true,

    })
    if (isLoading) {
        return <progress className="progress w-56 text-center"></progress>
    }

    console.log(data.data)

    return (

        <>

                <h1 className='text-4xl  text-center mt-10 text-primary-content mb-6'>Catagories</h1>
        
         <div className='grid ml-12 mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
            data?.data.map(cat => <>
          <div className=' card w-80 bg-gray-900 mb-6'>
            <div className='card-body'>
                    <h2 className='text-center'>{cat.catagory_name}</h2>
                    <hr />
                    <div className="card-actions justify-center mt-5">
                    <button className="btn btn-cyan"><Link to={`/catagories/${cat.catagory_id}`}>
                            
                            Browse now
                    </Link></button>
                     </div>
                    <p></p>
            </div>
            
            </div>  
            
            
            </>)
            }
            
        </div>
        
        
        </>
        
        
       
    );
};

export default Banner;