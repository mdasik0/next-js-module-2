import Navlink from "@/components/shared/Navlink/Navlink";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const navItem = [
    {
      href: "/dashboard",
      name: "My Name is asik",
    },
    {
      href: "/dashboard/add-product",
      name: "Add Product",
    },
    {
      href: "/dashboard/all-products",
      name: "All Products",
    },
    {
      href: "/",
      name: "Home",
    },
  ];
  return (
    <aside className="bg-orange-400 p-3 mr-10 px-24 pt-5 rounded text-white">
        <h4 className="text-2xl font-bold mb-10">
            Learning Next js
        </h4>
      <ul className="flex flex-col gap-5">
        {navItem.map(({ href, name }) => (
          <li key={href}>
            <Navlink activeClassName={`bg-blue-400 text-black`} exact={href === "/" || href === "/dashboard"} href={href}>{name}</Navlink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
