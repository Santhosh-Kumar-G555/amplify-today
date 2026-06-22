// components/sections/FoundationSection.tsx
import { ChapterLabel } from '../ui/ChapterLabel'

export function FoundationSection() {
  const tags = ["Domain Registration", "Fast Hosting", "SSL Certificate", "Mobile-First Design", "CMS Setup"]
  return (
    <div className="scene-overlay">
      <div className="mb-auto mt-24">
        <ChapterLabel text="02 / THE FOUNDATION" colorClass="text-cyan" />
      </div>
      <div className="max-w-4xl">
        <h2 className="scene-headline font-bebas text-[clamp(3rem,8vw,9rem)] leading-[0.85] text-white tracking-widest mb-4">
          WE LAY THE<br />FOUNDATION.
        </h2>
        <h3 className="font-syne font-bold text-xl md:text-2xl text-cyan mb-6">
          Domain. Hosting. Design. Security. Speed.
        </h3>
        <p className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8">
          Every great online presence starts with a solid base. We register your domain, set up blazing-fast hosting, design your brand identity, and secure your site with SSL — everything locked in and live within days.
        </p>
        <div className="service-tag-group flex flex-wrap gap-3">
          {tags.map(tag => (
            <span key={tag} className="tag px-4 py-2 bg-ash border border-cyan text-cyan font-mono text-xs uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
