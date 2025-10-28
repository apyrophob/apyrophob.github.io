import type { Metadata } from 'next'
import NewsletterForm from '../components/newsletter-form'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to my newsletter.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-[rgb(var(--foreground))] mb-4 bg-gradient-to-br from-[rgb(var(--foreground))] to-[rgb(var(--muted-foreground))] bg-clip-text">
          Newsletter
        </h1>
        <p className="text-lg text-[rgb(var(--muted-foreground))] mb-8">
          Subscribe to get updates on new posts and projects.
        </p>
      </div>

      <NewsletterForm />
    </section>
  )
}
