import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { ShareButton } from 'app/components/share-button'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  let post = getBlogPosts().find((post) => post.slug === resolvedParams.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/og-default.png` // Use a static default OG image

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const resolvedParams = await params
  let post = getBlogPosts().find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og-default.png`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className="mb-12 pb-8 border-b border-[rgb(var(--border))]/30">
        <h1 className="title text-5xl font-bold tracking-tight text-[rgb(var(--foreground))] mb-6 leading-tight">
          {post.metadata.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-[rgb(var(--muted-foreground))]">
            <time dateTime={post.metadata.publishedAt} className="font-medium">
              {formatDate(post.metadata.publishedAt)}
            </time>
            <span className="text-[rgb(var(--border))]">•</span>
            <span>{post.content.split(' ').length} words</span>
          </div>
          <ShareButton 
            title={post.metadata.title}
            url={`${baseUrl}/blog/${post.slug}`}
          />
        </div>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none prose-lg">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
