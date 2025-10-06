'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
  return (
    <section aria-label="Hero" className="relative">
      <div className="container pt-8 sm:pt-12">
        {/* Reserve space for the figure that overflows below */}
        <div className="relative pb-20 sm:pb-32 lg:pb-44">{/* <-- EDIT padding if needed */}
          {/* CARD: rounded, clips only the background */}
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-bg-deep
                          h-[220px] sm:h-[520px] lg:h-[340px]">{/* <-- EDIT heights */}
            {/* Background image */}
            <Image
              src="/hero-bg.webp"
              alt="High-tech automation background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%] opacity-95" /* <-- EDIT position */
            />

            {/* Gradient overlay for headline legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/10" />

            {/* Headline — left/centered with left padding margin */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="pl-6 sm:pl-10 lg:pl-14 pr-6">
                <h1 className="max-w-[20ch] text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Automation that scales your operations.
                </h1>
              </div>
            </div>


            {/* Curved wave bottom INSIDE the card */}
            <div className="absolute inset-x-0 bottom-0">
              <svg
                viewBox="0 0 1440 120"
                className="h-[70px] w-full" /* <-- EDIT wave height if needed */
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0,64 C260,120 420,120 720,70 C1020,20 1180,20 1440,64 L1440,120 L0,120 Z"
                  fill="#FF4D4F"
                />
              </svg>
            </div>
          </div>

          {/* ROBOT PNG: hard-anchored to top-right */}
          <div
            className="
              pointer-events-none
              absolute
              right-0 sm:right-4 lg:right-14     /* tweak right spacing */
              top-0 sm:top-0 lg:top-0            /* hard anchor to top */
              hidden sm:block
              z-20
            "
            aria-hidden="true"
          >
            <div
              className="relative w-[260px] sm:w-[340px] lg:w-[460px] aspect-[2/3]"
              style={{
                // remove ANY previous translateY you had
                transform: 'none',
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 78%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'linear-gradient(to bottom, black 78%, rgba(0,0,0,0) 100%)',
                filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
              }}
            >
              <Image
                src="/robot-arm.png"
                alt=""
                fill
                sizes="(min-width:1280px) 460px, (min-width:640px) 340px, 260px"
                className="object-contain object-top select-none"  /* object-top = align image to its top */
                draggable={false}
              />
            </div>
          </div>


          {/* --- BELOW-HERO SUMMARY (left side) --- */}
          <div className="relative mt-2 sm:mt-3">
            {/* Reserve right side where the robot sits:
              - robot widths in your hero are ~ sm:340px, lg:460px
              - add a little extra for breathing room */}
            <div className="max-w-6xl pr-0 sm:pr-[360px] lg:pr-[500px]">
              <h2 className="sr-only">What we do</h2>

              <p className="text-base sm:text-lg text-text-muted">
                We deliver end-to-end automation, supporting your custom solution from concept to completion. Our expertise covers custom hardware, IoT dashboards, and specialized software development. We focus on proven reliability, measurable ROI, and fast delivery.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/en/contact#contact-form"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primaryDark focus-visible:outline-none"
                >
                  Contact Now
                </Link>
                <Link
                  href="/en/services"
                  className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-bg-base px-6 py-3 text-sm font-medium text-text-muted hover:text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
