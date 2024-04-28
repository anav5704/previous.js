import { CopyCode, Globe } from '@previous.js/shared-ui'
import { SubHeading } from './sub-heading'

export const GlobeCTA = () => {
    return (
        <div className='mt-36 relative'>
            <div className='pt-10 gap-4 flex flex-col items-center justify-center z-10 absolute top-0 left-0 bg-gradient-black h-full w-full'>
                <SubHeading>
                    The Framework of Choice When it Matters
                </SubHeading>
                <p className='text-xl text-zinc-500'>Everything you need to build great products on the modern web, <br /> with peak <span className='text-white'> performance, efficiency</span> and <span className='text-white'>developer experience</span>.</p>
                <CopyCode code="npm create-previous-app@latest" />
            </div>
            <Globe />
        </div>
    )
}
