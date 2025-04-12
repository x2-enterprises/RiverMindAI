import { getPostBySlug } from '@/utils/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// 👇 Explicitly declare the prop type to prevent Next.js from inferring anything weird
type BlogPageProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
