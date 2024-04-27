import { Container, FooterLinks } from "@previous.js/shared-ui/server"
import Image, { StaticImageData } from "next/image"

interface FooterProps {
    logo: StaticImageData
}

export const Footer = ({ logo }: FooterProps) => {
    return (
        <footer className="border-t border-zinc-800 w-screen py-10">
            <Container className="flex justify-between h-full">
                <div className="flex flex-col justify-between grow">
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
                    <p className="text-zinc-500 text-sm">
                        Developed by {" "}
                        <a
                            className="text-white underline"
                            href="https://github.com/anav5704"
                            target="_blank"
                        >
                            Anav
                        </a>
                    </p>
                </div>
                <div className="flex">
                    <FooterLinks />
                </div>
            </Container>
        </footer>
    )
}
