import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <div className="container px-6 pb-16 pt-4 mx-auto text-center">
  <div className="max-w-lg mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Revolutionize Your Car Information Platform</h1>
    <p className="mt-6 text-gray-500 dark:text-gray-300">Build engaging car listings with our customizable card components. Easily showcase car details, images, and prices.</p>
    <Link to = "/products">
    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
    Get Started
    </button></Link>
    <p className="mt-3 text-sm text-gray-400">Ignite your automotive journey today</p>
  </div>

  <div className="flex justify-center mt-10">
    <img
      className="object-cover w-full h-96 rounded-xl lg:w-4/5"
      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      alt="Image"
    />
  </div>
</div>
        </div>
    );
};

export default Home;