import React from 'react';

const singleBlogs = ({params, searchParams}) => {

    const [id, date] = params.segements || [];

    return (
        <div className='border border-blue-400 flex flex-col gap-4 container mx-auto p-3 rounded-lg font-semibold'>
            <h3>blog id: {id}</h3>
            <h2 className='text-xl'>Title: {searchParams.title}</h2>
            <span className='text-lg'>Author: {searchParams.author}</span>
            <h6>Date: {date}</h6>
        </div>
    );
};

export default singleBlogs;