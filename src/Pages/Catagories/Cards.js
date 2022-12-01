import React, { useEffect, useState } from "react";

const Cards = ({ details, handleInfo, setBookDetails }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://creative-bookstore-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const users = data.filter((user) => user.email === details.sellerEmail);
        setUser(users);
      });
  });

  console.log(user);

  return (
    <div>
      <div className="card mt-10 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={details.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details.productName}</h2>
          <div className="badge badge-secondary ">{details.sellerLocation}</div>
          <div className="badge badge-secondary">
            Seller : {details.sellerName}
            {user[0]?.verifySeller && (
            <p className='mx-2 bg-blue-500 rounded-full'>

<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </p>
            )}
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
            Posted On : {details.postdate} days ago
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

          <p className="text-2xl text-center mt-10">Want To Purchase Now ?</p>
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
    </div>
  );
};

export default Cards;
