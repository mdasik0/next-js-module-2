import Link from 'next/link';
import React from 'react';
import Navlink from '../Navlink/Navlink';

const Navbar = () => {
    const navItem = [
        {
            href: "/",
            name: "Home"
        },
        {
            href: "/profile",
            name: "Profile"
        },
        {
            href: "/blogs",
            name: "Blogs"
        },
        {
            href: "/about",
            name: "About"
        },
        {
            href: "/dashboard",
            name: "DashBoard"
        },
    ]
    return (
        <div className='flex items-center justify-between container mx-auto'>
            <h3 className='text-2xl font-bold'>Learning next js.</h3>
            <ul className='flex items-center gap-6 font-semibold my-6'>
                {
                    navItem.map(({href, name}) => <li key={href}>
                        <Navlink exact={href === "/"} activeClassName={`text-blue-500 font-semibold`} href={href}>{name}</Navlink>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;