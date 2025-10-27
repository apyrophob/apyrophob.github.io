import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-[rgb(var(--foreground))] mb-4 bg-gradient-to-br from-[rgb(var(--foreground))] to-[rgb(var(--muted-foreground))] bg-clip-text">
          Blog
        </h1>
        <p className="text-lg text-[rgb(var(--muted-foreground))]">
          Thoughts, ideas, and insights on development and technology.
        </p>
      </div>
      <BlogPosts />
    </section>
  )
}
