export const FooterLinks = () => {
    const links = [
        {
            title: "Resources",
            subLinks: [
                {
                    label: "Community",
                    href: "/"
                },
                {
                    label: "Contact",
                    href: "/"
                },
                {
                    label: "Privacy Policy",
                    href: "/"
                },
                {
                    label: "Terms of service",
                    href: "/"
                },
            ]
        },
        {
            title: "Developers",
            subLinks: [
                {
                    label: "API",
                    href: "/"
                },
                {
                    label: "Status",
                    href: "/"
                },
                {
                    label: "GitHub",
                    href: "/"
                },
                {
                    label: "README",
                    href: "/"
                },
            ]
        },
        {
            title: "Company",
            subLinks: [
                {
                    label: "About us",
                    href: "/"
                },
                {
                    label: "Blog",
                    href: "/"
                },
                {
                    label: "Careers",
                    href: "/"
                },
                {
                    label: "Brand",
                    href: "/"
                },
            ]
        },
    ]

    return (
        <>
            {links.map((link, index) => (
                <div
                    key={"link-" + index}
                    className="ml-28"
                >
                    <h4 className="mb-4">
                        {link.title}
                    </h4>
                    <ul>
                        {link.subLinks.map((subLinks, index) => (
                            <li
                                key={"sub-link-" + index}
                                className="text-zinc-500 text-sm transition-colors hover:text-white mb-3 cursor-pointer"
                            >
                                {subLinks.label}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
