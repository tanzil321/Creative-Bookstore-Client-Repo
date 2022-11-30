import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import BookingModal from "../Modal/BookingModal/BookingModal";

const Catagories = () => {
  const books = useLoaderData();
  const { setData } = useContext(AuthContext);
// const [book]
  const handleInfo = (name, price) => {
    console.log(name, price);
    var mod = {
      name,
      price,
    };

    setData(mod);
  };

  //     productName
  // image
  // catagoryId
  // condition
  // orginalPrice
  // resalePrice
  // sellerNumber
  // sellerLocation
  // sellerEmail
  // Bookdetails
  // postdate
  // status
  // sellerName
  // purchaseDate
  // paid
  // reported

  return (
    <div>
      <h1 className="">{}</h1>
      <div>
        {books?.map((details) => (
          <div className="card mt-10 card-side bg-base-100 shadow-xl">
            <figure>
              <img src={details.image} alt="Movie" />
            </figure>
            <div className="card-body">
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
                  <label className="btn btn-primary" htmlFor="booking-modal">
                    Book Now
                  </label>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default Catagories;
