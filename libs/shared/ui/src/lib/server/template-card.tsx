import { ArrowUpRight } from '@geist-ui/icons'
import Image from "next/image"
import Link from "next/link"
interface TemplateCardProps {
    title: string,
    description: string,
    icons: string[]
}
export const TemplateCard = ({ title, description, icons }: TemplateCardProps) => {
    return (
        <div className="bg-gradient-white border border-zinc-800 rounded-2xl">
            <div className="flex items-center justify-center gap-10 p-10">
                {icons.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon}
                        alt="Icon"
                        height={40}
                        width={40}
                    />
                ))}
            </div>
            <div className='p-5 border-t border-zinc-800'>
                <h4 className="font-semibold text-xl">{title}</h4>
                <p className="text-sm text-zinc-500 my-3">{description}</p>
                <Link className="w-fit text-sm text-zinc-500 hover:text-white transition flex items-center gap-2" href="/">
                    View Template
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </div>
    )
}
