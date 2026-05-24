"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], { opacity: 0 });
      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, clearProps: "all" })
        .fromTo(dividerRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" }, "-=0.4")
        .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, clearProps: "all" }, "-=0.3")
        .fromTo(buttonsRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, clearProps: "all" }, "-=0.4");
    })();
    return () => { cancelled = true; tl?.kill(); };
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/hero-bg-plumbing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Manhattan&apos;s Licensed<br />
          Plumbing Specialists
        </h1>
        <hr className="hero__divider" ref={dividerRef} />
        <p className="hero__description" ref={descRef}>
          Available 7 days a week, 9am–9pm. Fast response, upfront pricing.<br />
          Serving all NYC boroughs.
        </p>
        <div className="hero__buttons" ref={buttonsRef}>
          <a href="tel:+16463927164" className="hero__btn-primary">
            Call Now
          </a>
          <Link href="/services-page" className="hero__btn-secondary">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
