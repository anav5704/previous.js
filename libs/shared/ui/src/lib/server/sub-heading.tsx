interface SubHeadingProps {
    children: React.ReactNode
}

export const SubHeading = ({ children }: SubHeadingProps) => {
    return (
        <h2 className="text-gradient-white text-center text-4xl font-extrabold mt-36 mb-10">
            {children}
        </h2>
    )
}
