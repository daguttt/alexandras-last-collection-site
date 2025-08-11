'use client';

import Link from 'next/link';
import InstagramLogo from '@/components/instagram-logo.component';
import FacebookLogo from '@/components/facebook-logo.component';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const socialLinks = [
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: <InstagramLogo />,
  },
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: <FacebookLogo />,
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto max-w-screen-sm px-3 h-14 sm:h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg sm:text-xl"
        >
          Alexandra Ortiz
        </Link>
        <div className="flex items-center gap-1">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex size-9 p-1 items-center justify-center rounded-full hover:bg-neutral-100"
            >
              {s.icon}
            </a>
          ))}
          <Select defaultValue="es" aria-label="Seleccionar idioma">
            <SelectTrigger className="h-9 px-3 bg-transparent">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">ES</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
