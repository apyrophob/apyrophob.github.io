import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">
          Recent Posts
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--border))] to-transparent"></div>
      </div>
      <BlogPosts />
    </section>
  )
}
