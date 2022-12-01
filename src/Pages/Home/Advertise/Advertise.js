import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModal from '../../Modal/BookingModal/BookingModal';

const Advertise = () => {
    const [advertiseBooks, setAdvertiseBooks] = useState([])
    const [bookDetails, setBookDetails] = useState(null);
  const { setData } = useContext(AuthContext);

    const handleInfo = (name, price) => {
        console.log(name, price);
        var mod = {
          name,
          price,
        };
    
        setData(mod);
      };
    useEffect(() => {
        fetch('https://creative-bookstore-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                const books = data.filter(book => book.advertise === 'true');
                setAdvertiseBooks(books)
            })

    }, [])
    return (
        <div>
            <div>
            <div>
      <h1 className="">{}</h1>
      <div>
        {advertiseBooks?.map((details) => (
          <div className="card mt-10 card-side bg-base-100 shadow-xl">
            <figure>
              <img src={details.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{details.productName}</h2>
              <div className="badge badge-secondary ">
                {details.sellerLocation}
              </div>
              <div className="badge badge-secondary">
                Seller : {details.sellerName}
              </div>
              <div>
                {details.status === "available" ? (
                  <>
                    <p className="bg-green-500 shadow-lg absolute top-4 right-4 w-24 px-4 py-2 rounded-full text-white">
                      Available
                    </p>
                  </>
                ) : (
                  <>
                    <p className="bg-red-500 shadow-lg absolute top-4 right-4 w-16 px-4 py-2 rounded-full text-white">
                      Sold
                    </p>
                  </>
                )}
              </div>
              <div className="badge badge-secondary">
                Posted On : {details.postdate} 
              </div>
              <div className="badge badge-primary mt-10">
                Original Price : {details.orginalPrice}$
              </div>
              <div className="badge badge-primary">
                Resale Price : {details.resalePrice}$
              </div>
              <div className="badge badge-primary">
                Condition : {details.condition}
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
                  <label
                    onClick={() => setBookDetails(details)}
                    className="btn btn-primary"
                    htmlFor="booking-modal"
                  >
                    Book Now
                  </label>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
            </div>

            {bookDetails && (
        <BookingModal
          bookDetails={bookDetails}
          setBookDetails={setBookDetails}
        ></BookingModal>
      )}
            </div>
            </div>
    );
};

export default Advertise;