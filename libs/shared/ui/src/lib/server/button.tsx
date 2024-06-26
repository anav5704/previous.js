import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    href: string
}

const buttonClasses = cva("rounded-lg inline-flex items-center mx-auto", {
    variants: {
        variant: {
            primary: "bg-gradient",
            secondary: "bg-white text-black",
            tertiary: "bg-zinc-900 border border-zinc-800 hover:bg-zinc-800"
        },
        size: {
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8",
            large: "text-md px-6 h-12"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
})

export const Button = ({ children, href, variant, size }: ButtonProps) => {
    return (
        <Link
            className={buttonClasses({ variant, size })}
            href={href}
        >
            {children}
        </Link>
    )
}