'use client'
    import { useState } from "react";
    import { FiShoppingCart } from "react-icons/fi";

    const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
        {/* Card Container */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
            {/* Logo and Branding */}
            <div className="text-center mb-6">
            <div className="flex justify-center items-center space-x-2">
                <FiShoppingCart className="text-3xl text-indigo-500" />
                <h1 className="text-2xl font-bold text-gray-800">
                Bandage
                </h1>
            </div>
            <p className="text-gray-500">
                {isLogin
                ? "Login to access exclusive deals and offers."
                : "Create an account to start shopping!"}
            </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
            {!isLogin && (
                <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
                </div>
            )}
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
                >
                Email Address
                </label>
                <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
            </div>
            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className={`w-full py-2 rounded-lg text-white ${
                isLogin ? "bg-indigo-500 hover:bg-indigo-600" : "bg-blue-400 hover:bg-blue-500"
                } focus:outline-none focus:ring-4 focus:ring-opacity-50`}
            >
                {isLogin ? "Login" : "Register"}
            </button>
            </form>

            {/* Toggle and Links */}
            <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
                {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
                <button
                onClick={toggleForm}
                className="text-indigo-500 hover:underline font-medium"
                >
                {isLogin ? "Register" : "Login"} here
                </button>
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default AuthPage;
