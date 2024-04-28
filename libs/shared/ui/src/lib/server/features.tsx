import { Globe } from "../client/globe"
import { FileGrid } from "./file-grid"

export const Features = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="overflow-hidden col-span-1 border h-72 border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">File-Based Routing</h4>
                    <p className="text-zinc-500">Previous.js uses a file-system based router to define routes.</p>
                </div>
                <FileGrid />
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Open-Source</h4>
                    <p className="text-zinc-500">Maintained by a growing community of over 10,000 developers.</p>
                </div>
            </div>
            <div className="relative overflow-hidden col-span-1 row-span-2 border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Deploy Anywhere</h4>
                    <p className="text-zinc-500">Build apps that can be easily deployed on any cloud infrastructure.</p>
                </div>
                <div className="absolute top-20">
                    <Globe />
                </div>
            </div>
            <div className="col-span-2 h-72  border border-zinc-800 rounded-2xl bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Seamless Integration</h4>
                    <p className="text-zinc-500">Extend and automate your workflow by using integrations for your favorite libraries, utilities, ORMs and databases.</p>
                </div>
            </div>
        </div>
    )
}
