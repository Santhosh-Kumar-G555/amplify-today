// lib/gsapAnimations.ts
'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins — called explicitly by consuming components, not at module scope
// (Module-scope registerPlugin causes "Invalid scope" errors in Next.js SSR)
export function registerGSAPPlugins() {
  gsap.registerPlugin(ScrollTrigger);
}

// SCENE-SPECIFIC TEXT REVEAL TRIGGERS
export function initTextReveals() {
  registerGSAPPlugins();

  // 1. Scene Headlines: Clip-path reveal sliding up
  const headlines = gsap.utils.toArray('.scene-headline') as HTMLElement[];
  headlines.forEach((el) => {
    gsap.fromTo(el,
      { clipPath: 'inset(100% 0 0 0)', y: 40, opacity: 0 },
      {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 2. Stat Pills: Fly in from the right
  const statPills = gsap.utils.toArray('.stat-pill') as HTMLElement[];
  statPills.forEach((el) => {
    gsap.fromTo(el,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 3. Service Tag Groups: Stagger in children
  const tagGroups = gsap.utils.toArray('.service-tag-group') as HTMLElement[];
  tagGroups.forEach((group) => {
    const tags = group.querySelectorAll('.tag');
    if (tags.length > 0) {
      gsap.fromTo(tags,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });
}

// MARQUEE STRIP — permanent ambient scroll
export function initMarquee(selector: string) {
  const items = gsap.utils.toArray(selector) as HTMLElement[];
  items.forEach((item) => {
    gsap.to(item, {
      xPercent: -100,
      repeat: -1,
      duration: 25,
      ease: 'none',
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    });
  });
}
