import Image from "next/image"
import AlienWare from "../../assets/alienware.svg"
import Astro from "../../assets/astro.svg"
import Clerk from "../../assets/clerk.svg"
import Epic from "../../assets/epic.svg"
import Firefox from "../../assets/firefox.svg"
import Next from "../../assets/next.svg"
import Prisma from "../../assets/prisma.svg"
import Spotify from "../../assets/spotify.svg"
import Supabase from "../../assets/supabase.svg"
import Svelte from "../../assets/svelte.svg"
import Upstash from "../../assets/upstash.svg"
import Xbox from "../../assets/xbox.svg"

const logos = [Astro, Next, Clerk, Epic, Svelte, Firefox, AlienWare, Supabase, Spotify, Upstash, Xbox, Prisma]

export const Clients = () => {
    return (
        <div className="relative fade w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll-left">
                {logos.map((logo, index) => (
                    <li key={`first-logo-${index}`} className="col-span-1">
                        <Image
                            src={logo}
                            alt="Logo"
                            height={50}
                            width={50}
                            quality={100}
                        />
                    </li>
                ))}
            </ul >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll-left">
                {logos.map((logo, index) => (
                    <li key={`second-logo-${index}`} className="col-span-1">
                        <Image
                            src={logo}
                            alt="Logo"
                            height={50}
                            width={50}
                            quality={100}
                        />
                    </li>
                ))}
            </ul >
        </div >
    )
}
