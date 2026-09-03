"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !waveRef.current ||
      !spinnerRef.current ||
      !textRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {

      //
      // Spinner actually spins
      //
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "none",
      });

      //
      // Text entrance
      //
      gsap.from(textRef.current!.children, {
        opacity: 0,
        y: 10,
        duration: 0.7,
        stagger: 0.3,
        delay: 0.4,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 text-zinc-100"
    >
      {/* Wave + spinner */}
      <div className="relative w-full max-w-4xl">
        <svg
          viewBox="0 0 1200 300"
          className="w-full overflow-visible"
          aria-hidden="true"
        >
          <path
            ref={waveRef}
            d="
              M 0 150
              C 100 50, 200 50, 300 150
              C 400 250, 500 250, 600 150
              C 700 50, 800 50, 900 150
              C 1000 250, 1100 250, 1200 150
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-black/0"
          />
        </svg>

        {/*
          Position doesn't matter initially.
          MotionPathPlugin moves it onto the SVG path.
        */}
        <div
          ref={spinnerRef}
          className="absolute left-0 top-0 flex size-8 items-center justify-center"
        >
          <div className="h-5 w-5 border-2 border-zinc-100">
            {/* asymmetry makes rotation even easier to see */}
            <div className="h-1/2 w-1/2 bg-zinc-100" />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div
        ref={textRef}
        className="-mt-8 text-center text-sm tracking-wide text-zinc-500"
      >
        <p>this isn&apos;t necessary.</p>
        <p className="mt-1">i just wanted to do it.</p>
      </div>
    </div>
  );
}