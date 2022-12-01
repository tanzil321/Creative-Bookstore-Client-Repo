import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import BookingModal from "../Modal/BookingModal/BookingModal";
import Cards from "./Cards";

const Catagories = () => {
  const books = useLoaderData();
  const { setData } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState(null);
  const handleInfo = (name, price) => {
    console.log(name, price);
    var mod = {
      name,
      price,
    };

    setData(mod);
  };

  const {user} = useContext(AuthContext)


  return (
    <div>
      <h1 className="">{}</h1>
      <div>
        {books?.map((details) => <Cards
        key={details._id}
        details={details}
        loginUser={user}
        setBookDetails={setBookDetails}
        handleInfo={handleInfo}
        >

          
        </Cards>
         )}
      </div>
      {bookDetails && (
        <BookingModal
          bookDetails={bookDetails}
          setBookDetails={setBookDetails}
        ></BookingModal>
      )}
    </div>
  );
};

export default Catagories;
