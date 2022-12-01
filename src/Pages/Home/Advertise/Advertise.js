import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Cards from '../../Catagories/Cards';
import BookingModal from '../../Modal/BookingModal/BookingModal';

const Advertise = () => {
    const [advertiseBooks, setAdvertiseBooks] = useState([])
    const [bookDetails, setBookDetails] = useState(null);
  const { setData,user } = useContext(AuthContext);

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
                const books = data.filter(book => book.advertise === 'true' && book.paid !== 'true');
                setAdvertiseBooks(books)
            })

    }, [])
    return (
        <div>
            <div>
            <div>
      <h1 className="">{}</h1>
      <div>
        {advertiseBooks?.map((details) =><Cards
         key={details._id}
         details={details}
         loginUser={user}
         setBookDetails={setBookDetails}
         handleInfo={handleInfo}

        >
          
        </Cards>  )}
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