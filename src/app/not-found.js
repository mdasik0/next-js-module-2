import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center h-[100vh] justify-center text-red-500'>
            <h1 className='text-4xl font-bold'>404</h1><br />
            <span className='text-2xl font-semibold'>Page Not found</span>
        </div>
    );
};

export default NotFoundPage;