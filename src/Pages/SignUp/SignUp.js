import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link,  useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser,  } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()
    

    // if(token){
    //     navigate('/');
    // }

    const handleSignUp = (data) => {
     
     
        setSignUPError('');
        createUser(data.email, data.password,data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                    saveUser(data.name, data.email,data.role,);
            })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email,role,) =>{
        const user ={role,email,name};
        fetch(`https://creative-bookstore-server.vercel.app/login/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            // setCreatedUserEmail(email);
        })
    } 
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div className='flex justify-center mt-4 mb-6'>
                    <select {...register("role")} className='mr-4'>
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                       
                    </select>
                    <br />
                    <input className='btn btn-accent px-6 py-2' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </div>
            </form>
            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

        </div>
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