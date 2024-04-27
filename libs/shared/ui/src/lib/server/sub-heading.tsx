interface SubHeadingProps {
    children: React.ReactNode,
    noMargin?: boolean,
}

export const SubHeading = ({ children, noMargin }: SubHeadingProps) => {
    return (
        <h2 className={`${!noMargin && "mb-10"} text-gradient-white text-center text-4xl font-extrabold`}>
            {children}
        </h2>
    )
}
