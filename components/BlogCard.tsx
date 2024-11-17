import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Blog } from "@/sanity.types";

export type BlogCardTypeCard = Omit<Blog, "author"> & { author?: Author };

const BlogCard = ({ post }: { post: BlogCardTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    description,
    image,
  } = post;
  return (
    <li className="border border-black w-[500px] h-full rounded-xl p-4">
      <div>
        <p>{formatDate(_createdAt)}</p>
        <div className="flex">
          <EyeIcon />
          <span>{views}</span>
        </div>
      </div>

      <div>
        <div>
          <Link href={`user/${author?._id}`}>
            <p>{author?.name}</p>
          </Link>
          <Link href={`blog/${_id}`} className="font-bold">
            <h3>{title}</h3>
          </Link>
        </div>
        <Link href={`user/${author?._id}`}>
          <Image
            src={"https://placehold.co/48x48"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>
      <Link href={`blog/${_id}`}>
        <p>{description}</p>
        <img src={image} alt="placeholder" />
      </Link>
      <div>
        <Link href={`/query=${category?.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default BlogCard;
