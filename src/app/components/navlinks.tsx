'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ link }: { link: { url: string; title: string } }) => {
    const pathName = usePathname();

    return (
        <Link
            className={`rounded-lg p-2 text-center ${
                pathName === link.url ? 'bg-[#387478] text-white' : ''
            }`}
            href={link.url}
        >
            {link.title}
        </Link>
    );
};

export default NavLinks;
