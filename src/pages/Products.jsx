import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import Swal from 'sweetalert2';

const Products = () => {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('');
    const [brandName, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sort, setSort] = useState('');

    const distinctBrands = [
        "Tesla", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", 
        "Audi", "Hyundai", "Toyota", "Honda", "Volvo", "Porsche", 
        "Mitsubishi", "Jeep", "Land Rover", "Jaguar", "Volkswagen", 
        "Mazda", "Rivian", "Lucid Motors", "Kia", "Mini", "Polestar"
    ];

    const distinctCategories = [
        "Electric Sedan", "Electric SUV", "Electric Hatchback", 
        "Electric Truck", "Hydrogen Sedan", "Plug-in Hybrid", 
        "Plug-in Hybrid SUV", "Plug-in Hybrid Crossover", "Electric Crossover"
    ];

    const handleSearch = async () => {
        const params = new URLSearchParams({
            search,
            brandName,
            category,
            priceRange,
            sort
        }).toString();

        try {
            const response = await fetch(`http://localhost:5000/cars?${params}`);
            const data = await response.json();
            setCars(data);
            if (data.length === 0){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "No cars found",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch initial data when the component mounts
    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div>
            <div className="lg:join w-[90%] mx-auto">
                <div>
                    <div>
                        <input
                            className="input input-bordered join-item rounded-md"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <select
                    className="select select-bordered join-item"
                    value={brandName}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Brand</option>
                    {distinctBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                <select
                    className="select select-bordered join-item"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Category</option>
                    {distinctCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select
                    className="select select-bordered join-item"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="">Price Range</option>
                    <option value="below-50000">Below $50,000</option>
                    <option value="50000-70000">$50,000 - $70,000</option>
                    <option value="above-70000">Above $70,000</option>
                </select>
                <select
                    className="select select-bordered join-item"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort</option>
                    <option value="price-low-high">Price Low to High</option>
                    <option value="price-high-low">Price High to Low</option>
                    <option value="newest-first">Newest First</option>
                    <option value="oldest-first">Oldest First</option>
                </select>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">new</span>
                    <button className="btn join-item" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {cars.map(car => (<CarCard key={car._id} car={car}></CarCard>))}
            </div>
        </div>
    );
};

export default Products;
