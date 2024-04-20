interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <section className={`${className} mx-auto w-3/4`}>
            {children}
        </section>
    )
}
