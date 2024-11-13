import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants'
import Spinner from '../Spinner'

const Form = ({route, method}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api.post(route, {
                username,
                password,
            });

            if (method === 'Login' && res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/');
            } else {
                navigate("/login")
            }

        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return loading ? <Spinner /> : (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6 pixel-font">
                {method === 'Login' ? 'Welcome Back!' : 'Create an Account'}
            </h1>

            <div className="relative">
                <label htmlFor="username" className="text-gray-600 font-medium block mb-1 pixel-font">
                    Username
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-600 rounded-md p-3 pixel-border focus-within:border-green-400">
                    <FaUser className="text-green-400 mr-2 pixel-font" />
                    <input
                        type="text"
                        id="username"
                        value={username}
                        className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-400 pixel-font username"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </div>

            <div className="relative">
                <label htmlFor="password" className="text-gray-600 font-medium block mb-1 pixel-font">
                    Password
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-600 rounded-md p-3 pixel-border focus-within:border-green-400">
                    <FaLock className="text-green-400 mr-2 pixel-font" />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-400 pixel-font password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-green-500 text-black font-bold py-2 rounded-md pixel-btn hover:bg-green-600 transition duration-300 pixel-font"
            >
                {method === 'Login' ? 'Login' : 'Register'}
            </button>

            {method === 'Login' ? (
                <p className="text-center text-gray-400 text-sm mt-6 pixel-font">
                    Don’t have an account? <Link to="/register" className="text-green-400 hover:underline">Sign up</Link>
                </p>
            ) : (
                <p className="text-center text-gray-400 text-sm mt-6 pixel-font">
                    Already have an account? <Link to="/login" className="text-green-400 hover:underline">Login</Link>
                </p>
            )}
        </form>


    );
}

export default Form
