'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/',              label: 'The Vision',      icon: 'auto_awesome' },
  { href: '/overview',      label: 'Overview',         icon: 'domain' },
  { href: '/retail',        label: 'Retail Districts', icon: 'storefront' },
  { href: '/attractions',   label: 'Attractions',      icon: 'local_activity' },
  { href: '/events',        label: 'Events',           icon: 'event_available' },
  { href: '/sponsorships',  label: 'Sponsorships',     icon: 'handshake' },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Auto-close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex-grow flex flex-col gap-6">
      {navItems.map(({ href, label, icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className={`group flex items-center gap-4 pl-4 transition-all duration-300 ${
              isActive
                ? 'text-[#f2ca50] font-bold border-l-2 border-[#f2ca50]'
                : 'text-white/50 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-white/20'
            }`}
          >
            <span
              className="material-symbols-outlined scale-90 transition-opacity"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {icon}
            </span>
            <span className="text-xs uppercase tracking-widest font-label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ── Top bar — mobile / tablet only ── */}
      <header className="fixed top-0 right-0 w-full flex justify-between items-center px-6 py-6 z-40 bg-transparent pointer-events-none lg:hidden">
        {/* Brand mark on left */}
        <span className="pointer-events-auto text-[#f2ca50] font-headline font-bold text-sm tracking-[0.15em] uppercase">
          WEM
        </span>
        {/* Hamburger on right */}
        <button
          aria-label="Open navigation"
          className="pointer-events-auto text-white hover:text-[#f2ca50] transition-colors"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>

      {/* ── Mobile drawer backdrop ── */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ── Mobile drawer panel ── */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-72 z-[60] flex flex-col py-12 px-6
          bg-[#131315]/95 backdrop-blur-xl shadow-[40px_0_80px_rgba(0,0,0,0.7)]
          transition-transform duration-300 ease-in-out lg:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close button */}
        <button
          aria-label="Close navigation"
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(false)}
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Brand */}
        <div className="mb-16">
          <h2 className="text-xl font-bold tracking-[0.1em] text-[#f2ca50] font-headline">
            WEST EDMONTON MALL
          </h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2 font-label">
            The Original Mega-Mall
          </p>
        </div>

        <NavLinks onClick={() => setOpen(false)} />

        {/* CTAs */}
        <div className="mt-auto pt-8 border-t border-white/5 space-y-3">
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="block w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:brightness-110 active:scale-95 text-center"
          >
            BOOK AN EVENT
          </Link>
          <Link
            href="#"
            className="block w-full py-3 border border-primary/40 text-primary font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-primary/10 text-center"
          >
            DOWNLOAD PROSPECTUS
          </Link>
        </div>
      </aside>

      {/* ── Desktop sidebar ── */}
      <aside className="fixed left-0 top-0 bottom-0 flex-col py-12 px-6 z-50 bg-[#131315]/60 backdrop-blur-xl shadow-[40px_0_80px_rgba(0,0,0,0.5)] w-72 hidden lg:flex">
        <div className="mb-16">
          <h1 className="text-xl font-bold tracking-[0.1em] text-[#f2ca50] font-headline">
            WEST EDMONTON MALL
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2 font-label">
            The Original Mega-Mall
          </p>
        </div>

        <NavLinks />

        <div className="mt-auto pt-8 border-t border-white/5 space-y-3">
          <Link
            href="/events"
            className="block w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:brightness-110 active:scale-95 text-center"
          >
            BOOK AN EVENT
          </Link>
          <Link
            href="#"
            className="block w-full py-3 border border-primary/40 text-primary font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-primary/10 text-center"
          >
            DOWNLOAD PROSPECTUS
          </Link>
        </div>
      </aside>
    </>
  );
}
