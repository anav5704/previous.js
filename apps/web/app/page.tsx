import { Hero, SubHeading } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Hero />
            <section className="h-[100vh]" id="benchmarks">
                <SubHeading>
                    Mind Blowing Build Times
                </SubHeading>
            </section>


            <section className="h-[100vh]" id="clients">
                <SubHeading>
                    Trusted by Tech Giants
                </SubHeading>
            </section>

            <section className="h-[100vh]" id="features">
                <SubHeading>
                    Why Developers Love Previous.js
                </SubHeading>
            </section>

            <section className="h-[100vh]" id="templates">
                <SubHeading>
                    Get up and Running
                </SubHeading>
            </section>

            <section className="h-[100vh]" id="showcase">
                <SubHeading>
                    What the Community has Built
                </SubHeading>
            </section>
        </>
    )
}
