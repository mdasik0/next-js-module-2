import getBlogs from '@/utils/getBlogs';
import getSingleBlog from '@/utils/getSingleBlog';
import React from 'react';

const singleBlogs = async ({params}) => {

    // const [id, date] = params.segements || [];
    //NOTE::: you can use searchparams, params hook as well if you are using a client component
    // const searchParams = useSearchParams.get()
    // const params = useParams()

    const singleBlog = await getSingleBlog(params.id)

    // const singleBlog = allBlogs.find(d => d.id == params.id)

    return (
        <div className='border border-blue-400 flex flex-col gap-4 container mx-auto p-3 rounded-lg font-semibold'>
            <h3>blog id: {params?.id}</h3>
            <h2 className='text-xl'>Title: {singleBlog?.title}</h2>
            <span className='text-lg'>Author: {singleBlog?.body}</span>
        </div>
    );
};

export default singleBlogs;