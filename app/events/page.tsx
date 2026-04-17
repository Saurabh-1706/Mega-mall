import type { Metadata } from "next";
import Image from "next/image";
import { MagneticButton } from "../components/ui/MagneticButton";
import { ParallaxImage } from "../components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "Events & Venue | West Edmonton Mall",
  description:
    "Book world-class events at West Edmonton Mall. Concerts, brand activations, corporate launches, and convention space for 10,000+ attendees.",
};

export default function Events() {
  return (
    <>
      <main className="lg:ml-72 min-h-screen bg-background">
        {/* ── Hero ── */}
        <section className="relative h-screen flex flex-col justify-center px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="WEM Concert Event"
              className="object-cover opacity-50 scale-105"
              src="/images/wem/wem_night_hero.jpg"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-primary font-label uppercase tracking-[0.5em] text-sm mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary" /> Events & Venue
            </p>
            <h1 className="font-headline text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight mb-8">
              THE WORLD&apos;S{" "}
              <span className="gold-gradient-text italic">STAGE</span>
              <br />
              IS HERE.
            </h1>
            <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-12">
              From sold-out concerts to global brand launches and corporate conventions — West Edmonton Mall is North America&apos;s most powerful live event platform, with 5.3 million square feet and 30 million captive visitors annually.
            </p>
            <div className="flex flex-wrap gap-6">
              <MagneticButton className="luxury-gradient text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-xs">
                Inquire About Booking
              </MagneticButton>
              <MagneticButton className="border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-xs text-white hover:bg-white/10 transition-colors">
                Explore Venues
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* ── By the Numbers ── */}
        <section className="py-24 px-12 lg:px-24 bg-surface-container-lowest border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { stat: "10K+",   label: "Capacity — Main Arena" },
              { stat: "30M",    label: "Annual Built-In Audience" },
              { stat: "4.5 h",  label: "Average Visitor Dwell Time" },
              { stat: "365",    label: "Event-Days Per Year" },
            ].map(({ stat, label }) => (
              <div key={label} className="space-y-2">
                <span className="font-headline text-5xl text-primary font-bold block">{stat}</span>
                <p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Venue Showcase ── */}
        <section id="venues" className="py-32 px-12 lg:px-24 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">World-Class Infrastructure</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface mt-4 mb-6">Venue Portfolio</h2>
              <p className="text-on-surface-variant max-w-2xl">
                Seven distinct venue environments within one property — from intimate pop-up activations to 10,000-seat arena concerts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                {
                  title: "World Waterpark Arena",
                  category: "Concerts & Live Performance",
                  cap: "10,000 seats",
                  img: "/images/wem/wem_ice_palace.jpg",
                },
                {
                  title: "Galaxyland Event Space",
                  category: "Brand Activations & Pop-Ups",
                  cap: "2,500 guests",
                  img: "/images/wem/wem_galaxyland.jpg",
                },
                {
                  title: "Europa Boulevard",
                  category: "Corporate Events & Galas",
                  cap: "1,200 guests",
                  img: "/images/wem/wem_europa.jpg",
                },
              ].map(({ title, category, cap, img }) => (
                <div key={title} className="group relative aspect-[3/4] overflow-hidden bg-black">
                  <Image
                    alt={title}
                    className="object-cover opacity-55 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <p className="text-primary font-label uppercase text-[10px] tracking-widest mb-2">{category}</p>
                    <h3 className="font-headline text-2xl text-white mb-1">{title}</h3>
                    <p className="text-white/50 text-xs uppercase tracking-widest">{cap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Event Types ── */}
        <section className="py-32 px-12 lg:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">What We Host</span>
                <h2 className="font-headline text-5xl text-on-surface mt-4 mb-12">Built for Every Format</h2>
                <div className="space-y-0 divide-y divide-white/5">
                  {[
                    { icon: "music_note",        title: "Concerts & Live Music",       desc: "Major touring artists, residencies, and festivals in a world-class indoor arena." },
                    { icon: "campaign",           title: "Brand Activations",           desc: "Product launches, pop-up experiences, and immersive brand installations in high-traffic corridors." },
                    { icon: "corporate_fare",     title: "Corporate Events",            desc: "Conferences, galas, and leadership summits with full AV, catering, and logistics support." },
                    { icon: "stadium",            title: "Conventions & Trade Shows",   desc: "Exposition-grade floor space for trade shows, expos, and industry conventions." },
                    { icon: "movie",              title: "Media & Film Production",     desc: "Unique backdrops for advertising campaigns, TV productions, and content creation." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-6 py-8 group">
                      <span
                        className="material-symbols-outlined text-primary text-2xl mt-1 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {icon}
                      </span>
                      <div>
                        <h4 className="font-label font-bold uppercase tracking-widest text-sm text-white mb-2">{title}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <ParallaxImage src="/images/wem/wem_event.jpg" alt="Event at WEM" speed={1.5} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-surface-container-high p-8 border-l-4 border-primary max-w-xs">
                  <p className="font-headline text-3xl text-primary mb-1">$120M+</p>
                  <p className="font-label uppercase text-[10px] tracking-widest text-white/60">Annual Event Revenue Impact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Past Highlights ── */}
        <section className="py-32 px-12 lg:px-24 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">Track Record</span>
              <h2 className="font-headline text-5xl text-on-surface mt-4">Past Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { year: "2023", event: "International Auto Show", attendance: "85,000 attendees across 4 days" },
                { year: "2023", event: "Global Fashion Week Popup", attendance: "40+ designer labels, 12-day run" },
                { year: "2024", event: "New Year's Eve Concert Series", attendance: "Sold-out, 10,000 capacity" },
              ].map(({ year, event, attendance }) => (
                <div key={event} className="bg-surface-container-high p-10 border-t-2 border-primary">
                  <p className="text-primary font-label text-xs uppercase tracking-widest mb-4">{year}</p>
                  <h4 className="font-headline text-2xl text-white mb-4">{event}</h4>
                  <p className="text-on-surface-variant text-sm">{attendance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <section id="book" className="py-40 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(242,202,80,0.08)_0%,_transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6">
              Ready to Book the<br />
              <span className="gold-gradient-text italic">World&apos;s Stage?</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-16 max-w-2xl mx-auto">
              Our dedicated events team can accommodate everything from 50-person private dinners to 10,000-seat arena concerts. Let&apos;s build something unforgettable.
            </p>
            <div className="bg-surface-container-high p-12 max-w-2xl mx-auto text-left space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Organization</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary placeholder:text-white/20 text-white font-label text-sm transition-colors"
                    placeholder="YOUR COMPANY"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Event Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary text-white font-label text-sm appearance-none transition-colors cursor-pointer">
                    <option value="concert">CONCERT / LIVE PERFORMANCE</option>
                    <option value="brand">BRAND ACTIVATION</option>
                    <option value="corporate">CORPORATE EVENT / GALA</option>
                    <option value="convention">CONVENTION / TRADE SHOW</option>
                    <option value="media">MEDIA / FILM PRODUCTION</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Expected Attendance</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary text-white font-label text-sm appearance-none transition-colors cursor-pointer">
                  <option>UNDER 500</option>
                  <option>500 – 2,500</option>
                  <option>2,500 – 5,000</option>
                  <option>5,000 – 10,000</option>
                  <option>10,000+</option>
                </select>
              </div>
              <button
                id="events-book-btn"
                className="w-full luxury-gradient text-on-primary py-6 font-bold uppercase tracking-[0.3em] text-sm hover:brightness-110 transition-all"
              >
                Submit Booking Inquiry
              </button>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-surface-container-lowest py-24 px-12 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <p>© 2024 West Edmonton Mall Properties Inc. All Rights Reserved.</p>
            <div className="flex space-x-8">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Use</a>
              <a className="hover:text-white transition-colors" href="#">Media Kit</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
