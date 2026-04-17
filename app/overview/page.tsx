import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Overview | West Edmonton Mall",
  description:
    "The scale, reach, and commercial dominance of West Edmonton Mall — 5.3M sq ft, 30M annual visitors, and unmatched catchment across Western Canada.",
};

export default function Overview() {
  return (
    <>
      <main className="lg:ml-72 min-h-screen">

        {/* ── Hero: SCALE WITHOUT PRECEDENT ── */}
        <section className="relative h-screen flex flex-col justify-center px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="WEM Overview"
              className="object-cover opacity-40"
              src="/images/wem/wem_night_hero.jpg"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-primary font-label uppercase tracking-[0.5em] text-sm mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary" /> Destination Overview
            </p>
            <h1 className="text-7xl lg:text-[7rem] font-headline font-bold leading-[0.9] tracking-tight mb-8">
              SCALE<br />
              <span className="text-primary italic">WITHOUT</span><br />
              PRECEDENT.
            </h1>
            <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-12">
              West Edmonton Mall is not merely a retail center; it is a global phenomenon. A city within a city, commanding the commercial landscape of Western Canada with unmatched gravitational pull.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-12">
              <div>
                <span className="block text-4xl font-headline text-white mb-2">5.3M</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Square Feet of Possibility</span>
              </div>
              <div>
                <span className="block text-4xl font-headline text-white mb-2">800+</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">World-Class Retailers</span>
              </div>
              <div>
                <span className="block text-4xl font-headline text-white mb-2">30M+</span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Annual Global Visitors</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Hub of the West ── */}
        <section className="py-32 px-12 lg:px-24 bg-surface-container-lowest">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-headline mb-8">The Hub of the West</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Strategically positioned as the primary commercial anchor of Western Canada, WEM attracts a diverse demographic ranging from international tourists to the highest concentration of affluent residents in the province.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                  <span className="text-sm uppercase tracking-widest">Alberta&apos;s Premier Tourist Destination</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                  <span className="text-sm uppercase tracking-widest">Global Luxury Hub</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                  <span className="text-sm uppercase tracking-widest">Integrated Entertainment Ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Market Penetration Bar Chart */}
              <div className="bg-surface-container h-80 p-8 flex flex-col justify-between group overflow-hidden relative">
                <div className="z-10">
                  <span className="text-primary text-xs uppercase tracking-widest mb-4 block">Market Penetration</span>
                  <h3 className="text-2xl font-headline">94% Local Awareness</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="z-10 flex items-end gap-1">
                  <div className="w-full bg-primary/20 h-12" />
                  <div className="w-full bg-primary/40 h-24" />
                  <div className="w-full bg-primary/60 h-48" />
                  <div className="w-full bg-primary h-64" />
                </div>
              </div>

              {/* Global Reach */}
              <div className="bg-surface-container-high h-80 p-8 flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
                <h3 className="text-2xl font-headline mb-4">Global Reach</h3>
                <p className="text-sm text-on-surface-variant px-6">Visitors from over 120 countries annually, cementing its status as an international landmark.</p>
              </div>

              {/* Catchment Map — CSS only */}
              <div className="md:col-span-2 bg-surface relative overflow-hidden group flex flex-col">
                {/* Legend row — always visible above map */}
                <div className="flex items-center justify-end gap-6 px-6 pt-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-outline-variant" />
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Secondary Catchment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-primary">Primary Influence Zone</span>
                  </div>
                </div>
                {/* Circle map */}
                <div className="relative flex-1 min-h-[260px] flex items-center justify-center">
                  <div className="absolute w-[280px] h-[280px] rounded-full border border-primary/10 animate-pulse" />
                  <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20" />
                  <div className="absolute w-[120px] h-[120px] rounded-full border-2 border-primary/40" />
                  <div className="absolute w-[50px] h-[50px] rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary uppercase tracking-widest text-center leading-tight">WEM</span>
                  </div>
                  {[
                    { top: "22%", left: "60%", lbl: "Calgary" },
                    { top: "32%", left: "74%", lbl: "Sask." },
                    { top: "65%", left: "68%", lbl: "BC" },
                    { top: "18%", left: "28%", lbl: "Intl" },
                  ].map(({ top, left, lbl }) => (
                    <div key={lbl} style={{ position: "absolute", top, left }} className="flex flex-col items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-[9px] text-primary/60 uppercase tracking-wider">{lbl}</span>
                    </div>
                  ))}
                </div>
                {/* Text below map — no overlap */}
                <div className="px-8 pb-8 pt-4">
                  <h3 className="text-3xl font-headline mb-3">Unmatched Catchment</h3>
                  <p className="text-on-surface-variant text-sm max-w-md">Our reach extends far beyond the city limits, capturing the economic heartbeat of four provinces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial Spread ── */}
        <section className="py-32 bg-background">
          <div className="px-12 lg:px-24 mb-24">
            <h2 className="text-6xl font-headline italic tracking-tight mb-4">Curating the Extraordinary.</h2>
            <div className="h-[1px] w-full bg-outline-variant/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-outline-variant/30">
            <div className="lg:col-span-4 border-r border-outline-variant/30 p-12 lg:p-24 flex flex-col justify-between min-h-[600px]">
              <div>
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold block mb-8">Districts</span>
                <h3 className="text-4xl font-headline mb-8">Europa Boulevard</h3>
                <p className="text-on-surface-variant leading-relaxed">A meticulously crafted European-style streetscape featuring boutique flagship stores and artisanal dining experiences under an eternal twilight.</p>
              </div>
              <a className="text-xs uppercase tracking-widest text-white border-b-2 border-primary self-start pb-1 hover:text-primary transition-colors" href="#">Explore the District</a>
            </div>
            <div className="lg:col-span-8 relative group overflow-hidden">
              <Image alt="Europa Boulevard" className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="/images/wem/wem_europa.jpg" fill sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-outline-variant/30">
            <div className="lg:col-span-8 relative group overflow-hidden order-2 lg:order-1">
              <Image alt="Luxury Retail at WEM" className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="/images/wem/wem_luxury_retail.jpg" fill sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
            <div className="lg:col-span-4 p-12 lg:p-24 flex flex-col justify-between min-h-[600px] order-1 lg:order-2">
              <div>
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold block mb-8">Experience</span>
                <h3 className="text-4xl font-headline mb-8">The Luxury Wing</h3>
                <p className="text-on-surface-variant leading-relaxed">Where the world&apos;s most prestigious maisons converge. A high-altitude retail experience curated for the most discerning global citizen.</p>
              </div>
              <a className="text-xs uppercase tracking-widest text-white border-b-2 border-primary self-start pb-1 hover:text-primary transition-colors" href="#">View Brand List</a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-48 px-12 lg:px-24 text-center bg-surface-container-low flex flex-col items-center">
          <h2 className="text-5xl lg:text-7xl font-headline mb-12 max-w-4xl mx-auto leading-tight">Be part of the next chapter.</h2>
          <p className="text-on-surface-variant text-xl mb-16 max-w-2xl mx-auto">Join a portfolio that defines the industry. Inquire about current availability and bespoke leasing opportunities.</p>
          <div className="w-full max-w-xl">
            <div className="flex border-b border-primary/40 focus-within:border-primary transition-colors pb-2">
              <input className="bg-transparent border-none w-full text-sm tracking-widest uppercase focus:ring-0 text-white placeholder-white/30" placeholder="YOUR EMAIL ADDRESS" type="email" />
              <button className="text-primary uppercase text-xs font-bold tracking-widest px-4 hover:tracking-[0.2em] transition-all">Submit</button>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-24 px-12 lg:px-24 bg-background border-t border-outline-variant/10">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="space-y-6">
              <div className="text-2xl font-headline font-bold tracking-widest text-white uppercase">WEM</div>
              <p className="text-on-surface-variant text-sm max-w-xs">8882 170 St NW, Edmonton, AB T5T 4M2<br />North America&apos;s Premier Destination.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white">Explore</span>
                <ul className="text-xs text-on-surface-variant space-y-2 uppercase tracking-widest">
                  <li><a className="hover:text-primary" href="/">Vision</a></li>
                  <li><a className="hover:text-primary" href="/retail">Districts</a></li>
                  <li><a className="hover:text-primary" href="/attractions">Attractions</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white">Business</span>
                <ul className="text-xs text-on-surface-variant space-y-2 uppercase tracking-widest">
                  <li><a className="hover:text-primary" href="/retail">Leasing</a></li>
                  <li><a className="hover:text-primary" href="/sponsorships">Sponsorships</a></li>
                  <li><a className="hover:text-primary" href="/events">Events</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white">Social</span>
                <ul className="text-xs text-on-surface-variant space-y-2 uppercase tracking-widest">
                  <li><a className="hover:text-primary" href="#">Instagram</a></li>
                  <li><a className="hover:text-primary" href="#">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-on-surface-variant tracking-widest uppercase">© 2024 West Edmonton Mall. All Rights Reserved.</p>
            <div className="flex gap-8 text-[10px] text-on-surface-variant tracking-widest uppercase">
              <a className="hover:text-white" href="#">Privacy Policy</a>
              <a className="hover:text-white" href="#">Terms of Use</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
