// components/ui/DividerLine.tsx
export function DividerLine() {
  return (
    <div className="w-full relative z-20 pointer-events-none mix-blend-screen h-2" aria-hidden="true">
      <svg viewBox="0 0 1440 8" preserveAspectRatio="none" className="w-full h-full">
        <path 
          d="M0,4 L360,2 L720,6 L1080,2 L1440,4" 
          stroke="#FF6B00" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.6"
        />
        <path 
          d="M0,4 L1440,4" 
          stroke="#FFFFFF" 
          strokeWidth="0.5" 
          fill="none" 
          opacity="0.2"
        />
      </svg>
    </div>
  )
}
