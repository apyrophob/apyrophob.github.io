function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-12 pt-12 border-t border-[rgb(var(--border))]">
      <div className="flex flex-col gap-6">
        <ul className="flex flex-wrap gap-8 text-sm">
          <li>
            <a
              className="flex items-center gap-2 text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-all duration-200 group"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/apyrophob"
            >
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowIcon />
              </span>
              <span className="font-medium">github</span>
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-[rgb(var(--muted-foreground))]">
            © {new Date().getFullYear()} MIT Licensed
          </p>
        </div>
      </div>
    </footer>
  )
}
