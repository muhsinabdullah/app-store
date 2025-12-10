import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/error.png"; // your custom image

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-5">
            <img src={errorImg} alt="404 Error" className="w-64 h-64 mb-6 object-contain" />
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-500 mb-6">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
