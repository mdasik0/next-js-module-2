import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {

    const blogs = [
        {
          id: 1,
          title: "Getting Started with JavaScript",
          author: "John Doe",
          date: 2023
        },
        {
          id: 2,
          title: "Introduction to ReactJS",
          author: "Jane Smith",
          date: 2023
        },
        {
          id: 3,
          title: "Python Web Development with Django",
          author: "David Johnson",
          date: 2022
        }
      ];
    return (
        <div className='flex flex-col gap-3 container mx-auto'>
            {
                blogs.map(({id,title,author,date}) => <Link className='border border-blue-400 p-2 rounded text-sm font-semibold' key={id} href={`/blogs/${id}/${title}/${author}/${date}`}>{title}</Link>)
            }
        </div>
    );
};

export default BlogsPage;