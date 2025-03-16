import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock3Icon } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "2025-03-10",
    readTime: "5 min read",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "janedoe",
    },
    category: "Development",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "2025-03-08",
    readTime: "7 min read",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "johnsmith",
    },
    category: "Design",
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "Learn best practices for creating inclusive and accessible web experiences for all users.",
    date: "2025-03-05",
    readTime: "10 min read",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "alexjohnson",
    },
    category: "Accessibility",
  },
  {
    id: 4,
    title: "State Management in React",
    excerpt: "Explore different state management solutions for React applications.",
    date: "2025-03-01",
    readTime: "8 min read",
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "sarahwilliams",
    },
    category: "Development",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
          <p className="text-muted-foreground mt-2">Discover the latest insights and tutorials</p>
        </div>
        <Button asChild>
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
              </div>
              <CardTitle className="line-clamp-2">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock3Icon className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/profile/${post.author.username}`} className="text-sm font-medium hover:underline">
                    {post.author.name}
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

