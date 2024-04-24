import { Container, NavLinks } from "@previous.js/shared-ui/server"
import Image, { StaticImageData } from "next/image"

interface NavProps {
    logo: StaticImageData
}

export const Nav = ({ logo }: NavProps) => {
    return (
        <nav className="z-50 bg-black/75 fixed w-screen backdrop-blur-sm h-14 flex border-b border-zinc-800">
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Previous.js Logo"
                        className="logo"
                        quality={10}
                        height={25}
                        width={25}
                    />
                    Previous JS
                </div>
                <div className="flex items-center gap-12">
                    <NavLinks />
                </div>
                <div>
                    CTA
                </div>
            </Container>
        </nav>
    )
}
