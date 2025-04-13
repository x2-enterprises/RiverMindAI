import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Define the structure for blog post metadata and content
export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string // Added category
  description: string // Added description (excerpt)
  content: string // Raw Markdown content
}

// Define the structure for the frontmatter data
interface FrontmatterData {
  title: string
  date: string
  author: string
  category: string
  description: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  try {
    // Get file names under /src/content/blog
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md')) // Ensure we only read Markdown files
      .map(fileName => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        const data = matterResult.data as FrontmatterData

        // Combine the data with the slug and content
        return {
          slug,
          content: matterResult.content,
          ...(data || {}), // Spread frontmatter data, provide empty obj fallback
          // Ensure required fields have fallbacks if missing in frontmatter
          title: data?.title ?? 'Untitled Post',
          date: data?.date ?? new Date().toISOString().split('T')[0], // Default to today
          author: data?.author ?? 'Rivermind Staff',
          category: data?.category ?? 'Uncategorized',
          description: data?.description ?? 'No description available.',
        }
      })

    // Sort posts by date in descending order
    return allPostsData.sort((a, b) => {
      try {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } catch (e) {
        console.error(`Error parsing dates for sorting: ${a.slug} (${a.date}), ${b.slug} (${b.date})`);
        return 0; // Keep original order if dates are invalid
      }
    })
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return []; // Return empty array on error
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  try {
    if (!fs.existsSync(fullPath)) {
      console.warn(`Blog post not found for slug: ${slug}`);
      return undefined; // Return undefined if file doesn't exist
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const data = matterResult.data as FrontmatterData

    // Combine the data with the slug and content
    return {
      slug,
      content: matterResult.content,
      ...(data || {}), // Spread frontmatter data
      // Provide fallbacks for required fields
      title: data?.title ?? 'Untitled Post',
      date: data?.date ?? new Date().toISOString().split('T')[0],
      author: data?.author ?? 'Rivermind Staff',
      category: data?.category ?? 'Uncategorized',
      description: data?.description ?? 'No description available.',
    }
  } catch (error) {
     console.error(`Error reading blog post for slug ${slug}:`, error);
     return undefined; // Return undefined on error
  }
} 