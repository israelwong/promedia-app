'use client'

import React from 'react'
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function Hero() {
    return (
        <div className='my-28 grid grid-cols-2'>

            <main className="space-y-5">
                <Fade cascade>

                    <Image
                        className="dark:invert"
                        src="https://nextjs.org/icons/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />

                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        Get started by editing{" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                            app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
                </Fade>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="https://nextjs.org/icons/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read our docs
                    </a>
                </div>
            </main>

            <video 
              src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/reel2024_1min_SD.webm?t=2024-09-25T23%3A58%3A46.751Z" 
              controls={true} 
              autoPlay={true}
              loop = {true} 
              muted={true} 
              preload="auto" 
              className="w-full h-auto"
            >
              Tu navegador no soporta el elemento <code>video</code>.
            </video>

        </div>
    )
}

export default Hero