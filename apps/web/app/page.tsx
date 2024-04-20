import { Hero } from "@previous.js/shared-ui/server"

export default function Home() {
    return (
        <>
            <Hero />
            <section className="h-[100vh]" id="benchmarks">
                <p>Benchmarks</p>
            </section>
            <section className="h-[100vh]" id="clients">
                <p>clients</p>
            </section>
            <section className="h-[100vh]" id="features">
                <p>features</p>
            </section>
            <section className="h-[100vh]" id="templates">
                <p>templates</p>
            </section>
            <section className="h-[100vh]" id="showcase">
                <p>showcase</p>
            </section>
        </>
    )
}
