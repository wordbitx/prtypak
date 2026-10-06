"use client";
import Link from "next/link";
import { IconArrowRight, IconCheck, IconCompass, IconHeart, IconPhone, IconSearch, IconShield, IconSpark, IconStar, IconUpload, IconUser, IconBuilding } from "@/components/icons";
import { ResilientImage } from "@/components/resilient-image";
import { BlueTick } from "@/components/verified-badge";
import { Reveal } from "@/components/reveal";
import { PropertyCard } from "@/components/property-card";
import type { DealerProfile, PropertyWithDealer } from "@/lib/queries";
import { photo, photos } from "@/lib/images";
import { siteImages } from "@/lib/site-images";
const GREEN = "#1CA831";
const GREEN = "#1CA831";

const TYPES = [
  { title: "Houses", label: "Residential homes", image: photos.villas[0], href: "/properties?category=house", icon: IconBuilding },
  { title: "Apartments", label: "City living", image: photos.interiors[0], href: "/properties?category=apartment", icon: IconBuilding },
  { title: "Plots", label: "Residential & development plots", image: photos.dev[2], href: "/properties?category=plot", icon: IconMap },
  { title: "Commercial", label: "Offices, shops & more", image: photos.commercial[0], href: "/properties/commercial", icon: IconBuilding },
  { title: "Land", label: "Open land & farms", image: photos.dev[4], href: "/properties?category=plot", icon: IconCompass },
];


export function HomepageGrowthSections({ recentProperties, dealers }: { recentProperties: PropertyWithDealer[]; dealers: DealerProfile[] }) {
  const benefits = [
    [IconSearch, "Find Properties", "Search by city, type, price and more.", "/properties"],
    [IconBuilding, "Browse by Type", "Explore the property category you need.", "/properties"],
    [IconShield, "Verified Dealer", "See dealer profiles before you deal.", "/dealers"],
    [IconPhone, "Direct Contact", "Connect by phone or WhatsApp.", "/dealers"],
  ] as const;
  return <>
    <section className="bg-white py-7 sm:py-9" aria-label="PropertiesPak features">
      <div className="ui-container grid gap-0 overflow-hidden rounded-2xl border border-[#DCEFE1] bg-[#F7FCF8] sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([I,t,x,href],i)=>{const Icon=I;return <Link key={t} href={href} className="group flex gap-4 border-b border-[#DCEFE1] px-5 py-5 last:border-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-0"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-sm" style={{color:GREEN}}><Icon className="h-5 w-5"/></span><span><span className="flex items-center gap-2 font-sans text-sm font-bold text-navy-900">{t}<IconArrowRight className="h-3.5 w-3.5 text-slate-300 transition group-hover:translate-x-1"/></span><span className="mt-1 block text-xs leading-5 text-ink-muted">{x}</span></span></Link>})}
      </div>
    </section>

    <section className="bg-white pb-14 pt-5 sm:pb-16" aria-labelledby="types-heading">
      <div className="ui-container">
        <div className="mb-7 flex items-end justify-between gap-4"><div><p className="eyebrow" style={{color:GREEN}}>Explore categories</p><h2 id="types-heading" className="mt-2 display-2">Find Properties by Type</h2></div><Link href="/properties" className="hidden items-center gap-2 text-sm font-semibold text-navy-800 sm:inline-flex">View All Properties <IconArrowRight className="h-4 w-4"/></Link></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{TYPES.map((type,i)=>{const Icon=type.icon;return <Reveal key={type.title} delay={i*45}><Link href={type.href} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_32px_-24px_rgba(6,28,51,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_-24px_rgba(6,28,51,.38)]"><div className="relative h-40 overflow-hidden"><ResilientImage src={photo(type.image,800,540)} alt={type.title} width={800} height={540} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"/><div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent"/><span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-lg bg-white/90" style={{color:GREEN}}><Icon className="h-4 w-4"/></span></div><div className="p-4"><div className="flex items-center justify-between"><span className="font-sans text-[.95rem] font-bold text-navy-900">{type.title}</span><IconArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1"/></div><p className="mt-1 text-xs text-ink-muted">{type.label}</p></div></Link></Reveal>})}</div>
      </div>
    </section>

    <section className="bg-[#F7FAF8] py-14 sm:py-16" aria-labelledby="new-listings-heading">
      <div className="ui-container">
        <div className="flex items-end justify-between gap-4"><div><p className="eyebrow" style={{color:GREEN}}>Just listed</p><h2 id="new-listings-heading" className="mt-2 display-2">Recently Added Properties</h2><p className="mt-2 text-sm text-ink-muted">Fresh listings from property owners and dealers.</p></div><Link href="/properties?sort=newest" className="hidden items-center gap-2 text-sm font-semibold text-navy-800 sm:inline-flex">View All <IconArrowRight className="h-4 w-4"/></Link></div>
        {recentProperties.length ? <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{recentProperties.slice(0,4).map((p,i)=><Reveal key={p.id} delay={i*50}><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_38px_-28px_rgba(6,28,51,.45)]"><PropertyCard property={p} priority={i===0} propertyTypeBelowPrice/></div></Reveal>})}</div> : <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-sans font-semibold text-navy-900">Be the first to list a property.</p><Link href="/list-property" className="btn btn-green mt-5"><IconUpload className="h-4 w-4"/> List Your Property</Link></div>}
      </div>
    </section>

    <section className="bg-[#F4FBF6] py-14 sm:py-16" aria-labelledby="network-heading">
      <div className="ui-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow" style={{color:GREEN}}>Trusted network</p><h2 id="network-heading" className="mt-2 display-2">Verified Dealer Network</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted">Work with verified and professional real estate dealers across Pakistan. View profiles, locations and listings before you deal.</p></div><Link href="/dealers" className="btn btn-green">View All Dealers <IconArrowRight className="h-4 w-4"/></Link></div>
        {dealers.length ? <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{dealers.slice(0,4).map((d,i)=><Reveal key={d.id} delay={i*50}><Link href={d.slug?"/dealers/"+d.slug:"/dealers"} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_34px_-26px_rgba(6,28,51,.4)] transition hover:-translate-y-1"><div className="flex items-center gap-3"><span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#EFF8F0]">{d.companyLogo||d.avatarUrl?<ResilientImage src={d.companyLogo||d.avatarUrl||""} alt="" width={96} height={96} className="h-full w-full object-cover"/>:<IconUser className="h-5 w-5" style={{color:GREEN}}/>}</span><span className="min-w-0"><span className="flex items-center gap-1 truncate font-sans text-sm font-bold text-navy-900">{d.agency||d.name}{d.isVerified?<BlueTick className="h-4 w-4"/>:null}</span><span className="mt-1 block text-xs text-ink-muted">{d.cityName||"Pakistan"}</span></span></div><div className="mt-4 flex items-center justify-between text-xs text-ink-muted"><span>{d.listings?String(d.listings)+" listings":"View profile"}</span><span className="font-semibold" style={{color:GREEN}}>View Profile →</span></div></Link></Reveal>})}</div> : <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 text-center"><p className="font-sans font-semibold text-navy-900">Be among the first dealers on PropertiesPak.</p><Link href="/login?mode=register" className="btn btn-green mt-5">Create Dealer Account</Link></div>}
      </div>
    </section>

    <section className="relative overflow-hidden bg-navy-950 py-14 sm:py-16" aria-labelledby="grow-heading">
      <div className="ui-container relative"><div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow text-white/70"><IconSpark className="h-4 w-4" style={{color:GREEN}}/> Why list on PropertiesPak?</p><h2 id="grow-heading" className="mt-3 max-w-3xl font-sans text-[2rem] font-bold leading-tight text-white sm:text-[2.7rem]">Get More Visibility, More Inquiries and Grow Your Real Estate Business</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">Showcase your listings professionally and make it easier for buyers and tenants to discover your inventory.</p><div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Reach More Buyers","Show your properties to people actively searching."],["Build Your Profile","Create a professional presence for your listings."],["Get Direct Inquiries","Let interested people reach you directly."],["Verified Presence","Build trust with a strong dealer profile."]].map(([t,x])=><div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#1CA83122]" style={{color:GREEN}}><IconCheck className="h-4 w-4"/></span><p className="mt-3 font-sans text-sm font-bold text-white">{t}</p><p className="mt-1 text-xs leading-5 text-white/50">{x}</p></div>)}</div></div><Link href="/list-property" className="btn btn-green">List Your Property <IconArrowRight className="h-4 w-4"/></Link></div></div>
    </section>

    <section className="bg-[#F7FBF8] py-14 sm:py-16" aria-labelledby="app-heading">
      <div className="ui-container grid items-center gap-10 lg:grid-cols-[1fr_380px]"><div><p className="eyebrow" style={{color:GREEN}}>On the go</p><h2 id="app-heading" className="mt-2 display-2">Download PropertiesPak App</h2><p className="mt-3 max-w-xl text-sm leading-7 text-ink-muted">Search, save and get instant updates on the go. A faster way to keep your property search close.</p><div className="mt-7 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">{[["Faster Search","Find what fits quickly.",IconSearch],["Saved Favourites","Keep your shortlist close.",IconHeart],["Instant Updates","Stay close to new listings.",IconSpark]].map(([t,x,I])=>{const Icon=I as typeof IconSearch;return <div key={String(t)} className="rounded-xl border border-slate-200 bg-white p-4"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#EFF8F0]" style={{color:GREEN}}><Icon className="h-4 w-4"/></span><p className="mt-3 font-sans text-sm font-bold text-navy-900">{String(t)}</p><p className="mt-1 text-xs text-ink-muted">{String(x)}</p></div>})}</div><span className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-ink-muted">Android app coming soon</span></div>
        <div className="relative mx-auto w-full max-w-[310px]"><div className="absolute -inset-10 rounded-full bg-[#1CA83118] blur-3xl"/><div className="relative rounded-[36px] border-[8px] border-navy-950 bg-navy-950 p-2 shadow-[0_30px_65px_-30px_rgba(6,28,51,.55)]"><div className="overflow-hidden rounded-[26px] bg-white"><div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"><div className="h-7 w-7 rounded-lg bg-[#EFF8F0]"/><span className="font-sans text-xs font-bold text-navy-900">Properties<span style={{color:GREEN}}>Pak</span></span></div><div className="bg-[#F5F8F6] p-3"><div className="rounded-xl bg-white p-2 shadow-sm"><div className="h-28 overflow-hidden rounded-lg"><ResilientImage src={photo(photos.villas[1],600,400)} alt="" width={600} height={400} className="h-full w-full object-cover"/></div><div className="px-1 pb-1 pt-2"><p className="font-sans text-xs font-bold text-navy-900">Luxury Home · Lahore</p><p className="mt-1 text-[10px] text-ink-muted">Explore property details</p></div></div><div className="mt-2 grid grid-cols-2 gap-2"><div className="h-20 overflow-hidden rounded-lg"><ResilientImage src={photo(photos.interiors[1],300,200)} alt="" width={300} height={200} className="h-full w-full object-cover"/></div><div className="h-20 overflow-hidden rounded-lg"><ResilientImage src={photo(photos.commercial[1],300,200)} alt="" width={300} height={200} className="h-full w-full object-cover"/></div></div></div></div></div></div>
      </div></div>
    </section>

    <section className="relative overflow-hidden py-16 sm:py-20"><ResilientImage src={photo(photos.cities.lahoreAlt,1800,900)} alt="" width={1800} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,28,.9),rgba(4,16,28,.58)_65%,rgba(4,16,28,.35))]"/><div className="ui-container relative"><p className="eyebrow text-white/70"><IconCompass className="h-4 w-4" style={{color:GREEN}}/> Start your search</p><h2 className="mt-3 max-w-2xl font-sans text-[2rem] font-bold leading-tight text-white sm:text-[3rem]">Your Next Property is Just a Click Away</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">Buy, rent or list your property on Pakistan's growing real estate marketplace.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/properties" className="btn btn-green">Explore Properties <IconArrowRight className="h-4 w-4"/></Link><Link href="/list-property" className="btn btn-ghost-light">List Your Property <IconUpload className="h-4 w-4"/></Link></div></div></section>
  </>;
}