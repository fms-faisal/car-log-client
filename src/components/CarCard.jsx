import React from 'react';

const CarCard = ({car}) => {
 const {category,
    brandName,
    description,
    price,
    productCreationDate,
    productImage,
    productName,
    ratings,
    releaseDate} = car
 
    return (
        <div>
            <div className="card bg-base-100 w-[320px] shadow-xl mx-auto h-full py-2 ">
  <figure className='rounded-lg p-4'>
    <img className='rounded-md'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="photo of car" />
 <div className="badge badge-neutral absolute right-6 top-24 rounded-md">{ratings}⭐</div>

  </figure>
  <div className="card-body px-4 pb-2 pt-0">
    <h2 className="text-base font-semibold flex justify-between">
      {productName}
      
    </h2>
    <p className='text-sm text-gray-700'>{description}</p>
    <div className="card-actions justify-stretch">
      <div className="badge badge-outline">{brandName}</div>
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{releaseDate}</div>
      <div className="badge badge-outline font-semibold">${price}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarCard;