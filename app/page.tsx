import AvailabilityForm from "./components/AvailabilityForm";

export default function Home() {
  return (
    <>
      <main>
{/* Hero Section — Cinematic Video-First */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
  {/* Cinematic Animated Background */}
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 pointer-events-none transition-transform duration-[20000ms]"
    style={{ backgroundImage: "url('/images/wem/wem_night_hero.jpg')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-6xl">
<p className="font-label uppercase tracking-[0.5em] text-primary text-sm mb-6">A World Unto Itself</p>
<h1 className="font-headline text-6xl md:text-9xl font-bold text-on-surface leading-tight tracking-tighter mb-8">
                    THE ORIGINAL <br/> <span className="gold-gradient-text italic">MEGA-MALL</span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
<button className="bg-primary text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform active:scale-95">
                        Experience The Vision
                    </button>
<button className="border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                        View Retail Space
                    </button>
</div>
</div>
{/* Scroll Indicator */}
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Discover More</span>
<div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent"></div>
</div>
</section>
{/* Stats Section (Cinematic Minimalist) */}
<section className="py-32 bg-surface-container-lowest px-12 border-y border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-2">
<span className="font-headline text-5xl text-primary font-bold">5.3M</span>
<p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">Square Feet of Experience</p>
</div>
<div className="space-y-2">
<span className="font-headline text-5xl text-white font-bold">800+</span>
<p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">Global Retail Brands</p>
</div>
<div className="space-y-2">
<span className="font-headline text-5xl text-white font-bold">30.8M</span>
<p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">Annual Visitors</p>
</div>
<div className="space-y-2">
<span className="font-headline text-5xl text-white font-bold">20K+</span>
<p className="font-label uppercase text-[10px] tracking-[0.2em] text-white/40">Parking Spaces</p>
</div>
</div>
</section>
{/* The Vision Section (Asymmetric Bento) */}
<section className="py-32 px-12 bg-background">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-7 space-y-8">
<span className="text-primary font-label uppercase tracking-[0.4em] text-xs">Legacy &amp; Innovation</span>
<h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-none">Architecting the <br/>Impossible.</h2>
<p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                            Since 1981, West Edmonton Mall has stood as a testament to radical ambition. It is more than a destination; it is a meticulously curated ecosystem where retail, entertainment, and luxury hospitality converge into a singular, seamless narrative.
                        </p>
<a className="inline-block border-b-2 border-primary pb-2 text-primary font-bold uppercase text-xs tracking-widest hover:text-white hover:border-white transition-all" href="#">Explore the History</a>
</div>
<div className="col-span-12 lg:col-span-5 relative aspect-[4/5] bg-surface-container overflow-hidden">
<img alt="WEM Architecture" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-110 transition-all duration-1000" data-alt="West Edmonton Mall interior" src="/images/wem/wem_interior.jpg"/>
</div>
</div>
</div>
</section>
{/* Districts (Editorial Layout) */}
<section className="py-32 px-12 bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div>
<span className="text-primary font-label uppercase tracking-[0.4em] text-xs">Curated Environments</span>
<h2 className="font-headline text-5xl text-on-surface mt-4">The Districts</h2>
</div>
<p className="text-on-surface-variant max-w-sm text-sm">
                    Navigate through meticulously themed environments, each designed to evoke a specific mood and cater to a distinct demographic profile.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4">
{/* Luxury District */}
<div className="group relative aspect-[3/4] overflow-hidden bg-black">
<img alt="Luxury District" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="/images/wem/wem_europa.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="font-headline text-2xl text-white mb-2">Europa Boulevard</h3>
<p className="text-white/60 text-xs uppercase tracking-widest font-label">Luxury High-Street</p>
</div>
</div>
{/* Bourbon Street */}
<div className="group relative aspect-[3/4] overflow-hidden bg-black">
<img alt="Dining District" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="/images/wem/wem_ice_palace.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="font-headline text-2xl text-white mb-2">World Waterpark</h3>
<p className="text-white/60 text-xs uppercase tracking-widest font-label">Fine Dining &amp; Nightlife</p>
</div>
</div>
{/* Chinatown */}
<div className="group relative aspect-[3/4] overflow-hidden bg-black">
<img alt="Chinatown District" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="/images/wem/wem_galaxyland.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
<h3 className="font-headline text-2xl text-white mb-2">Galaxyland</h3>
<p className="text-white/60 text-xs uppercase tracking-widest font-label">Specialty &amp; Culture</p>
</div>
</div>
</div>
</section>
{/* Availability CTA */}
{/* ── Dining & Lifestyle ── */}
<section className="py-32 px-12 lg:px-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
    <div className="relative overflow-hidden">
      <img
        src="/images/wem/wem_dining.jpg"
        alt="Dining and lifestyle at West Edmonton Mall"
        className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-low" />
    </div>
    <div className="bg-surface-container p-16 lg:p-24 flex flex-col justify-center">
      <span className="text-primary font-label uppercase tracking-[0.4em] text-xs mb-4 flex items-center gap-3">
        <span className="h-[1px] w-8 bg-primary inline-block" /> Dining &amp; Lifestyle
      </span>
      <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight mb-6">
        Food as a <span className="gold-gradient-text italic">Destination.</span>
      </h2>
      <p className="text-on-surface-variant leading-relaxed mb-10 text-lg">
        With over 100 dining options — from Michelin-calibre restaurants to artisanal cafés and global street food — WEM has transformed dining from an afterthought into a day-long lifestyle experience.
      </p>
      <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
        {[
          { stat: "100+", label: "Dining Concepts" },
          { stat: "4.5h", label: "Avg Dwell Time" },
          { stat: "68%", label: "Dine While Shopping" },
        ].map(({ stat, label }) => (
          <div key={label}>
            <span className="font-headline text-2xl text-primary block mb-1">{stat}</span>
            <p className="font-label uppercase text-[9px] tracking-[0.15em] text-white/40">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</section>

<section className="py-40 text-center bg-surface relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<h2 className="font-headline text-5xl md:text-7xl font-bold mb-12">Claim Your Place in <br/><span className="italic">The Greatest Show.</span></h2>
<AvailabilityForm />
</div>
</section>
</main>
<footer className="bg-surface-container-lowest py-24 px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
<div className="col-span-2">
<h3 className="font-headline text-3xl font-bold text-white mb-6 uppercase tracking-widest">WEST EDMONTON MALL</h3>
<p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
                    An iconic global landmark and North America's most dynamic retail destination. Redefining the human experience through architecture and ambition.
                </p>
<div className="flex space-x-6">
<a className="text-white/40 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="public">public</span>
</a>
<a className="text-white/40 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="share">share</span>
</a>
<a className="text-white/40 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</a>
</div>
</div>
<div>
<h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-8">Navigation</h4>
<ul className="space-y-4 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Leasing Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Investor Relations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Media Assets</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-8">Contact</h4>
<p className="text-sm text-white/60 leading-relaxed">
                    8882 170 St NW<br/>
                    Edmonton, AB T5T 4J2<br/><br/>
                    p: +1 780 444 5300<br/>
                    e: lease@wem.ca
                </p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.2em]">
<p>© 2024 West Edmonton Mall Properties Inc. All Rights Reserved.</p>
<div className="flex space-x-8 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Use</a>
<a className="hover:text-white" href="#">Sustainability</a>
</div>
</div>
</footer>
    </>
  );
}
