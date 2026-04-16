export default function Attractions() {
  return (
    <>

{/* Main Content Canvas */}
<main className="lg:ml-72 pt-24 min-h-screen bg-background relative overflow-hidden">
{/* Hero Section */}
<section className="relative h-[921px] flex items-center justify-start px-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60 brightness-75 grayscale-[20%]" src="/images/wem/wem_galaxyland.jpg" alt="Galaxyland indoor amusement park at WEM" />
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<p className="font-label uppercase text-primary tracking-[0.4em] mb-6 font-bold text-sm">Entertainment Powerhouse</p>
<h1 className="font-headline text-[7rem] leading-[0.9] text-white font-bold tracking-tighter mb-8 italic">
                    THE GREATEST <br/> <span className="text-glow text-primary not-italic">SHOW</span> ON EARTH
                </h1>
<p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
                    Where retail meets wonder. West Edmonton Mall attractions aren't just features—they are the engines of a multi-billion dollar destination ecosystem.
                </p>
<div className="flex gap-6">
<button className="px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold uppercase tracking-widest text-xs">
                        Explore Partnership Opportunities
                    </button>
<button className="px-10 py-5 border border-outline-variant/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                        View Traffic Data
                    </button>
</div>
</div>
</section>
{/* Stats Section (Asymmetric) */}
<section className="py-32 px-20 grid grid-cols-12 gap-12 bg-surface-container-low">
<div className="col-span-5 flex flex-col justify-center">
<h2 className="font-headline text-5xl text-white mb-8">Captive Audiences, <br/>Consistent Revenue.</h2>
<p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
                    Our anchors aren't just department stores. They are world-renowned wonders that transform casual shoppers into dedicated tourists, driving over 30 million visits annually.
                </p>
<div className="h-1 w-24 bg-primary"></div>
</div>
<div className="col-span-7 grid grid-cols-2 gap-px bg-outline-variant/10">
<div className="bg-surface p-12 flex flex-col justify-center">
<span className="font-headline text-6xl text-primary mb-2">30.8M</span>
<span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Annual Visitors</span>
</div>
<div className="bg-surface p-12 flex flex-col justify-center">
<span className="font-headline text-6xl text-primary mb-2">4.5H</span>
<span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Average Dwell Time</span>
</div>
<div className="bg-surface p-12 flex flex-col justify-center">
<span className="font-headline text-6xl text-primary mb-2">68%</span>
<span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Tourist Visitation</span>
</div>
<div className="bg-surface p-12 flex flex-col justify-center">
<span className="font-headline text-6xl text-primary mb-2">$1.2B</span>
<span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Regional Impact</span>
</div>
</div>
</section>
{/* The Big Three (Editorial Layout) */}
<section className="py-32 bg-background">
<div className="px-20 mb-24 flex justify-between items-end">
<div>
<p className="font-label uppercase text-primary tracking-[0.3em] mb-4 text-xs">The Power Anchors</p>
<h2 className="font-headline text-6xl text-white">Legendary Icons</h2>
</div>
<p className="font-body text-on-surface-variant max-w-md text-right">
                    Strategically placed to maximize foot traffic through every retail district in the mall.
                </p>
</div>
{/* World Waterpark */}
<div className="relative w-full h-[716px] flex mb-32 group">
<div className="w-2/3 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/wem/wem_ice_palace.jpg" alt="World Waterpark at West Edmonton Mall" />
</div>
<div className="w-1/3 bg-surface-container-high p-16 flex flex-col justify-center relative">
<span className="absolute -left-12 top-20 text-[10rem] font-bold text-white/5 font-headline select-none">01</span>
<h3 className="font-headline text-4xl text-white mb-6">World Waterpark</h3>
<p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                        Five acres of tropical paradise. Home to the world's largest indoor wave pool and high-octane slides that draw families from across the continent.
                    </p>
<div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
<span>The Impact</span>
<span className="material-symbols-outlined">trending_up</span>
</div>
</div>
</div>
{/* Galaxyland */}
<div className="relative w-full h-[716px] flex flex-row-reverse mb-32 group">
<div className="w-2/3 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/wem/wem_galaxyland.jpg" alt="Galaxyland indoor amusement park" />
</div>
<div className="w-1/3 bg-surface-container-lowest p-16 flex flex-col justify-center relative">
<span className="absolute -right-12 top-20 text-[10rem] font-bold text-white/5 font-headline select-none">02</span>
<h3 className="font-headline text-4xl text-white mb-6">Galaxyland</h3>
<p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                        The world's largest indoor amusement park. A neon-lit dreamscape featuring the Mindbender and cosmic-themed thrills for every age bracket.
                    </p>
<div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
<span>Retail Synergy</span>
<span className="material-symbols-outlined">shutter_speed</span>
</div>
</div>
</div>
{/* Sea Life Caverns */}
<div className="relative w-full h-[716px] flex group">
<div className="w-2/3 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/wem/wem_sealife.jpg" alt="Sea Life Caverns aquarium at West Edmonton Mall" />
</div>
<div className="w-1/3 bg-surface-container p-16 flex flex-col justify-center relative">
<span className="absolute -left-12 top-20 text-[10rem] font-bold text-white/5 font-headline select-none">03</span>
<h3 className="font-headline text-4xl text-white mb-6">Sea Life Caverns</h3>
<p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                        An underground marine wonderland. This attraction adds a sophisticated, educational layer to the mall's entertainment mix, diversifying the visitor profile.
                    </p>
<div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
<span>Demographic Reach</span>
<span className="material-symbols-outlined">water_drop</span>
</div>
</div>
</div>
</section>
{/* Partnership CTA Section */}
<section className="relative py-40 px-20 overflow-hidden">
<div className="absolute inset-0 bg-surface-container-highest opacity-40"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-32"></div>
<div className="relative z-10 grid grid-cols-12 gap-12 items-center">
<div className="col-span-7">
<h2 className="font-headline text-7xl text-white mb-8 tracking-tighter italic">Position Your Brand <br/>At the Heart of the Show.</h2>
<p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                        Partnering with WEM means your storefront is more than just a location—it's part of the world's most unique entertainment and retail journey.
                    </p>
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-primary font-headline text-3xl mb-1">94%</span>
<span className="font-label uppercase text-[10px] tracking-widest text-on-surface-variant">Tenant Satisfaction</span>
</div>
<div className="w-px h-12 bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="text-primary font-headline text-3xl mb-1">Top 1%</span>
<span className="font-label uppercase text-[10px] tracking-widest text-on-surface-variant">Global Retail Foot-traffic</span>
</div>
</div>
</div>
<div className="col-span-5">
<div className="bg-surface p-12 shadow-2xl relative border-b-4 border-primary">
<h4 className="font-headline text-2xl text-white mb-8 italic">Request a Site Visit</h4>
<div className="space-y-6">
<div className="border-b border-outline-variant/20 pb-2">
<label className="font-label uppercase text-[10px] tracking-widest text-primary font-bold">Your Company</label>
<input className="w-full bg-transparent border-none text-white p-0 focus:ring-0 placeholder:text-white/20" placeholder="Luxury Retail Group" type="text"/>
</div>
<div className="border-b border-outline-variant/20 pb-2">
<label className="font-label uppercase text-[10px] tracking-widest text-primary font-bold">Interest Area</label>
<select className="w-full bg-transparent border-none text-white p-0 focus:ring-0 appearance-none">
<option className="bg-surface">Premium Retail</option>
<option className="bg-surface">Experiential Pop-up</option>
<option className="bg-surface">Corporate Partnership</option>
</select>
</div>
<button className="w-full py-5 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs mt-4 hover:brightness-110 transition-all">
                                Explore Partnership Opportunities
                            </button>
</div>
</div>
</div>
</div>
</section>
{/* Footer Footer (Simple & Premium) */}
<footer className="py-20 px-20 bg-surface-container-lowest flex justify-between items-center border-t border-outline-variant/10">
<div className="flex flex-col gap-2">
<span className="text-lg font-bold tracking-widest text-white uppercase font-['Noto_Serif']">WEST EDMONTON MALL</span>
<p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">© 2024 Triple Five Group. All Rights Reserved.</p>
</div>
<div className="flex gap-12">
<a className="font-label text-[10px] uppercase tracking-widest text-white/50 hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-label text-[10px] uppercase tracking-widest text-white/50 hover:text-primary transition-colors" href="#">Investor Relations</a>
<a className="font-label text-[10px] uppercase tracking-widest text-white/50 hover:text-primary transition-colors" href="#">Media Kit</a>
</div>
</footer>
</main>
    </>
  );
}
