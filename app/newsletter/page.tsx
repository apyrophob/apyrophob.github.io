import type { Metadata } from 'next'
import NewsletterForm from '../components/newsletter-form'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to my newsletter.',
}

export default function Page() {
  return (
    <section>
        <h1 className="text-5xl font-bold text-[rgb(var(--foreground))] mb-4">
            Newsletter
        </h1>

      <NewsletterForm />
    </section>
  )
}
