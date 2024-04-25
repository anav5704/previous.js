import Image from "next/image"
import GitHub from "../../assets/github.svg"

export const GitHubStars = () => {
    return (
        <a
            target="_blank"
            href="https://github.com/anav5704/previous.js"
            className="font-GeistMono flex items-center gap-2 text-sm text-zinc-500 p-1 px-2 border border-zinc-800 logo"
        >
            <Image
                src={GitHub}
                alt="GitHub Logo"
                height={15}
                width={15}
            />
            23.7k
        </a>
    )
}
