export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        404
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        The page you are looking for does not exist.
      </p>
    </section>
  )
}
