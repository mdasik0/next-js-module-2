import Link from "next/link";
// import { useRouter } from 'next/navigation';
import React from "react";

const BlogsPage = async () => {
  // const router = useRouter()

  // const blogs = [
  //     {
  //       id: 1,
  //       title: "Getting Started with JavaScript",
  //       author: "John Doe",
  //       date: 2023
  //     },
  //     {
  //       id: 2,
  //       title: "Introduction to ReactJS",
  //       author: "Jane Smith",
  //       date: 2023
  //     },
  //     {
  //       id: 3,
  //       title: "Python Web Development with Django",
  //       author: "David Johnson",
  //       date: 2022
  //     }
  //   ];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
    cache: "force-cache"
  });
  const blogs = await res.json();
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
