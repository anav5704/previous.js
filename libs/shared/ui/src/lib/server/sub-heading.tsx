interface SubHeadingProps {
    children: React.ReactNode,
}

export const SubHeading = ({ children }: SubHeadingProps) => {
    return (
        <h2 className="text-gradient-white text-center text-2xl md:text-4xl font-extrabold mb-10 mt-36">
            {children}
        </h2>
    )
}
