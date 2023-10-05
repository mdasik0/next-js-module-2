import getAllCategories from '@/utils/getAllCategories';
import Link from 'next/link';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories()
    return (
        <div className='grid grid-cols-4 w-[1240px] my-36 mx-auto gap-10'>
            {
                categories.map((category) => <SingleCategory key={category.id} category={category}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;