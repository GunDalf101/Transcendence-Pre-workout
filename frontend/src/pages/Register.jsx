import React from 'react'
import Form from '../components/Auth/Form'

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black p-4">
            <div className="w-full max-w-sm bg-gray-800 rounded-md shadow-lg p-8 border-4 border-gray-700 pixelated hover:border-blue-500 transform hover:scale-105 transition duration-300">
                <Form route="/api/user/register/" method="Register" />
            </div>
        </div>
    );
}

export default Register
