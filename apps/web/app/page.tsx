import { Container, Features, Hero, SubHeading } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Hero />
            <section id="features">
                <SubHeading>
                    Why Developers Love Previous.js
                </SubHeading>
                <Container>
                    <Features />
                </Container>
            </section>

            <section id="benchmarks">
                <SubHeading>
                    Mind Blowing Build Times
                </SubHeading>
            </section>

            <section id="clients">
                <SubHeading>
                    Trusted by Tech Giants
                </SubHeading>
            </section>

            <section id="templates">
                <SubHeading>
                    Get up and Running
                </SubHeading>
            </section>

            <section id="showcase">
                <SubHeading>
                    What the Community has Built
                </SubHeading>
            </section>
        </>
    )
}
