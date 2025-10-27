export const metadata = {
  title: 'About',
  description: 'Learn more about me.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-[rgb(var(--foreground))] mb-4 bg-gradient-to-br from-[rgb(var(--foreground))] to-[rgb(var(--muted-foreground))] bg-clip-text">
          About Me
        </h1>
        <code className="text-lg text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-2 py-1 rounded">
          // TODO: Add about me content
        </code>
      </div>
    </section>
  )
}
