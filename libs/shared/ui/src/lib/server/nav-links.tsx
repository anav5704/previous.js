import Link from "next/link"

export const NavLinks = () => {
    const links = [
        {
            label: "Clients",
            href: "#clients"
        },
        {
            label: "Features",
            href: "#features"
        },
        {
            label: "Templates",
            href: "#templates"
        },
    ]

    return (
        <>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </>
    )
}
