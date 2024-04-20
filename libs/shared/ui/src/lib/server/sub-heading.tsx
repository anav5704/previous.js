interface SubHeadingProps {
    children: React.ReactNode
}

export const SubHeading = ({ children }: SubHeadingProps) => {
    return (
        <h2 className="text-gradient-white text-center text-4xl font-extrabold">
            {children}
        </h2>
    )
}
