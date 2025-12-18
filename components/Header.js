'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Project Management', href: '#project-management' },
        { label: 'Experts', href: '#experts' },
        { label: 'Tools', href: '#tools' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#193366] fixed w-full border-b-white shadow-md z-10">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            // Close Icon
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                        {/* Logo */}
                        <Link href="/" className='flex flex-shrink-0 items-center gap-2'>
                            <div className='aspect-square bg-white rounded-md'>
                                <img src="/assets/business-logo.webp" alt="logo" loading='lazy' className='h-10 w-10' />
                            </div>

                            <h1 className="font-extrabold text-white text-xl ml-1">PFS</h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:ml-6 lg:block">
                            <div className='flex space-x-4'>
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden space-y-1 px-2 pb-3 pt-2 bg-[#193366] animate-[slideDown_0.2s_ease]">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
