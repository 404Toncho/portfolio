import React from 'react';
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
];

export default function NavBar() {
    return <nav className="fixed top-0 left-0 w-full h-12 px-12 py-4 backdrop-blur bg-transparent z-50">
        <ul className='flex items-center justify-end gap-8 text-lg list-none'>
            {/* {navItems.map((item) => (
                <li key={item.href} >
                    <a href={item.href} className='text-text-dark'>
                        {item.label}
                    </a>
                </li>
            ))} */}
        </ul>
    </nav>
}