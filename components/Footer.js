'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white bg-[#193366]">
            <div className="h-[1px] max-w-md bg-[#20293c] mx-auto" />
            <p className="text-sm text-center py-3">
                Copyright © {currentYear} Parpy Facade Solutions. All rights reserved.
            </p>
        </footer>
    );
}
