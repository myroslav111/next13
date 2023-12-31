"use client";
import Link from "next/link";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import { useState, useEffect } from "react";
//* 3 variant
const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// type Props = {
//   posts: any[];
// };

// const Posts = ({ posts }: Props) => {
//   return (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Posts;
