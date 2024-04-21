import { Footer, Nav } from "@previous.js/shared-ui/server"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import logo from "../public/logo.png"
import "./global.css"

export const metadata = {
    title: "Previous.js - Better Than The Best.",
    description: "Previous.js let's you build modern, fast, scalable and SEO  friendly web apps.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeistSans.variable} ${GeistMono.variable} bg-black text-white font-GeistSans`}>
                <Nav logo={logo} />
                <main className="pt-14">{children}</main>
                <Footer logo={logo} />
            </body>
        </html>
    )
}
