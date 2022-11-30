import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link,  useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { createUser,  updateUser, setRoles } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault()
        e.target.reset()

        const name = data.firstName
        const number = data.number
        const email = data.mail
        const password = data.password
        const address = data.address
        const role = data.role

        const UserInfo = {
            name,
            PhoneNumber: number,
            email, password, address, role
        }
        setRoles(role)
        
            
           
                createUser(email, password)
                    .then(result => {
                        const user = result.user

                        
                        console.log(user);
                        toast('User Created Successfully.')
                        updateUser(name)
                            .then(() => {
                                console.log('Display Name Updated')
                                fetch('http://localhost:5000/roles', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": 'application/json',
                                    },
                                    body: JSON.stringify(UserInfo)
                                })
                                    .then(res => {
                                        res.json()
                                        

                                    })
                                    .then(info => {
                                        console.log(info)
                                    })
                            })
                            .catch(error => {
                                console.log(error.message);
                            })
                        console.log(user);
                    })
                    .catch(error => {
                        
                    })
            

        console.log(name, number, email, password, address, role)


    };

    return (
        <div>

            <h1 className="text-purple-700 font-bold text-center text-2xl mt-10 mb-6">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto text-center'>
                <label htmlFor="">Name</label>
                <br />
                <input {...register("firstName",
                    { required: true, maxLength: 15 })} />
                {errors?.firstName?.type === "required" && <p className='text-red-900'>Name is required</p>}
                {errors?.firstName?.type === "maxLength" && (
                    <p>Your name cannot exceed 15 characters</p>
                )}
                <br />
                <label htmlFor="">Phone Number</label>
                <br />
                <input type="tel" {...register("number", { required: true })} />
                {
                    errors?.number?.type === 'required' && <p className='text-red-900'>Phone number is required </p>
                }
                <br />
                <label htmlFor="">Email</label>
                <br />
                <input type='email'
                    {...register("mail", { required: "Email Address is required" })}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p role="alert" className='text-red-900'>{errors.mail?.message}</p>}
                <br />

                <label htmlFor="">Address</label>
                <br />
                <input type="text" {...register("address", { required: true })} />
                {
                    errors?.address?.type === 'required' && <p className='text-red-900'>Address is required </p>
                }
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" {...register('password', {
                    required: true,
                   
                })} />
                {
                    errors?.password?.type === 'required' && <p className='text-red-900'>Password is required </p>
                }
                <br />
                
                <small>Already have account? <Link to='/login'>Login</Link></small>
                <div className='flex justify-center mt-4 mb-6'>
                    <select {...register("role")} className='mr-4'>
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>
                    <br />
                    
                    <button className="bg-purple-700 px-6 py-2 "

                    >Submit</button>


                </div>
                
            </form>
        </div>
    );

};

export default SignUp;




// const Login = () => {
//     const { setErr, err, signIn, setRoles } = useContext(AuthServices)
//     const location = useLocation()
//     const navigate = useNavigate()
//     let from = location.state?.from?.pathname || '/'
//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();

//     const onSubmit = (data, e) => {
//         e.preventDefault()

//         const email = data.mail
//         const password = data.password
//         const role = data.role
//         setRoles(role)
//         const UserInfo = {

//             email, password
//         }

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user
//                 console.log(user);
//                 e.target.reset()
//                 navigate(from, { replace: true })
//             })
//             .catch(error => {
//                 setErr(error.message)
//             })
//         // console.log(name, number, email, password, address, role)
//     }
//     return (
//         <div>
//             <div>

//                 <h1 className="text-purple-700 font-bold text-center text-2xl mt-10 mb-6">Please Login</h1>
//                 <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto text-center'>

//                     <label htmlFor="">Email</label>
//                     <br />
//                     <input type='email'
//                         {...register("mail", { required: "Email Address is required" })}
//                         aria-invalid={errors.mail ? "true" : "false"}
//                     />
//                     {errors.mail && <p role="alert" className='text-red-900'>{errors.mail?.message}</p>}
//                     <br />
//                     <label htmlFor="">Password</label>
//                     <br />
//                     <input type="password" {...register('password', {
//                         required: true,
//                         pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
//                     })} />
//                     {
//                         errors?.password?.type === 'required' && <p className='text-red-900'>Password is required </p>
//                     }

//                     <br />

//                     <small>Do not have account? <Link to='/register'>Register</Link></small>
//                     <div className='flex justify-center mt-4 mb-6'>
//                         <select {...register("role")} className='mr-4'>
//                             <option value="user" >User</option>
//                             <option value="seller">Seller</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                         <br />
//                         {
//                             err ? <h1 className='text-red-900'>{err}</h1> : ''
//                         }
//                         <button className="bg-purple-700 px-6 py-2 "

//                         >Submit</button>

//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;