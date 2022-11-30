import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const MyProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const{user} = useContext(AuthContext)
    const url = `https://creative-bookstore-server.vercel.app/orders?email=${user?.email}`;

    const { data: submitted = [],refetch } = useQuery({
        queryKey: ['submitted', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteDoctor = dlt => {
        fetch(`https://creative-bookstore-server.vercel.app/orders/${dlt._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                toast.success('Deleted successfully')
            }
        })
    }
    
    
    const handleAdvertise = (id) => {
        fetch(`https://creative-bookstore-server.vercel.app/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('bookAccessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Product is Live on Ad Section')
        })
    }


    const handleSold = (id) => {
        fetch(`https://creative-bookstore-server.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Product Sold')
        })
    }

    return (
        <div>
            <h3 className="text-3xl  mb-5">My Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitted &&
                            submitted?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td><button onClick={()=>handleSold(booking._id)} className="btn btn-sm btn-success">SOLD</button></td>
                                <td><button onClick={()=>handleAdvertise(booking._id)} className="btn btn-sm btn-success">Advirtise</button></td>
                                <td>{booking.category_name}</td>
                                <td>{booking.price}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.category_name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;