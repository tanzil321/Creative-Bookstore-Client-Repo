import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signInWithGoogle } = useContext(AuthContext)
    const [createdSocialEmail, setCreatedSocialEmail] = useState('')
    const [token] = useToken(createdSocialEmail)

    if(token){
        navigate(from, { replace: true })
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                setCreatedSocialEmail(result?.user?.email)
                saveUserInfo(result.user.displayName, result.user.email, result.user.photoURL)
                toast.success('Successfully Google Login', { autoClose: 400 })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 400 })
            })
    }

    // Save user info in database
    const saveUserInfo = (name, email, image) => {
        const user = {
            name,
            email,
            role: 'buyer',
            image
        }
        fetch(`${ process.env.REACT_APP_API_URL }/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {})
    }


    return (
        <ul className="-mx-2 mb-12 flex justify-between">
            <li className="w-full px-2">
                <button onClick={handleGoogleSignin} className="py-3 block w-full rounded-md bg-theme-primary">
                    <svg width="18" height="18" className='mx-auto' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z" fill="white" />
                    </svg>
                </button>
            </li>
        </ul>
    );
};

export default SocialLogin;