import React from "react";

const AboutPage = () => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* About Image */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            src="https://via.placeholder.com/1000"
            alt="About Us"
            className="w-fit object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to our store! We're committed to providing retailers with
            top-quality products that drive success. Our mission is to empower
            businesses with reliable, innovative, and stylish solutions that
            resonate with customers. From sourcing premium materials to
            ensuring excellent service, we take pride in every detail.
          </p>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Thank you for choosing us as your trusted partner in retail. Let’s
            build great things together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
