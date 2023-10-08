import Link from 'next/link';
import React from 'react';

const SingleProducts = ({product}) => {

    const {id, title, price} = product;
    return (
        <div className='border border-red-500 shadow-lg  p-2 rounded-lg'>
            <Link className='cursor-pointer' href={`/products/${id}`}>{title}</Link>
        </div>
    );
};

export default SingleProducts;