
export const Features = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 border border-zinc-800 rounded-2xl h-72 bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">File-Based Routing</h4>
                    <p className="text-zinc-500">Previous.js uses a file-system based router to define routes.</p>
                </div>
            </div>
            <div className="col-span-2 border border-zinc-800 rounded-2xl h-72 bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Seamless Integration</h4>
                    <p className="text-zinc-500">Extend and automate your workflow by using integrations for your favorite libraries, utilities, ORMs and databases.</p>
                </div>
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-2xl h-72 bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">CSS Support</h4>
                    <p className="text-zinc-500">Style your application using tools like CSS Modules and Tailwind CSS.</p>
                </div>
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-2xl h-72 bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Fast Builds</h4>
                    <p className="text-zinc-500">Our Rust compiler builds apps 2 business days in advance.</p>
                </div>
            </div>
            <div className="col-span-1 border border-zinc-800 rounded-2xl h-72 bg-gradient-white">
                <div className="p-5">
                    <h4 className="text-2xl font-semibold">Perfect 100s</h4>
                    <p className="text-zinc-500">Automatic Image, Font, and Script Optimizations.</p>
                </div>
            </div>
        </div>
    )
}
