import Image from "next/image";

export default function Retail() {
  return (
    <>
      <main className="lg:ml-72 pt-24 min-h-screen">
{/* Hero Section */}
<section className="relative h-[921px] flex items-center px-8 md:px-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="relative w-full h-full">
<Image className="object-cover brightness-50 contrast-125" src="/images/wem/wem_interior.jpg" alt="West Edmonton Mall luxury retail corridor" fill sizes="100vw" priority />
</div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<span className="text-primary font-label text-sm uppercase tracking-[0.4em] block mb-6">Unrivaled Excellence</span>
<h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight mb-8 font-bold tracking-tighter">
                    The <span className="italic font-normal">Luxury</span> <br/>Collection
                </h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
                    A curated ecosystem of the world's most prestigious maisons, set within an architectural marvel that defines the future of global retail.
                </p>
<div className="flex flex-col md:flex-row gap-6">
<button className="luxury-gradient text-on-primary px-10 py-5 font-bold uppercase text-xs tracking-widest">Explore Directory</button>
<button className="border border-outline-variant/50 text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all">Request Portfolio</button>
</div>
</div>
</section>
{/* The Boulevard Section */}
<section className="py-32 px-8 md:px-24 bg-surface">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Europa Boulevard</h2>
<p className="text-on-surface-variant leading-relaxed">Inspired by the timeless elegance of Parisian streetscapes, Europa Boulevard offers a sensory journey through cobblestone paths, boutique storefronts, and an atmosphere of old-world charm fused with modern luxury.</p>
</div>
<div className="text-primary font-headline text-6xl italic opacity-20 hidden md:block">01</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-8 h-[600px] relative group overflow-hidden">
<Image className="object-cover transition-transform duration-700 group-hover:scale-110" src="/images/wem/wem_europa.jpg" alt="Europa Boulevard luxury boutique at West Edmonton Mall" fill sizes="(max-width: 768px) 100vw, 66vw" />
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background/90 to-transparent">
<h3 className="text-2xl font-headline mb-2 text-primary">Classic Heritage</h3>
<p className="text-sm text-on-surface-variant max-w-md">Bespoke storefront designs that honor architectural history while hosting the latest in contemporary fashion.</p>
</div>
</div>
<div className="md:col-span-4 flex flex-col gap-4">
<div className="h-1/2 bg-surface-container-low p-8 border-l-4 border-primary">
<span className="material-symbols-outlined text-primary text-4xl mb-6">architecture</span>
<h4 className="text-xl font-headline mb-4">Themed Immersion</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Every detail, from the gas lanterns to the masonry, is meticulously crafted to transport the visitor to a world of European sophistication.</p>
</div>
<div className="h-1/2 relative overflow-hidden">
<Image className="object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/wem/wem_night_hero.jpg" alt="Luxury retail interior at West Edmonton Mall" fill sizes="33vw" />
</div>
</div>
</div>
</section>
{/* The Collection (Bento Grid) */}
<section className="py-32 px-8 md:px-24 bg-surface-container-lowest">
<div className="text-center mb-24">
<h2 className="font-headline text-5xl md:text-7xl text-on-surface mb-8">The Collection</h2>
<div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
<p className="text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest text-xs font-semibold">Where Global Giants Reside</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1000px]">
<div className="md:col-span-2 md:row-span-2 bg-surface-container-high relative overflow-hidden group">
<Image className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" src="/images/wem/wem_luxury_retail.jpg" alt="Flagship luxury retail experience at WEM" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 p-12 flex flex-col justify-end">
<h3 className="text-4xl font-headline text-white mb-4">Flagship Experiences</h3>
<p className="text-white/70 max-w-md">Multi-level retail destinations for the world's leading brands, providing unprecedented space for creative brand storytelling.</p>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-high p-12 flex flex-col justify-center border-b border-primary/20">
<h3 className="text-3xl font-headline mb-6">Elite Demographics</h3>
<p className="text-on-surface-variant leading-relaxed mb-8">Capturing a high-net-worth audience of 30M+ annual visitors, our luxury tenants experience consistent growth and visibility among global travelers.</p>
<div className="flex space-x-12">
<div>
<div className="text-primary text-3xl font-headline mb-1">30M+</div>
<div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Annual Traffic</div>
</div>
<div>
<div className="text-primary text-3xl font-headline mb-1">$1.2B</div>
<div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Retail Sales</div>
</div>
</div>
</div>
<div className="bg-surface-container-low relative group h-48">
<Image className="object-cover" src="/images/wem/wem_boutique_display.jpg" alt="Premium leather goods boutique" fill sizes="(max-width: 768px) 100vw, 25vw" />
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-bold uppercase tracking-widest text-xs">View Details</span>
</div>
</div>
<div className="bg-surface-container-high p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-3xl">auto_graph</span>
<div>
<h4 className="font-headline text-lg mb-2">Market Dominance</h4>
<p className="text-xs text-on-surface-variant">West Edmonton Mall remains the undisputed champion of North American retail destination power.</p>
</div>
</div>
</div>
</section>
{/* Retail Evolution Section */}
<section className="py-32 px-8 md:px-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 -z-10"></div>
<div className="relative w-full aspect-video">
<Image className="object-cover shadow-[60px_60px_0px_rgba(242,202,80,0.05)]" src="/images/wem/wem_phygital.jpg" alt="Futuristic phygital retail concept at WEM" fill sizes="(max-width: 1024px) 100vw, 50vw" />
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-primary font-label text-sm uppercase tracking-[0.4em] block mb-8">The Future is Here</span>
<h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-10 leading-tight">Retail <br/><span className="italic font-normal">Evolution</span></h2>
<p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                        We are redefining the boundary between commerce and theater. 'Retail Evolution' integrates digital interactivity with tactile luxury, creating a phygital environment that caters to the next generation of consumers.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-center space-x-4 border-b border-outline-variant/20 pb-4">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "\'FILL\' 1" }}>stars</span>
<span className="font-label uppercase text-xs tracking-widest font-bold">Exclusive Membership Programs</span>
</li>
<li className="flex items-center space-x-4 border-b border-outline-variant/20 pb-4">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "\'FILL\' 1" }}>personal_video</span>
<span className="font-label uppercase text-xs tracking-widest font-bold">Immersive Digital Facades</span>
</li>
<li className="flex items-center space-x-4 border-b border-outline-variant/20 pb-4">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "\'FILL\' 1" }}>concierge</span>
<span className="font-label uppercase text-xs tracking-widest font-bold">VIP Concierge Services</span>
</li>
</ul>
<a className="inline-flex items-center space-x-4 group" href="#">
<span className="font-label uppercase text-xs tracking-widest font-bold border-b-2 border-primary pb-1">View Future Projects</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</section>
{/* Footer / Contact CTA */}
<footer className="bg-surface-container-lowest py-32 px-8 md:px-24 border-t border-outline-variant/10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16">
<div className="md:col-span-2">
<div className="text-2xl font-bold tracking-widest text-white uppercase font-headline mb-8">WEST EDMONTON MALL</div>
<p className="text-on-surface-variant max-w-sm mb-12 leading-relaxed">Join the world's most successful retailers in a destination that transcends traditional shopping. Your brand deserves the greatest show on earth.</p>
<div className="flex space-x-6">
<a className="w-12 h-12 bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined text-sm">public</span>
</a>
<a className="w-12 h-12 bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined text-sm">mail</span>
</a>
</div>
</div>
<div>
<h5 className="font-label uppercase text-xs tracking-widest font-bold text-primary mb-8">Navigation</h5>
<ul className="space-y-4 text-sm text-on-surface-variant">
<li><a className="hover:text-white transition-colors" href="#">The Vision</a></li>
<li><a className="hover:text-white transition-colors" href="#">Retail Districts</a></li>
<li><a className="hover:text-white transition-colors" href="#">Attractions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Demographics</a></li>
</ul>
</div>
<div>
<h5 className="font-label uppercase text-xs tracking-widest font-bold text-primary mb-8">Leasing Inquiry</h5>
<form className="space-y-6">
<input className="w-full bg-transparent border-b border-outline-variant/30 py-2 focus:border-primary outline-none text-sm transition-colors" placeholder="Email Address" type="email"/>
<button className="w-full luxury-gradient text-on-primary py-4 font-bold uppercase text-[10px] tracking-widest">Connect with our Team</button>
</form>
</div>
</div>
<div className="mt-32 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-on-surface-variant/50">
<p>© 2024 West Edmonton Mall Property Inc. All Rights Reserved.</p>
<div className="flex space-x-8 mt-4 md:mt-0">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>
{/* Floating UI Element */}
<div className="fixed bottom-12 right-12 z-50">
<button className="w-16 h-16 luxury-gradient shadow-2xl flex items-center justify-center text-on-primary group overflow-hidden relative">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chat_bubble</span>
</button>
</div>
    </>
  );
}
