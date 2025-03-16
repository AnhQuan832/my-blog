import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock3Icon, ArrowLeft, MessageSquare, Heart, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Mock data for a blog post
const getBlogPost = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Getting Started with Next.js",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore the key features of Next.js and how to get started with your first project.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li>Server-side rendering (SSR) for improved performance and SEO</li>
        <li>Static site generation (SSG) for blazing-fast page loads</li>
        <li>Built-in routing system that's simple and intuitive</li>
        <li>API routes for building backend functionality</li>
        <li>Automatic code splitting for optimal loading times</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>Getting started with Next.js is straightforward. First, ensure you have Node.js installed on your machine. Then, open your terminal and run the following command:</p>
      <pre><code>npx create-next-app my-next-app</code></pre>
      <p>This will create a new Next.js project with all the necessary files and dependencies. Once the installation is complete, navigate to your project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <h2>Understanding the File Structure</h2>
      <p>Next.js uses a file-based routing system. The pages directory is where you'll create your application's routes. For example:</p>
      <ul>
        <li><code>pages/index.js</code> - The home page (route: /)</li>
        <li><code>pages/about.js</code> - The about page (route: /about)</li>
        <li><code>pages/blog/[id].js</code> - Dynamic blog post pages (route: /blog/1, /blog/2, etc.)</li>
      </ul>
      
      <h2>Data Fetching Methods</h2>
      <p>Next.js provides several methods for fetching data:</p>
      <ul>
        <li><strong>getStaticProps</strong> - Fetch data at build time</li>
        <li><strong>getStaticPaths</strong> - Specify dynamic routes to pre-render based on data</li>
        <li><strong>getServerSideProps</strong> - Fetch data on each request</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js simplifies the process of building React applications by providing a robust framework with built-in features for routing, data fetching, and rendering. By following this guide, you should now have a basic understanding of how to get started with Next.js and build your first application.</p>
    `,
    date: "2025-03-10",
    readTime: "5 min read",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "janedoe",
      bio: "Frontend Developer & Technical Writer",
    },
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    comments: 8,
    likes: 42,
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/profile/${post.author.username}`} className="font-medium hover:underline">
                  {post.author.name}
                </Link>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>

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
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase()}`}
              className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>{post.likes} Likes</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments} Comments</span>
            </Button>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </article>
    </div>
  )
}

