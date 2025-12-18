'use client';

import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const themeOptions = [
        { value: 'light', label: 'Light', icon: <img src="/assets/light-icon.svg" alt="light-icon" className='w-[19px] h-[19px]' /> },
        { value: 'dark', label: 'Dark', icon: <img src="/assets/dark-icon.svg" alt="dark-icon" className='w-[19px] h-[19px]' /> },
        { value: 'system', label: 'System', icon: <img src="/assets/dark-icon.svg" alt="dark-icon" className='w-[19px] h-[19px]' /> },
    ];

    const currentTheme = themeOptions.find(opt => opt.value === theme);

    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0" ref={dropdownRef}>
            <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-[#20293c] bg-[#060b13] shadow-sm hover:bg-[#1b3132] hover:text-[#e4e5e7] h-9 w-9"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle theme"
            >
                <span>{currentTheme?.icon}</span>
            </button>

            {isOpen && (
                <div className="absolute top-[calc(100%+-0.5rem)] right-0 bg-[#060b13] border border-[#20293c] rounded-lg shadow-lg p-1 min-w-[128px] overflow-hidden animate-[slideDown_0.2s_ease]">
                    {themeOptions.map((option) => (
                        <button
                            key={option.value}
                            className="rounded-sm px-2 py-1.5 text-start text-sm w-full cursor-pointer transition-colors bg-transparent hover:bg-[#1b3132] text-[#e4e5e7]"
                            onClick={() => {
                                setTheme(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <span className="flex-1 text-left font-medium">{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
