interface SubHeadingProps {
    content: string
}

export const SubHeading = ({ content }: SubHeadingProps) => {
    return (
        <h2>
            {content}
        </h2>
    )
}
