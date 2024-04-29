import { Globe } from "@previous.js/shared-ui"
import { Commits, FileGrid } from "@previous.js/shared-ui/server"

export const Features = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="overflow-hidden col-span-1 border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">File-Based Routing</h4>
                    <p className="text-zinc-500">Previous.js uses a file-system based router to define routes.</p>
                </div>
                <FileGrid />
            </div>
            <div className="group flex flex-col overflow-hidden col-span-1 border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Open-Source</h4>
                    <p className="text-zinc-500">Maintained by a growing community of over 10,000 developers.</p>
                </div>
                <Commits />
            </div>
            <div className="relative overflow-hidden col-span-1 row-span-1 md:row-span-2 border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Deploy Anywhere</h4>
                    <p className="text-zinc-500">Build apps that can be easily deployed on any cloud infrastructure.</p>
                </div>
                <div className="absolute top-14">
                    <Globe />
                </div>
            </div>
            <div className="col-span-1 md:col-span-2  border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Seamless Integration</h4>
                    <p className="text-zinc-500">Extend and automate your workflow by using integrations for your favorite libraries, utilities, ORMs and databases.</p>
                </div>
            </div>
        </div>
    )
}
