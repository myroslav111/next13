"use client";

import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";
//* 3 variant

const PostSearch = () => {
  const [search, setSearch] = useState<string>("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        className="mr-3 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

// import { getPostsBySearch } from "@/services/getPosts";
// import { FormEventHandler, useState } from "react";

// type Props = {
//   onSearch: (value: any[]) => void;
// };

// const PostSearch = ({ onSearch }: Props) => {
//   const [search, setSearch] = useState<string>("");

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     const posts = await getPostsBySearch(search);
//     onSearch(posts);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex">
//       <input
//         className="mr-3 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
//       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
//       invalid:border-pink-500 invalid:text-pink-600
//       focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
//         type="search"
//         placeholder="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button
//         className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"
//         type="submit"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

export default PostSearch;
