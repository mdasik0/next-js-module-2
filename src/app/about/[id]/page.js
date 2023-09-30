import React from 'react';

const page = ({params}) => {
    const phoneNumber = params.id;
    console.log(phoneNumber)
    return (
        <div>
            this is my phoneNumber : {phoneNumber}
        </div>
    );
};

export default page;