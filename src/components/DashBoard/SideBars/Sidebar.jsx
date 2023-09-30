import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const navItem = [
    {
      route: "/dashboard",
      routeName: "DashBoard",
    },
    {
      route: "/dashboard/add-product",
      routeName: "Add Product",
    },
    {
      route: "/dashboard/all-products",
      routeName: "All Products",
    },
    {
      route: "/",
      routeName: "Home",
    },
  ];
  return (
    <aside className="bg-orange-400 p-3 mr-10 px-24 pt-5 rounded text-white">
        <h4 className="text-2xl font-bold mb-10">
            Learning Next js
        </h4>
      <ul className="flex flex-col gap-5">
        {navItem.map(({ route, routeName }) => (
          <li key={route}>
            <Link href={route}>{routeName}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
