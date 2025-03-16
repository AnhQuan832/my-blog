import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock3Icon, MapPin, Link2, Mail, Twitter, Github } from "lucide-react"
import Link from "next/link"

// Mock data for user profile
const getUserProfile = (username: string) => {
  return {
    username,
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Frontend Developer & Technical Writer. Passionate about creating accessible and user-friendly web experiences.",
    location: "San Francisco, CA",
    website: "https://janedoe.com",
    email: "jane@example.com",
    twitter: "janedoe",
    github: "janedoe",
    joinedDate: "March 2023",
    stats: {
      posts: 24,
      followers: 1250,
      following: 350,
    },
    posts: [
      {
        id: 1,
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js and React.",
        date: "2025-03-10",
        readTime: "5 min read",
        category: "Development",
      },
      {
        id: 2,
        title: "Mastering CSS Grid Layout",
        excerpt: "A comprehensive guide to using CSS Grid for modern web layouts.",
        date: "2025-02-28",
        readTime: "8 min read",
        category: "CSS",
      },
      {
        id: 3,
        title: "Accessibility Best Practices",
        excerpt: "Essential tips for making your web applications accessible to everyone.",
        date: "2025-02-15",
        readTime: "6 min read",
        category: "Accessibility",
      },
    ],
  }
}

export default function UserProfile({ params }: { params: { username: string } }) {
  const profile = getUserProfile(params.username)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-muted-foreground">@{profile.username}</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex gap-4 mb-4 md:mb-0 justify-center md:justify-start">
                <div className="text-center">
                  <p className="font-bold">{profile.stats.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{profile.stats.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{profile.stats.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>

              <div className="flex gap-2 justify-center md:justify-start">
                <Button>Follow</Button>
                {params.username === "janedoe" && (
                  <Button variant="outline" asChild>
                    <Link href="/settings">Edit Profile</Link>
                  </Button>
                )}
              </div>
            </div>

            <p className="mb-4">{profile.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
              {profile.location && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.website && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Link2 className="h-4 w-4" />
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    {profile.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              {profile.email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${profile.email}`} className="hover:underline text-primary">
                    {profile.email}
                  </a>
                </div>
              )}
              {profile.twitter && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Twitter className="h-4 w-4" />
                  <a
                    href={`https://twitter.com/${profile.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    @{profile.twitter}
                  </a>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">Joined {profile.joinedDate}</p>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <div className="grid grid-cols-1 gap-6">
              {profile.posts.map((post) => (
                <Card key={post.id}>
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
                  <CardContent>
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
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About {profile.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>{profile.bio}</p>
                  <div>
                    <h3 className="font-medium mb-2">Contact Information</h3>
                    <ul className="space-y-2">
                      {profile.email && (
                        <li className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>{profile.email}</span>
                        </li>
                      )}
                      {profile.website && (
                        <li className="flex items-center gap-2">
                          <Link2 className="h-4 w-4" />
                          <a
                            href={profile.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-primary"
                          >
                            {profile.website}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Social Media</h3>
                    <ul className="space-y-2">
                      {profile.twitter && (
                        <li className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          <a
                            href={`https://twitter.com/${profile.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-primary"
                          >
                            @{profile.twitter}
                          </a>
                        </li>
                      )}
                      {profile.github && (
                        <li className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          <a
                            href={`https://github.com/${profile.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-primary"
                          >
                            @{profile.github}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved">
            <div className="flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">No saved posts yet</h3>
                <p className="text-muted-foreground mb-4">When you save posts, they'll appear here.</p>
                <Button asChild>
                  <Link href="/">Browse Posts</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

