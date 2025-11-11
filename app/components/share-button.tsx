'use client'

import { useState } from 'react'

interface ShareButtonProps {
  title: string
  url: string
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl text-[rgb(var(--foreground))] transition-all duration-300 cursor-pointer group"
      style={{
        boxShadow: '4px 4px 8px rgb(var(--shadow-dark) / 0.1), -4px -4px 8px rgb(var(--shadow-light) / 0.4)',
        background: 'rgb(var(--card))'
      }}
      aria-label={copied ? 'Link copied!' : 'Copy link to post'}
    >
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>
  )
}
