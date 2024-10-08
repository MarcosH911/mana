// "use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { BlogPostType } from "./page";

interface WriteBlogPost {
  pageNumber: number;
  setBlogs: React.Dispatch<React.SetStateAction<BlogPostType[]>>;
}

export default function WriteBlogPost({ pageNumber, setBlogs }: WriteBlogPost) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newTagInput, setNewTagInput] = useState<string>("");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = () => {
    if (newTagInput && !allTags.includes(newTagInput)) {
      setAllTags((prevTags) => [...prevTags, newTagInput]);
      setNewTagInput("");
    }
  };

  const handleAddBlogPost = async () => {
    if (!title || !content) return;

    const newBlog = {
      title,
      content,
      tags: selectedTags,
      pageNumber,
    };

    setTitle("");
    setContent("");
    setSelectedTags([]);
    setNewTagInput("");

    const response = await fetch("/api/blogs/insertBlogs", {
      method: "POST",
      body: JSON.stringify(newBlog),
    });

    if (response.ok) {
      const blog = await response.json();
      setBlogs((prevBlogs) => [blog, ...prevBlogs]);
    }
  };

  return (
    <div className="relative z-0 flex flex-col gap-8 rounded-lg border border-slate-300 bg-slate-100 pb-10 pl-5 pr-5 pt-10">
      <div className="flex gap-24">
        <div className="w-sm flex items-start gap-3 pl-5 pt-36">
          <Input
            value={newTagInput}
            onChange={(e) => setNewTagInput(e.target.value)}
            placeholder="Add tag"
            className="dark:text-slate-800"
          ></Input>
          <Button onClick={addTag} className="bg-slate-800 pt-2">
            Add
          </Button>
        </div>
        <div className="flex flex-col gap-8 pb-28 pr-40">
          <Input
            placeholder="Title"
            className="dark:text-slate-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
          <Input
            placeholder="Content"
            className="dark:text-slate-800"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Input>
          <div className="flex gap-5">
            {allTags.map((tag, index) => (
              <Button
                variant="default"
                onClick={() =>
                  setSelectedTags((tags) => {
                    if (tags.includes(tag)) {
                      return tags.filter((tagToRemove) => tagToRemove !== tag);
                    } else {
                      return [...tags, tag];
                    }
                  })
                }
                key={index}
                className={cn(
                  "border bg-slate-300 p-2 transition duration-300",
                  selectedTags.includes(tag) && "bg-slate-800 text-slate-50",
                )}
              >
                <span>{selectedTags.includes(tag) ? "-" : "+"}</span>
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around gap-96">
        <Button variant="default" onClick={handleAddBlogPost} size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
}
