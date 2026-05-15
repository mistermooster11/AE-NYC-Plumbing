'use client';
import { Menu, Phone, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#50B6EA] border-b border-[rgba(2,73,121,.2)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Mobile logo */}
                <Link href="/" className="block lg:hidden float-left" aria-label="A&E NYC Plumbing">
                    <img src="/logos/logo-94.svg" alt="A&E NYC Plumbing" className="block h-[3.6rem]" />
                </Link>

                {/* Desktop: info text left, buttons right */}
                <div className="hidden lg:flex flex-1 items-center justify-between">
                    {/* Left: phone + tagline */}
                    <a
                        href="tel:9179798704"
                        className="flex items-center gap-2 text-[#252525] text-[1.4rem] font-light tracking-[.05rem] py-[2rem] no-underline transition-colors duration-[350ms] hover:text-[#024979]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(917) 979-8704 — Same Day Scheduling Available</span>
                    </a>

                    {/* Right: action buttons */}
                    <div className="flex items-center gap-[1rem]">
                        <Link
                            href="/contact-us"
                            className="flex items-center gap-[0.6rem] text-[1.3rem] font-semibold text-[#024979] bg-white border border-[#024979] px-[1.6rem] py-[0.7rem] no-underline transition-colors duration-[350ms] hover:bg-[#024979] hover:text-white"
                        >
                            <CalendarCheck size={14} strokeWidth={2} />
                            Schedule Service
                        </Link>
                        <a
                            href="tel:9179798704"
                            className="flex items-center gap-[0.6rem] text-[1.3rem] font-semibold text-white bg-[#024979] border border-[#024979] px-[1.6rem] py-[0.7rem] no-underline transition-colors duration-[350ms] hover:bg-[#013560] hover:border-[#013560]"
                        >
                            <Phone size={14} strokeWidth={2} />
                            Call Us
                        </a>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={onMobileMenuClick}
                    className="lg:hidden flex items-center justify-center ml-[1.3rem] bg-transparent border-0 cursor-pointer text-[#252525] p-[0.4rem]"
                    aria-label="Menu"
                >
                    <Menu size={30} strokeWidth={2.5} />
                    <em className="sr-only not-italic">Menu icon</em>
                </button>

            </div>
        </div>
    );
}

export default Topnav;
