import { getPostBySlug } from '@/utils/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import React from 'react'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateMetadata(
  props: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostBySlug(props.params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

// Helper function to convert markdown to HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(post.content || '')

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl prose prose-dark lg:prose-lg prose-headings:font-orbitron prose-a:text-primary-blue hover:prose-a:text-primary-pink">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-400 mb-8">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      <div 
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}
