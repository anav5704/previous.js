import { Container } from "@previous.js/shared-ui/server"
import Image from "next/image"
import IGN from "../../assets/ign.svg"
import Notion from "../../assets/notion.svg"
import OpenAI from "../../assets/openai.svg"
import Spotify from "../../assets/spotify.svg"
import Target from "../../assets/target.svg"
import Twitch from "../../assets/twitch.svg"
import Vodafone from "../../assets/vodafone.svg"

const logos = [Vodafone, OpenAI, Twitch, IGN, Notion, Spotify, Target]

export const Clients = () => {
    return (
        <ul className="relative fade w-full">
            <Container className=" flex items-center justify-between">
                {logos.map((logo, index) => (
                    <li key={`first-logo-${index}`} className="col-span-1">
                        <Image
                            src={logo}
                            alt="Logo"
                            height={50}
                            width={50}
                            quality={100}
                        />
                    </li>
                ))}
            </Container>
        </ul >
    )
}
