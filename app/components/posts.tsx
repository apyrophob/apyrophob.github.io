import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-5">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="neu-float flex flex-col gap-3 p-6 rounded-2xl border-0 transition-all duration-300">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h2 className="text-lg font-semibold text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--primary))] transition-colors">
                  {post.metadata.title}
                </h2>
                <time className="text-sm text-[rgb(var(--muted-foreground))] tabular-nums flex-shrink-0 font-medium">
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
              </div>
              {post.metadata.summary && (
                <p className="text-[rgb(var(--muted-foreground))] line-clamp-2 leading-relaxed">
                  {post.metadata.summary}
                </p>
              )}
            </article>
          </Link>
        ))}
    </div>
  )
}
