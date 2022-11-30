import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import BookingModal from "../Modal/BookingModal/BookingModal";

const Catagories = () => {
  const books = useLoaderData();
  const { setData } = useContext(AuthContext);
const [bookDetails,setBookDetails] = useState(null)
  const handleInfo = (name, price) => {
    console.log(name, price);
    var mod = {
      name,
      price,
    };

    setData(mod);
  };

  
  return (
    <div>
      <h1 className="">{}</h1>
      <div>
        {books?.map((details) => (
          <div className="card mt-10 card-side bg-base-100 shadow-xl">
            <figure>
              <img src={details.image} alt="Movie" />
            </figure>
            
              <h2 className="card-title">{details.productName}</h2>
              <div className="badge badge-secondary ">{details.sellerLocation}</div>
              <div className="badge badge-secondary">
                Seller : {details.sellerName}
              </div>
              <div className="badge badge-secondary">
                Posted On : {details.postdate} days ago
              </div>
              <div className="badge badge-primary mt-10">
                Original Price : {details.orginalPrice}$
              </div>
              <div className="badge badge-primary">
                Resale Price : {details.resalePrice}$
              </div>
              <div className="badge badge-primary">
                Condition : {details.condition}$
              </div>

              <p className="text-2xl text-center mt-10">
                Want To Purchase Now ?
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() =>
                    handleInfo(details.productName, details.resalePrice)
                  }
                >
                  <label onClick={()=>setBookDetails(details)} className="btn btn-primary" htmlFor="booking-modal">
                    Book Now
                  </label>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        bookDetails &&
        <BookingModal
            bookDetails={bookDetails}
            setBookDetails={setBookDetails}
          ></BookingModal>
    }
    </div>
  );
};

export default Catagories;
