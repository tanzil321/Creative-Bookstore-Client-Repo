import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const{user,data} = useContext(AuthContext)
    const url = `https://creative-bookstore-server.vercel.app/users`;

    const { data: submitted = [] ,refetch } = useQuery({
        queryKey: ['submitted', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            const sellers = data.filter(user=>user.role === 'seller')
            return sellers;
        }
    })

    console.log(submitted)

    const verifySeller = email=>{
        fetch(`https://creative-bookstore-server.vercel.app/verifyseller?email=${email}`, {
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('SellerVerified')
        })
    }

    const handleDeleteDoctor = id => {
        fetch(`https://creative-bookstore-server.vercel.app/users/${id}`, {
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
    return (
        <div>
            <h3 className="text-3xl mb-5">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Roles</th>
                            <th>Name</th>
                            <th>Verify</th>
                           
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitted &&
                            submitted?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.role}</td>
                                <td>{booking.name}</td>
                                <td><button className="btn btn-sm btn-success" onClick={()=>verifySeller(booking.email)}>VerifySeller</button></td>
                                <td>
                                    <label onClick={() => handleDeleteDoctor(booking._id)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSellers;