import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Modal/BookingModal/BookingModal';

const Catagories = () => {
    const books = useLoaderData()
    console.log(books);
    return (
        <div>
           <h1 className=''>{}</h1> 
           <div>
            {
            books.category_products.map(details=>
                <div className="card mt-10 card-side bg-base-100 shadow-xl">
  <figure><img src={details.p_image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{details.p_name}</h2>
    <div className='badge badge-secondary '>{details.location}</div>
    <div className='badge badge-secondary'>Seller : {details.p_seller}</div>
    <div className='badge badge-secondary'>Posted On : {details.p_posted_time} days ago</div>
    <div className='badge badge-primary mt-10'>Original Price : {details.p_price_original}$</div>
    <div className='badge badge-primary'>Resale Price : {details.p_price_resel}$</div>
    
    <p className='text-2xl text-center mt-10'>Want To Purchase Now ?</p>
    <div className="card-actions justify-end">
      <label className="btn btn-primary" htmlFor="booking-modal">Purchase</label>
    </div>
  </div>
</div>
                
                )

            }


           </div>
           <BookingModal>


           </BookingModal>
        </div>
    );
};

export default Catagories;