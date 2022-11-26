import React from 'react';

const MyProduct = () => {
    return (
        <div>
            <div>
            <h3 className="text-3xl mb-5">My Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sales Status</th>
                            <th>Price</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            submitted &&
                            submitted?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                       booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                       <button className='btn btn-primary'>Pay</button>
                                       </Link>
                                    }
                                     {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyProduct;