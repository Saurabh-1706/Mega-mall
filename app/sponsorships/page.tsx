import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsorships & Brand Partnerships | West Edmonton Mall",
  description:
    "Partner with North America's largest mall. 30M annual visitors, premium brand activations, naming rights, digital spectaculars, and world-class event sponsorships.",
};

const tiers = [
  {
    tier: "Premier Partner",
    tagline: "Maximum Visibility. Unrivalled Reach.",
    price: "Custom",
    icon: "workspace_premium",
    highlight: true,
    perks: [
      "Exclusive Naming Rights",
      "Building & Entrance Signage",
      "Dedicated Annual Activation Space",
      "VIP Event Access & Hospitality",
      "Co-branded Marketing Campaigns",
      "Executive Relationship Manager",
    ],
  },
  {
    tier: "Signature Partner",
    tagline: "Premium Digital Real Estate.",
    price: "From $250K/yr",
    icon: "display_external_input",
    highlight: false,
    perks: [
      "4K LED Digital Spectaculars",
      "2.8M+ Monthly Digital Impressions",
      "Prime Corridor Placements",
      "Seasonal Campaign Slots",
      "Social Media Cross-Promotion",
      "Monthly Performance Reports",
    ],
  },
  {
    tier: "Activation Partner",
    tagline: "Direct Consumer Engagement.",
    price: "From $25K",
    icon: "celebration",
    highlight: false,
    perks: [
      "High-Traffic Pop-Up Spaces",
      "Brand Sampling Stations",
      "Flexible Short-Term Terms",
      "Foot Traffic Analytics",
      "Event Tie-in Opportunities",
      "Approved Vendor Network",
    ],
  },
];

const formats = [
  { icon: "celebration",              label: "Experiential Zones",    desc: "Immersive branded environments in high-footfall corridors." },
  { icon: "display_external_input",   label: "Digital OOH",           desc: "4K spectaculars with 2.8M+ monthly impressions." },
  { icon: "volunteer_activism",        label: "In-Mall Sampling",      desc: "Direct product sampling at premium locations." },
  { icon: "event_available",          label: "Sponsored Events",      desc: "Custom-branded concerts, galas, and trade shows." },
  { icon: "storefront",               label: "Retailer Tie-ins",      desc: "Co-marketing activations with anchor tenants." },
  { icon: "calendar_month",           label: "Seasonal Campaigns",    desc: "Holiday, back-to-school, and major event takeovers." },
];

const demographics = [
  { label: "Ages 18–34",    pct: 42, bar: "w-[42%]" },
  { label: "Ages 35–54",    pct: 36, bar: "w-[36%]" },
  { label: "Ages 55+",      pct: 22, bar: "w-[22%]" },
];

export default function Sponsorships() {
  return (
    <>
      <main className="lg:ml-72 min-h-screen bg-background">

        {/* ── Hero ── */}
        <section className="relative h-screen flex flex-col justify-center px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="West Edmonton Mall at night"
              className="object-cover scale-105"
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
              <span className="h-[1px] w-12 bg-primary" /> Brand Partnerships
            </p>
            <h1 className="font-headline text-6xl lg:text-[6.5rem] font-bold leading-[0.9] tracking-tight mb-8">
              PARTNER WITH THE{" "}
              <span className="gold-gradient-text italic">WORLD&apos;S</span>
              <br />
              LARGEST MALL.
            </h1>
            <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-12">
              30 million visitors. 5.3 million square feet. 365 days of unmatched consumer engagement. West Edmonton Mall isn&apos;t just a destination — it&apos;s North America&apos;s most powerful brand platform.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#tiers"
                className="luxury-gradient text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-xs"
              >
                View Partnership Tiers
              </a>
              <a
                href="#contact"
                className="border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-xs text-white hover:bg-white/10 transition-colors"
              >
                Download Media Kit
              </a>
            </div>
          </div>
        </section>

        {/* ── Key Stats ── */}
        <section className="py-24 px-12 lg:px-24 bg-surface-container-lowest border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { stat: "30M+",   label: "Annual Visitors" },
              { stat: "4.5h",   label: "Avg Dwell Time" },
              { stat: "68%",    label: "Tourist Mix" },
              { stat: "$186",   label: "Avg Spend Per Visit" },
            ].map(({ stat, label }) => (
              <div key={label} className="space-y-2">
                <span className="font-headline text-5xl text-primary font-bold block">{stat}</span>
                <p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Partnership Tiers ── */}
        <section id="tiers" className="py-32 px-12 lg:px-24 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">Partnership Tiers</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface mt-4 mb-6">
                Choose Your Stage
              </h2>
              <p className="text-on-surface-variant max-w-2xl">
                Three tiers of partnership built for brands of every scale — from global naming rights to agile pop-up activations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {tiers.map(({ tier, tagline, price, icon, highlight, perks }) => (
                <div
                  key={tier}
                  className={`flex flex-col p-10 ${
                    highlight
                      ? "bg-surface-container-high border-t-4 border-primary"
                      : "bg-surface-container border-t-2 border-white/10"
                  }`}
                >
                  {highlight && (
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">
                      ★ Most Popular
                    </span>
                  )}
                  <span
                    className="material-symbols-outlined text-primary text-3xl mb-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  <h3 className="font-headline text-2xl text-white mb-2">{tier}</h3>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-2">{tagline}</p>
                  <p className="text-primary font-bold text-lg mb-8">{price}</p>
                  <ul className="space-y-3 flex-grow mb-10">
                    {perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0"
                          style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                      highlight
                        ? "luxury-gradient text-on-primary hover:brightness-110"
                        : "border border-primary/40 text-primary hover:bg-primary/10"
                    }`}
                  >
                    Inquire Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Audience Demographics ── */}
        <section className="py-32 px-12 lg:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">Audience Intelligence</span>
                <h2 className="font-headline text-5xl text-on-surface mt-4 mb-6">Who You&apos;ll Reach</h2>
                <p className="text-on-surface-variant leading-relaxed mb-12">
                  WEM attracts a premium, high-intent audience. With 68% tourist mix and an average household income exceeding $100K, our visitors are among the most valuable consumers in Western Canada.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
                  {[
                    { val: "68%",   lbl: "Tourist Mix" },
                    { val: "$100K+", lbl: "Avg Household Income" },
                    { val: "2.3×",  lbl: "Monthly Visit Freq." },
                  ].map(({ val, lbl }) => (
                    <div key={lbl}>
                      <span className="font-headline text-3xl text-primary block mb-1">{val}</span>
                      <p className="font-label uppercase text-[10px] tracking-[0.15em] text-white/40">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="font-label uppercase text-xs tracking-widest text-white/40 mb-6">Age Distribution</h3>
                {demographics.map(({ label, pct, bar }) => (
                  <div key={label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant font-label uppercase tracking-widest text-xs">{label}</span>
                      <span className="text-primary font-bold">{pct}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10">
                      <div className={`h-full bg-primary ${bar} transition-all duration-1000`} />
                    </div>
                  </div>
                ))}

                <div className="mt-12 p-8 bg-surface-container border-l-4 border-primary">
                  <p className="text-primary font-headline text-3xl mb-1">$1.5B+</p>
                  <p className="font-label uppercase text-[10px] tracking-widest text-white/60">
                    Annual In-Mall Retail Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Activation Formats ── */}
        <section className="py-32 px-12 lg:px-24 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="text-primary font-label uppercase tracking-[0.4em] text-xs">How We Activate</span>
              <h2 className="font-headline text-5xl text-on-surface mt-4">6 Ways to Show Up</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {formats.map(({ icon, label, desc }) => (
                <div key={label} className="bg-surface-container p-10 group hover:bg-surface-container-high transition-colors">
                  <span
                    className="material-symbols-outlined text-primary text-3xl mb-6 block transition-transform group-hover:scale-110"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  <h3 className="font-label font-bold uppercase tracking-widest text-sm text-white mb-3">{label}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section id="contact" className="py-40 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(242,202,80,0.08)_0%,_transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s Build Your<br />
              <span className="gold-gradient-text italic">Brand&apos;s Biggest Stage.</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-16 max-w-2xl mx-auto">
              Our partnerships team works with brands of every size to craft custom activations that drive measurable results. Let&apos;s start the conversation.
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
                  <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Contact Name</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary placeholder:text-white/20 text-white font-label text-sm transition-colors"
                    placeholder="YOUR NAME"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Partnership Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary text-white font-label text-sm appearance-none transition-colors cursor-pointer">
                    <option value="premier" className="bg-surface">PREMIER PARTNER</option>
                    <option value="signature" className="bg-surface">SIGNATURE PARTNER</option>
                    <option value="activation" className="bg-surface">ACTIVATION PARTNER</option>
                    <option value="custom" className="bg-surface">CUSTOM INQUIRY</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold block">Budget Range</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:ring-0 focus:outline-none focus:border-primary text-white font-label text-sm appearance-none transition-colors cursor-pointer">
                    <option className="bg-surface">UNDER $50K</option>
                    <option className="bg-surface">$50K – $250K</option>
                    <option className="bg-surface">$250K – $1M</option>
                    <option className="bg-surface">$1M+</option>
                  </select>
                </div>
              </div>
              <button
                id="sponsorships-submit-btn"
                className="w-full luxury-gradient text-on-primary py-6 font-bold uppercase tracking-[0.3em] text-sm hover:brightness-110 transition-all"
              >
                Submit Partnership Inquiry
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
