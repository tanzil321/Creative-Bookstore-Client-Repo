import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {  signIn, setRoles } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()

        const email = data.mail
        const password = data.password
        const role = data.role
        setRoles(role)
        const UserInfo = {

            email, password
        }

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast('Login Successfully.')
                e.target.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
        // console.log(name, number, email, password, address, role)
    }
    return (
        <div>
            <div>

                <h1 className="text-purple-700 font-bold text-center text-2xl mt-10 mb-6">Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto text-center'>

                    <label htmlFor="">Email</label>
                    <br />
                    <input type='email'
                        {...register("mail", { required: "Email Address is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.mail && <p role="alert" className='text-red-900'>{errors.mail?.message}</p>}
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

                    <small>Do not have account? <Link to='/signup'>Register</Link></small>
                    <div className='flex justify-center mt-4 mb-6'>
                        <select {...register("role")} className='mr-4'>
                            <option value="user" >User</option>
                            <option value="seller">Seller</option>
                            <option value="admin">Admin</option>
                        </select>
                        <br />
                        
                        <button className="bg-purple-700 px-6 py-2 "

                        >Submit</button>

                    </div>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            
        </div>
        
    );
};

export default Login;






