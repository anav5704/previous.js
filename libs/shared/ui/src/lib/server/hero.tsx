import { CopyCode } from "@previous.js/shared-ui"
import { Button } from "@previous.js/shared-ui/server"

export const Hero = () => {
    return (
        <section className=" text-center flex flex-col items-center gap-8 my-36">
            <h1 className="text-gradient-white text-6xl font-extrabold">
                A Web Framework
                <br />
                Better Than The Best
            </h1>

            <p className="text-xl text-zinc-500">
                Used by some of the world's largest companies, Previous.js enables you to create
                <br />
                <span className="text-white">high-quality web applications </span>
                with the power of HTML & CSS.
            </p>

            <div className="flex items-center justify-center mx-auto gap-4">
                <Button
                    href="/"
                    variant="secondary"
                    size="large"
                >
                    Get Started
                </Button>
                <Button
                    href="/"
                    variant="tertiary"
                    size="large"
                >
                    Learn Previous.js
                </Button>
            </div>

            <CopyCode code="npm create-previous-app@latest" />
        </section>
    )
}
