import getBlogs from "@/utils/getBlogs";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import React from "react";

export const metadata =  {
  title: "blogs | Next Js.",
  description: "this is a next js app"
}

const BlogsPage = async () => {
 
  const blogs = await getBlogs()
  return (
    <div className="flex flex-col gap-3 container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div
          className="border border-blue-400 p-2 rounded text-sm font-semibold"
          key={id}
        >
          <h4 className="text-2xl">{title}</h4>

          <Link
            className="text-white mt-6 bg-blue-500 rounded-sm px-3 py-1 inline-block"
            href={`/blogs/${id}`}
          >
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
