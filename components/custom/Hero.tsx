'use client';
import { useEffect, useState } from 'react';
import PrimaryButton from './buttons/PrimaryButton';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scroll-width', sw + 'px');
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-12 md:pt-24 bg-brand-navy mb-16 relative overflow-x-clip">

      <div className="inner overflow-visible relative">
        <div className="max-w-8xl max-[767px]:pl-10">

         <div className='relative z-20'>
          <h1
            className={[
              'text-white font-medium leading-tight mb-16',
              'text-6xl font-extrabold! md:text-7xl lg:text-8xl max-w-7xl',
              'overflow-hidden transition-[opacity,transform] duration-800',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full',
            ].join(' ')}
          >
            Manhattan&apos;s Licensed Plumbers — Trusted Across All NYC Boroughs
          </h1>

          <div className="flex justify-start pb-20 max-[767px]:block max-[767px]:pb-8">

            <div
              className={[
                'text-white mr-20',
                'max-w-6xl',
                'transition-[opacity,transform] duration-800 delay-100',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              ].join(' ')}
            >
              <p className="text-[1.9rem] leading-[1.6]">
                From faucet repairs and drain clearing to gas lines and full repiping —
                A&amp;E NYC Plumbing delivers licensed, insured service with upfront pricing.
                Available Mon–Sun, 9am–9pm.
              </p>
            </div>

            <PrimaryButton
              label="Call (646) 392-7164"
              href="tel:6463927164"
              dark
              wow
              visible={visible}
            />
          </div>
         </div>

          <div
            className={[
              'relative',
              'w-[calc((100vw-var(--scroll-width)-930px)/2+930px)]',
              'max-[990px]:w-[calc(100%+3rem)]',
              'max-[767px]:w-[106%]',
            ].join(' ')}
          >
            <div
              className={[
                'w-84.75 h-84.75 absolute right-0 bottom-full z-5 pointer-events-none',
                'max-[767px]:w-36.75 max-[767px]:h-36.75',
              ].join(' ')}
            >
              <span
                className="block w-full h-full overflow-hidden"
                style={{
                  transformOrigin: 'left bottom',
                  transform: visible ? 'rotate(0deg)' : 'rotate(90deg)',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.8s 0.8s, transform 0.8s 0.8s',
                }}
              >
                <span
                  className="block"
                  style={{
                    width: '200%',
                    height: '200%',
                    border: '1px dashed rgba(80,182,234,.2)',
                    borderRadius: '50%',
                  }}
                />
              </span>
              <span
                className="absolute bottom-0 right-0 w-2.5 bg-brand-orange max-[767px]:w-1 h-full"
                style={{
                  transformOrigin: 'right bottom',
                  transform: visible ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.8s ease 0.5s',
                }}
              />
            </div>

            <div className="w-full relative overflow-hidden pb-[38%] max-[767px]:pb-[50%] z-10">
              <div
                className={[
                  'absolute bottom-0 left-0 right-0',
                  'transition-[height,transform] duration-1000 delay-300',
                  visible ? 'h-full scale-100' : 'h-0 scale-[1.2]',
                ].join(' ')}
              >
                {/* Video hero — Cloudflare Stream, autoplay loop muted */}
                <iframe
                  src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/137608cb5915472dc5909730ca1d7987/iframe?autoplay=true&loop=true&muted=true&controls=false&preload=auto"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute border-0 pointer-events-none"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: '177.8vh',   /* 16/9 * 100vh — đảm bảo luôn rộng hơn container */
                    minWidth: '100%',
                    height: '56.25vw', /* 9/16 * 100vw */
                    minHeight: '100%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[105vw] h-1/2 bg-white z-3 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
