import { Mail, MapPin } from "lucide-react";

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconTelegram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/forgelab", Icon: IconFacebook },
  { label: "Telegram", href: "https://t.me/forgelab", Icon: IconTelegram },
  { label: "LinkedIn", href: "https://linkedin.com/company/forgelab", Icon: IconLinkedIn },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 -mt-10 rounded-t-4xl bg-slate-50 shadow-[0_-8px_40px_rgba(15,23,42,0.04)]">
      <div className="container-forge pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Elite engineering studio building AI-native products from Phnom
              Penh — shipped fast, built to last.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-sm font-semibold text-slate-900">Company</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-green-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-slate-900">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@forgelab.cam"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-green-300 hover:text-green-700"
                >
                  <Mail size={15} className="shrink-0 text-green-600" aria-hidden="true" />
                  hello@forgelab.cam
                </a>
              </li>
              <li className="flex items-center gap-2.5 px-1 text-sm text-slate-500">
                <MapPin size={15} className="shrink-0 text-green-600" aria-hidden="true" />
                Phnom Penh, Cambodia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {year} ForgeLab. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-green-300 hover:text-green-700"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden="true" />
            <a
              href="https://forgelab.cam"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-green-700"
            >
              forgelab.cam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
