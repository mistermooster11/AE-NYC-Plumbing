'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Diagnosed, Quoted, and Fixed — Every Time</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

              {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#50B6EA',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every call starts the same way: we arrive, assess the problem in front
                of you, explain exactly what needs to happen, and give you the price
                before any work begins. No mystery charges. No pressure to approve extras.
                Just a straight answer and a plan.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> Our licensed technician assesses the
                issue and identifies the right approach — whether it&apos;s a faucet repair,
                drain clearing, leak fix, or something more involved.
              </p>
              <p>
                <strong>Step 2: Free Quote.</strong> You get the price upfront. We
                don&apos;t start until you&apos;re ready. What we quote is what you pay.
              </p>
              <p>
                <strong>Step 3: Fix It &amp; Clean Up.</strong> We complete the job with
                quality materials, test the result in front of you, and leave the work
                area clean before we leave.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="tel:6463927164"
                label="Call for a Free Quote"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
