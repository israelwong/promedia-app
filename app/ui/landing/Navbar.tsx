'use client';
// import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { useTheme } from 'next-themes';
import { ShoppingBag, Share2, CreditCard, Grid2X2 } from 'lucide-react';
// import { Moon, Sun } from 'lucide-react';
interface ParamsProps {
    params: {
        name: string;
        description: string;
        iconUrl: string;
    };
}

function Navbar({ params }: ParamsProps) {
    // const { theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => {
    //     setMounted(true);
    // }, []);
    // if (!mounted) return null;
    // const toggleTheme = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark');
    // };

    return (
        <>
            <nav className="flex items-center justify-between p-4 shadow-md z-50
            fixed top-0 left-0 right-0 w-full backdrop-blur-lg backdrop-filter bg-opacity-60
            ">

                {/* Logo */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <figure className="flex-shrink-0">
                        <Image
                            src={params.iconUrl}
                            alt={`${params.name} icon`}
                            width={30}
                            height={30}
                            className="rounded-full"
                        />
                    </figure>
                    <div>
                        <h1 className="text-2xl font-bold capitalize ">
                            {params.name}
                        </h1>
                    </div>

                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/catalogo" className="flex items-center space-x-2">
                        <Share2 size={20} />
                    </Link>
                    <Link href={`${params.name}/catalogo`} className="flex items-center space-x-2">
                        <Grid2X2 size={20} />
                    </Link>
                    <Link href="/pasarela" className="flex items-center space-x-2">
                        <ShoppingBag size={20} />
                    </Link>
                    <Link href="/catalogo" className="flex items-center space-x-2">
                        <CreditCard size={25} />
                    </Link>
                    {/* <Button onClick={toggleTheme}>
                        {theme === 'dark' ? <Moon /> : <Sun />}
                    </Button> */}
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden */}
            <div className="h-16"></div>
        </>
    );
}

export default Navbar;