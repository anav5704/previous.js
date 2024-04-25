import { File, Folder } from '@geist-ui/icons'

export const FileGrid = () => {
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const rows = [1, 2, 3]
    const loops = [1, 2]

    return (
        <div className="grid gap-5 mb-5">
            {rows.map((row) => (
                <div key={row} className='relative w-full inline-flex gap-5 flex-nowrap'>
                    {loops.map((loop) => (
                        <ul key={loop} className={`${row % 2 == 0 ? "animate-infinite-scroll-left" : "animate-infinite-scroll-right"} gap-5 flex items-center justify-center md:justify-start`}>
                            {cols.map((col) => (
                                <li key={col} className='p-3 border hover:border-white transition border-zinc-800 bg-zinc-900 rounded-lg w-fit'>
                                    {row % 2 == 0 ?
                                        <Folder size={25} /> :
                                        <File size={25} />
                                    }
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    )
}
