import { Clients, Container, Features, Hero, SubHeading } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Hero />

            <section id="clients">
                <SubHeading>
                    Trusted by The Largest Teams
                </SubHeading>
                <Clients />
            </section>

            <section id="features">
                <SubHeading>
                    Why Developers Love Previous.js
                </SubHeading>
                <Container>
                    <Features />
                </Container>
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
