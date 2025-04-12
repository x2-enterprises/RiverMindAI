import Link from 'next/link'
import { getAllPosts } from '@/utils/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">RiverMind Blog</h1>
      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <div className="text-gray-600 mb-4">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 