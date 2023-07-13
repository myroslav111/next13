import { Metadata } from "next";
import React from "react";

async function getData(id: string) {
  const respons = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return respons.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  return (
    <>
      <h1 className="text-center text-xl">{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
