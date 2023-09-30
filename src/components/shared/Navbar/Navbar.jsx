import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navItem = [
        {
            path: "/",
            route: "Home"
        },
        {
            path: "/profile",
            route: "Profile"
        },
        {
            path: "/blogs",
            route: "Blogs"
        },
        {
            path: "/about",
            route: "About"
        },
        {
            path: "/dashboard",
            route: "DashBoard"
        },
    ]
    return (
        <div className='flex items-center justify-between container mx-auto'>
            <h3 className='text-2xl font-bold'>Learning next js.</h3>
            <ul className='flex items-center gap-6 font-semibold my-6'>
                {
                    navItem.map(({path, route}) => <li key={path}>
                        <Link href={path}>{route}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;