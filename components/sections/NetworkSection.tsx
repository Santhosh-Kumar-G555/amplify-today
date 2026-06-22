// components/sections/NetworkSection.tsx
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill } from '../ui/StatPill'

export function NetworkSection() {
  const tags = ["Instagram Management", "Facebook Pages", "Content Calendar", "Reels Production", "Community Replies"]
  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <ChapterLabel text="04 / THE NETWORK" colorClass="text-orange" />
        <StatPill className="hidden md:inline-flex" text="India has 600M+ social users. Your competitors are there." color="orange" />
      </div>
      <div className="max-w-4xl">
        <h2 className="scene-headline font-bebas text-[clamp(4rem,10vw,10rem)] leading-[0.85] text-white tracking-widest mb-6">
          YOUR BRAND,<br />EVERYWHERE<br />AT ONCE.
        </h2>
        <p className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8">
          Consistent, scheduled content across Instagram, Facebook, and beyond. We manage your social presence so you can manage your business. Stories. Reels. Posts. Every week. On autopilot.
        </p>
        <div className="service-tag-group flex flex-wrap gap-3 mb-8">
          {tags.map(tag => (
            <span key={tag} className="tag px-4 py-2 bg-ash border border-orange text-orange font-mono text-xs uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <div className="font-bebas text-3xl md:text-5xl text-orange mt-4">
          12 POSTS PUBLISHED THIS WEEK FOR OUR CLIENTS
        </div>
      </div>
    </div>
  )
}
