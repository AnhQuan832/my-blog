import React from "react";
import { Avatar, Badge, Button, Card } from "./components";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js and React.",
    date: "2025-03-10",
    readTime: "5 min read",
    author: { name: "Jane Doe", avatar: "", username: "janedoe" },
    category: "Development",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "2025-03-08",
    readTime: "7 min read",
    author: { name: "John Smith", avatar: "", username: "johnsmith" },
    category: "Design",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js and React.",
    date: "2025-03-10",
    readTime: "5 min read",
    author: { name: "Jane Doe", avatar: "", username: "janedoe" },
    category: "Development",
  },
  {
    id: 4,
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "2025-03-08",
    readTime: "7 min read",
    author: { name: "John Smith", avatar: "", username: "johnsmith" },
    category: "Design",
  },
  {
    id: 5,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js and React.",
    date: "2025-03-10",
    readTime: "5 min read",
    author: { name: "Jane Doe", avatar: "", username: "janedoe" },
    category: "Development",
  },
  {
    id: 6,
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "2025-03-08",
    readTime: "7 min read",
    author: { name: "John Smith", avatar: "", username: "johnsmith" },
    category: "Design",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
          <p className="text-gray-600 mt-2">
            Discover the latest insights and tutorials
          </p>
        </div>
        <Button>Create Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <div className="mb-2">
              <Badge text={post.category} />
            </div>
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
            <div className="text-sm text-gray-500 mt-2">
              {post.date} • {post.readTime}
            </div>
            <div className="flex items-center mt-4">
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                fallback={post.author.name.charAt(0)}
              />
              <span className="ml-2 text-sm">{post.author.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
