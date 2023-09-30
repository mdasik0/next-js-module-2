import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    const phoneNum = '01612345678'
    return (
        <div>
            This page is about me;
            Get my <Link className='text-blue-600' href={`about/${phoneNum}`}>Phone Number</Link> ( this is dynamic route example )
        </div>
    );
};

export default AboutPage;