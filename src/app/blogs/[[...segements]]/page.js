import React from 'react';

const singleBlogs = ({params}) => {

    const [year, money] = params.segements || [];

    return (
        <div>
            this year is {year || new Date().getFullYear()}, 
            i have ${money || 0} only, ( this is segements route example )
        </div>
    );
};

export default singleBlogs;