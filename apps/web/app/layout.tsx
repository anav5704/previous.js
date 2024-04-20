import { Nav } from "@previous.js/shared-ui/server"
import logo from "../public/logo.png"
import "./global.css"

export const metadata = {
    title: "Previous.js - Better Than The Best.",
    description: "Previous.js let's you build modern, fast, scalable and SEO  friendly web apps.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-black text-white">
                <Nav logo={logo} />
                <main className="pt-14">
                    {children}
                </main>
            </body>
        </html>
    )
}
