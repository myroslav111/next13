"use client";

import React, { useState, useEffect } from "react";
import type { Metadata } from "next";
import { getAllPosts } from "@/services/getPosts";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by Blog",
};
const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // console.log(posts);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="text-8xl text-center mb-10">Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
};

// import React from "react";
// import type { Metadata } from "next";
// import Link from "next/link";

// async function getData() {
//   const respons = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!respons.ok) throw new Error("unable to fetch post");
//   return respons.json();
// }

// export const metadata: Metadata = {
//   title: "Blog",
//   description: "Generated by Blog",
// };
// const Blog = async () => {
//   const posts = await getData();
//   return (
//     <>
//       <h1 className="text-8xl text-center">Blog</h1>
//       <ul>
//         {posts.map((post: any) => (
//           <li key={post.id}>
//             <Link href={`/blog/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default Blog;
