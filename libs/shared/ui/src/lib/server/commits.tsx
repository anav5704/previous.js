export const Commits = () => {
    const commits = [1, 3, 4, 5, 6, 7, 8, 9, , 10, 11, 12, 13, 14, 15]
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const getRandomDelay = () => Math.random() * 5

    return (
        <div className="group-hover:opacity-100 transition duration-1000 px-5 flex flex-col opacity-25 grow justify-between pb-5">
            {rows.map((row) => (
                <div key={row} className='flex justify-between'>
                    {commits.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                animationDelay: `${getRandomDelay()}s`,
                                animationDuration: `5s`
                            }}
                            className="ease-linear  animate-pulse h-4 aspect-square bg-zinc-900 rounded-md"
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
