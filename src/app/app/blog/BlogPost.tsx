import { type Dispatch, type SetStateAction } from "react";
import { type BlogPostType } from "./page";

interface BlogPostProps {
  blogPost: BlogPostType;
  editBlogPostIsRead: (index: string, isRead: boolean) => void;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
}

export default function BlogPost({
  blogPost,
  editBlogPostIsRead,
  setPageNumber,
  pageNumber,
}: BlogPostProps) {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-slate-300 bg-slate-100 p-5 shadow-lg">
      <div className="flex justify-end pr-5 pt-5">
        <input
          type="checkbox"
          checked={blogPost.isRead}
          onChange={(e) => {
            const isRead = e.target.checked;
            editBlogPostIsRead(blogPost.id, isRead);
            setPageNumber((pageNumber) => pageNumber - 1);
          }}
        ></input>
      </div>
      <div className="flex gap-10">
        <div className="w-sm flex items-start gap-3 pl-5 pt-28"></div>
        <div className="flex flex-col gap-8 pb-8 pr-40">
          <div className="pb-5 text-xl font-medium dark:text-slate-50">
            {blogPost.title}
          </div>
          <div className="dark:text-slate-50">{blogPost.content}</div>
          <div className="flex gap-5">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md border bg-slate-200 px-2 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-10 text-sm text-slate-500">{blogPost.author}</div>
        </div>
      </div>
      <span>{pageNumber}</span>
    </div>
  );
}
