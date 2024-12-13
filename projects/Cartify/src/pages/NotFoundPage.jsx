import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Oops! The page you're looking for doesn't exist.
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        It seems the page you are searching for has been moved, deleted, or
        never existed. But don't worry, you can always return to the homepage.
      </p>
      <button
        onClick={handleRedirect}
        className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
