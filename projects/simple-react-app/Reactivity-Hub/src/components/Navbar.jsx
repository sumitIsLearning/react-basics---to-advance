import { useState } from "react";

useState

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-emerald-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace with your actual logo */}
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-2 font-bold text-xl text-white">
                Reactivity-Hub
              </span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              className="border-transparent text-white hover:border-gray-300 hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-current="page"
            >
              Customers
            </a>
            <a
              href="#"
              className="border-transparent text-white hover:border-gray-300 hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Integrations
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="#"
              className="text-white hover:text-gray-200  px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="sm:hidden md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="border-transparent text-white hover:bg-emerald-700 hover:border-gray-300  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="border-transparent text-white hover:bg-emerald-700 hover:border-gray-300  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              aria-current="page"
            >
              Customers
            </a>
            <a
              href="#"
              className="border-transparent text-white hover:bg-emerald-700 hover:border-gray-300  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Integrations
            </a>
            <a
              href="#"
              className="border-transparent text-white hover:bg-emerald-700 hover:border-gray-300  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center  text-black font-bold bg-gray-50 hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
