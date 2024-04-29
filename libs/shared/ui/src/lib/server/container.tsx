interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <section className={`${className} mx-auto w-5/6 md:w-3/4 max-w-[1080px]`}>
            {children}
        </section>
    )
}
