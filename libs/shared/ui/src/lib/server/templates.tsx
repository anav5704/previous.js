import Firebase from "../../assets/firebase.svg"
import Gemini from "../../assets/gemini.svg"
import GraphQL from "../../assets/graphql.svg"
import NX from "../../assets/nx.svg"
import OpenAI from "../../assets/openai.svg"
import PayPal from "../../assets/paypal.svg"
import Prismic from "../../assets/prismic.svg"
import Sanity from "../../assets/sanity.svg"
import SocketIO from "../../assets/socketio.svg"
import Stripe from "../../assets/stripe.svg"
import Supbabase from "../../assets/supabase.svg"
import TurboRepo from "../../assets/turborepo.svg"

import { TemplateCard } from "./template-card"

export const Templates = () => {
    const templates = [
        {
            title: "E-commerce Starter",
            description: "The all-in-one subscription starter kit for high-performance SaaS applications, powered by either Stripe or Paypal.",
            icons: [Stripe, PayPal]
        },
        {
            title: "AI Chatbot Starter",
            description: "An open-source AI chatbot app template built with Previous.js and OpenAI or Google Gemini integration.",
            icons: [OpenAI, Gemini]
        },
        {
            title: "SaaS Starter",
            description: "Get up and running with your dream SaaS with powerful and reliable BaaS's like Supabase and Firebase.",
            icons: [Supbabase, Firebase]
        },
        {
            title: "CMS Starter",
            description: "Easily manage and maintain content heavy sites with Previous.js and either the Sanity or Prismic integration.",
            icons: [Sanity, Prismic]
        },
        {
            title: "Realtime App Starter",
            description: "Quickly fire up fast and realtime apps with either the GraphQL live queries or good old Web Sockets.",
            icons: [SocketIO, GraphQL]
        },
        {
            title: "Monorepo Starter",
            description: "Start off with a pre-configured, scalable and type-safe monorepo environment using either Turbo Repo or NX .",
            icons: [TurboRepo, NX]
        },

    ]

    return (
        <div className="grid grid-cols-3 gap-5">
            {templates.map((template, index) => (
                <TemplateCard
                    key={index}
                    title={template.title}
                    description={template.description}
                    icons={template.icons}
                />
            ))}
        </div>
    )
}
