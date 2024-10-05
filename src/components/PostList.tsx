import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

interface Post {
  id: string
  title: string
  excerpt: string
  category: 'trends' | 'interviews' | 'news'
  author: string
  date: string
}

interface PostListProps {
  posts: Post[]
  onPostSelect: (post: Post) => void
}

export default function PostList({ posts, onPostSelect }: PostListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => onPostSelect(post)}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.category} | {post.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.excerpt}</p>
            <p className="mt-2 text-sm text-muted-foreground">Por {post.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}