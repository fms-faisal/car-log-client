import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from '../components/CarCard';

const Products = () => {

    const cars = useLoaderData()
    console.log(cars)
    return (
        <div>
            <h1>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                cars.map(car => (<CarCard key={car._id} car={car}></CarCard>))
            }
            </div>
        </div>
    );
};

export default Products;