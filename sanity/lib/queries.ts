import { defineQuery } from "next-sanity";

export const BLOG_QUERY =
  defineQuery(`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc){
  _id, 
  title,
  slug,
  _createdAt, 
  author -> {_id, name, bio}, 
  views, 
  description, 
  category, 
  image
}`);
