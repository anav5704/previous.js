import { Clients, Container, Features, Hero, SubHeading, Templates } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Container>
                <Hero />
            </Container>

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
                    Start Building in Seconds
                </SubHeading>
                <Container>
                    <Templates />
                </Container>
            </section>

            {/* <section>
                <GlobeCTA />
            </section> */}
        </>
    )
}
