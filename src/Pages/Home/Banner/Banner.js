import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const dataFetch = () => {
       return axios.get('http://localhost:5000/bookOptions')
        
    }
    const { data, isLoading } = useQuery(['category'], dataFetch)
    if (isLoading) {
        return <h1>Loading.......</h1>
    }
    return (

        <>

                <h1 className='text-4xl text-center mt-10 text-primary-content mb-6'>Catagories</h1>
        
         <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
            data?.data.map(cat => <>
          <div className=' card w-80 bg-gray-900 mb-6'>
            <div className='card-body'>
                    <h2>{cat.category_name}</h2>
                    <hr />
                    <div className="card-actions justify-center mt-5">
                    <button className="btn btn-cyan"><Link to={`/catagories/${cat._id}`}>
                            
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