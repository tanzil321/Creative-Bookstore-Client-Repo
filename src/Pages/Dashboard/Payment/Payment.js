import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData } from 'react-router-dom';

import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const books = useLoaderData()
    console.log('here',books);
    // const navigation = useNavigation();
    const {  price  } = books;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            
            {/* <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on  at </p> */}
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={books}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;