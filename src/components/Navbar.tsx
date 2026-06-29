import { ChevronDown } from 'lucide-react';

const NAV_LINKS = ['Products', 'Customer Stories', 'Resources', 'Pricing'];

/** White 24x24 sunburst icon. */
function Sunburst() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4">
      {/* Left: sunburst icon */}
      <div className="flex items-center">
        <Sunburst />
      </div>

      {/* Center: nav links (desktop only) */}
      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {link}
            {link === 'Products' && <ChevronDown className="h-4 w-4" />}
          </a>
        ))}
      </div>

      {/* Right: Book A Demo + Get Started */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden text-sm font-medium text-white/80 transition-colors hover:text-white sm:block"
        >
          Book A Demo
        </a>
        <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
}
