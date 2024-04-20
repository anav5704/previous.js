"use client"

import { Check, Copy } from "@geist-ui/icons"
import { useState } from "react"

interface CopyCodeProps {
    code: string
}

export const CopyCode = ({ code }: CopyCodeProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (
        <button
            onClick={handleCopy}
            className="font-GeistMono text-md text-sm text-zinc-500 flex items-center gap-2"
        >
            ~ {code}
            {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
    )
}
