// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Book = ({ bl }) => {
    // eslint-disable-next-line react/prop-types
    const { description, image, price, title, category } = bl; 


    return (
        <div>
            <div className="card w-80 h-5/6 bg-base-100 shadow-xl">
                <figure className='h-auto'><img  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className='text-sm'>{description}</p>
                    <p> <span className='font-bold'>Category :</span> {category}</p>
                    <p> <span className='font-bold'>Price :</span> {price}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Book;