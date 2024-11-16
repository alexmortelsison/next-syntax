import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogCardTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
  } = post;
  return (
    <li className="border border-black w-[500px] h-[500px] rounded-xl">
      <div>
        <p>{formatDate(_createdAt)}</p>
        <div className="flex">
          <EyeIcon />
          <span>{views}</span>
        </div>
      </div>

      <div>
        <div>
          <Link href={`user/${authorId}`}>
            <p>{name}</p>
          </Link>
          <Link href={`blog/${_id}`} className="font-bold">
            <h3>{title}</h3>
          </Link>
        </div>
        <Link href={`user/${authorId}`}>
          <Image
            src={"https://placehold.co/48x48"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
