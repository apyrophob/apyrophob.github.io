import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[rgb(var(--foreground))] mb-5">
          An attempt to understand myself and the world:
        </h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent"></div>
      </div>
      <BlogPosts />
    </section>
  )
}
