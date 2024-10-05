import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Post } from '../pages/Blog'

interface PostDetailsProps {
  post: Post
}

export default function PostDetails({ post }: PostDetailsProps) {
  const [comment, setComment] = React.useState('')

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the comment to your backend
    console.log('Comment submitted:', comment)
    setComment('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.category} | {post.date} | Por {post.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Compartilhe este post</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Compartilhar no Facebook</span>
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Compartilhar no Twitter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Compartilhar no LinkedIn</span>
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Deixe um comentário</h3>
          <form onSubmit={handleCommentSubmit}>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Seu comentário"
              className="mb-2"
            />
            <Button type="submit">Enviar Comentário</Button>
          </form>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <h3 className="text-lg font-semibold mb-2">Leituras Relacionadas</h3>
          <ul className="list-disc list-inside">
            <li>Outro artigo interessante</li>
            <li>Você também pode gostar disto</li>
            <li>Confira nossas principais histórias</li>
          </ul>
        </div>
      </CardFooter>
    </Card>
  )
}