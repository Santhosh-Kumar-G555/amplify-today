// components/sections/ConnectionSection.tsx
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill } from '../ui/StatPill'

export function ConnectionSection() {
  const tags = ["SEO Strategy", "Keyword Research", "Content Writing", "Meta Optimisation", "Google Business"]
  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <ChapterLabel text="03 / THE CONNECTION" colorClass="text-[#00FF88]" />
        <StatPill className="hidden md:inline-flex" text="68% of all online experiences begin with a search" color="cyan" />
      </div>
      <div className="max-w-4xl">
        <h2 className="scene-headline font-bebas text-[clamp(4rem,10vw,10rem)] leading-[0.85] text-white tracking-widest mb-6">
          GET FOUND.<br />GET CLICKED.<br />GET PAID.
        </h2>
        <p className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8">
          We craft SEO-optimised content that speaks Google's language. From keyword strategy to on-page structure, we make sure your business appears when your customers are searching.
        </p>
        <div className="service-tag-group flex flex-wrap gap-3 mb-8">
          {tags.map(tag => (
            <span key={tag} className="tag px-4 py-2 bg-ash border border-[#00FF88] text-[#00FF88] font-mono text-xs uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <div className="font-mono text-sm text-cyan flex flex-col gap-1">
          <span>&gt; INDEXING amplifytoday.in... DONE</span>
          <span>&gt; RANK POSITION: CLIMBING...</span>
        </div>
      </div>
    </div>
  )
}
