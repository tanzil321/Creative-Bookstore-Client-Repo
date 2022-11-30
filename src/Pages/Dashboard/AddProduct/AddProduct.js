
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
// import { PropagateLoader, PulseLoader } from 'react-spinners';

import { useState } from 'react';

import { AuthContext } from '../../../contexts/AuthProvider';

const AddAproduct = () => {

    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgHostKey = process.env.REACT_APP_IMGBB
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [uploadingAnimation, setUploadingAnimation] = useState(false)
    const data = new Date()
    const date = format(data, 'PP')
    // console.log(date);

    const handleAddaProduct = (data) => {
        // setUploadingAnimation(true)
        // console.log(data.brand);
        console.log(data)
        console.log('clicked')
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {

                    const productDetails = {
                        productName: data.name,
                        image: imgData.data.url,
                        catagoryId: data.brand,
                        condition: data.condition,
                        
                        orginalPrice: data.orginalPrice,
                        resalePrice: data.resalePrice,
                        sellerNumber: data.sellerNumber,
                        sellerLocation: data.sellerLocation,
                        sellerEmail: user?.email,
                        Bookdetails: data.details,
                        postdate: date,
                        status: 'available',
                        sellerName: user?.displayName,
                        purchaseDate: data.purchaseDate,
                        paid: 'false',
                        reported: 'false'
                    }

                    // console.log(bikedetails)

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(productDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data);
                                // toast.success('Product Added SuccessFully')
                                // navigate('/dashboard/myproducts')
                                setUploadingAnimation(false)
                            }

                        })



                }


            })

    }



    const { data: catagory = [], } = useQuery({
        queryKey: ['brand'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagories')
            const data = await res.json()
            return data;
        }
    })



    return (
        <div className='h-screen mb-10 py-10 w-full'>
            {
                uploadingAnimation ? <div className='flex flex-col  items-center my-40 justify-center '>

                    <p className='md:text-xl text-normal font-semibold my-10'>Your Post is Uploading Please wait few seconds</p>
                    {/* <PropagateLoader color="#36d6d6" /> */}

                </div>
                    :
                    <>


                        <div>
                            <h1 className='text-center text-xl my-4 font-semibold'>Add A Product</h1>
                            <div className='w-[500px] rounded-lg   p-5 mx-auto '>
                                <form onSubmit={handleSubmit(handleAddaProduct)}>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Image</span>
                                        </label>
                                        <input
                                            {...register('image', { required: true })}
                                            type="file" className="file-input w-full max-w-xs" />
                                        {errors.image && <span className='mx-2'>This field is required</span>}
                                        <p className='text-sm my-1'>Please Upload 1:1 aspect Ratio Image</p>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Book Name</span>
                                        </label>
                                        <input type='text'
                                            {...register('name', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="Book Name" />
                                        {errors.name && <span className='mx-2'>This field is required</span>}
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Catagory</span>
                                        </label>
                                        <select {...register('brand', { required: true })} className="select select-bordered w-full ">
                                            <option value='Buyer'>Select Brand</option>
                                            {
                                                catagory.map((cata, i) => <option
                                                    key={i}
                                                    value={cata.catagory_id}
                                                >
                                                    {cata.catagory_name}
                                                </option>)
                                            }


                                        </select>
                                        {errors.brand && <span className='mx-2'>This field is required</span>}


                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Condition</span>
                                        </label>
                                        <select {...register('condition', { required: true })} className="select select-bordered w-full ">
                                            <option value='Select Condition' disabled>Select Condition</option>
                                            <option>Excellent</option>
                                            <option>Good</option>
                                            <option>Fair</option>

                                        </select>
                                        {errors.condition && <span className='mx-2'>This field is required</span>}


                                    </div>
                                    
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Purchase Year</span>
                                        </label>
                                        <input type='text'
                                            {...register('purchaseDate', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="YY" />
                                        {errors.purchaseDate && <span className='mx-2'>This field is required</span>}

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Details</span>
                                        </label>
                                        <textarea type='text'
                                            {...register('details', { required: true })}
                                            className='input input-bordered h-32 w-full my-2' placeholder="Details" />
                                        {errors.details && <span className='mx-2'>This field is required</span>}

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Orginal Price</span>
                                        </label>
                                        <input type='text'
                                            {...register('orginalPrice', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="Orginal Price" />
                                        {errors.orginalPrice && <span className='mx-2'>This field is required</span>}

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Resale Price</span>
                                        </label>
                                        <input type='text'
                                            {...register('resalePrice', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="Resale Price" />

                                        {errors.resalePrice && <span className='mx-2'>This field is required</span>}

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Phone Number</span>
                                        </label>
                                        <input type='text'
                                            {...register('sellerNumber', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="Number" />

                                        {errors.sellerNumber && <span className='mx-2'>This field is required</span>}

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Location</span>
                                        </label>
                                        <input type='text'
                                            {...register('sellerLocation', { required: true })}
                                            className='input input-bordered w-full my-2' placeholder="location" />

                                        {errors.sellerLocation && <span className='mx-2'>This field is required</span>}

                                    </div>

                                    <input value='Post' className='btn w-full my-2' type="submit" />
                                </form>
                            </div>

                        </div>

                    </>
            }

        </div>
    );
};

export default AddAproduct;