'use client'

export default function NewsletterForm() {
  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/shkap"
      method="post"
      target="popupwindow"
      onSubmit={() => window.open('https://buttondown.com/shkap', 'popupwindow')}
      className="embeddable-buttondown-form max-w-md"
    >
      <label 
        htmlFor="bd-email"
        className="block text-sm font-bold text-[rgb(var(--foreground))] mb-3 tracking-tight"
      >
        Enter your email
      </label>
      <input 
        type="email" 
        name="email" 
        id="bd-email"
        placeholder="you@example.com"
        className="w-full px-5 py-3.5 rounded-2xl text-[rgb(var(--foreground))] mb-4 transition-all duration-200 border-0 font-medium neu-pressed placeholder:text-[rgb(var(--muted-foreground))]"
        style={{ outline: 'none' }}
        required
      />
      <button 
        type="submit"
        className="w-full cursor-pointer px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 text-[rgb(var(--foreground))] mb-4 tracking-tight neu-float"
      >
        Subscribe
      </button>
    </form>
  )
}
