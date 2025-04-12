interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

// This is a mock database of blog posts
// In a real application, this would be fetched from a CMS or database
const posts: BlogPost[] = [
  {
    slug: 'getting-started-with-next-js',
    title: 'Getting Started with Next.js',
    date: '2024-03-20',
    author: 'John Doe',
    excerpt: 'Learn how to build modern web applications with Next.js, the React framework for production.',
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build fast, modern websites. 
      It provides features like server-side rendering, static site generation, and API routes out of the box.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js simplifies the development process by providing:</p>
      <ul>
        <li>Automatic code splitting</li>
        <li>Built-in CSS and Sass support</li>
        <li>Fast refresh</li>
        <li>API routes</li>
      </ul>
    `
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript',
    date: '2024-03-18',
    author: 'Jane Smith',
    excerpt: 'Discover the benefits of TypeScript and how it can improve your JavaScript development experience.',
    content: `
      <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 
      It adds optional types, classes, and modules to JavaScript, making it easier to write and maintain large applications.</p>
      
      <h2>Key Features</h2>
      <p>TypeScript offers several advantages:</p>
      <ul>
        <li>Static typing</li>
        <li>Object-oriented features</li>
        <li>IDE support</li>
        <li>ECMAScript compatibility</li>
      </ul>
    `
  }
]

export function getAllPosts(): BlogPost[] {
  // Sort posts by date in descending order
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug)
} 