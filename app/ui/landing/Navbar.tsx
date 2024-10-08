'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Share2, CreditCard, Grid2X2 } from 'lucide-react';

interface ParamsProps {
    params: {
        name: string;
        description: string;
        iconUrl: string;
    }
}


function Navbar({ params }: ParamsProps) {

    return (
        <>


            <div className="
            fixed top-0 w-full 
            bg-white 
            shadow-lg 
            z-50">
                <div className="max-w-screen-sm mx-auto p-4 flex items-center justify-between">
                    {/* Title */}
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
                            <h1 className="text-2xl font-bold capitalize text-gray-600">{params.name}</h1>
                        </div>
                    </div>
                    {/* Button Options */}
                    <div className="flex items-center space-x-3">
                        <Link href="/catalogo" className="flex items-center space-x-2">
                            <Share2 size={20} color="black" />
                        </Link>
                        <Link href={`${params.name}/catalogo`} className="flex items-center space-x-2">
                            <Grid2X2 size={20} color="black" />
                        </Link>
                        <Link href="/pasarela" className="flex items-center space-x-2">
                            <ShoppingBag size={20} color="black" />
                        </Link>
                        <Link href="/catalogo" className="flex items-center space-x-2">
                            <CreditCard size={25} color="black" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Spacer to prevent content from being hidden */}
            <div className="h-16"></div>
        </>
    );
}

export default Navbar;