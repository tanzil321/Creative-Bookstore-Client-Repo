import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookingModal = ({ setBookDetails, bookDetails }) => {
    console.log(bookDetails)
    const{user,data}= useContext(AuthContext)
    // let [datas,setDatas]=useState([])
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        
       const booking = {
        name,
        email,
        phone,
           price,
        image:bookDetails.image,
        
       }
        fetch('http://localhost:5000/submitted',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            // setDatas(data)
            if(data.acknowledged){
                
                toast.success('Booking Confirmed')
                setBookDetails(null)
            }
            else{
                toast.error(data.message)
            }
        })
        
    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle " />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {/* <h3 className="text-lg font-bold">{treatmentName}</h3> */}
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name="name" type="text" defaultValue={data.name} disabled  className="input w-full input-bordered " />
                    <input name="price" type="text" defaultValue={data.price} disabled  placeholder="Your Name"  className="input w-full input-bordered" />
                    <input name="displayname" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name"  className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email}  disabled  placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                    <br />
                    <button className='btn btn-accent w-full' type="submit" value="Submit">Submit</button> 
                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;