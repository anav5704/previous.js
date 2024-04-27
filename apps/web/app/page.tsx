import { Clients, Container, Features, GlobeCTA, Hero, SubHeading, Templates } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Hero />

            <section className=" mt-36" id="clients">
                <SubHeading>
                    Trusted by The Largest Teams
                </SubHeading>
                <Clients />
            </section>

            <section className=" mt-36" id="features">
                <SubHeading>
                    Why Developers Love Previous.js
                </SubHeading>
                <Container>
                    <Features />
                </Container>
            </section>

            <section className=" mt-36" id="templates">
                <SubHeading>
                    Start Building in Seconds
                </SubHeading>
                <Container>
                    <Templates />
                </Container>
            </section>

            <section>
                <GlobeCTA />
            </section>
        </>
    )
}
