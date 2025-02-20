import React from "react";

const Blog: React.FC = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-0 pt-16 md:pt-10 md:pb-32 px-4 sm:px-8 md:px-16 lg:px-60 bg-gradient-to-b from-neutral-900 to-black">
            <div className="text-center mb-8 max-w-2xl px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[550] mb-4">Blog</h1>
                <p className="text-lg sm:text-xl text-neutral-300/80">
                    To be added on project completion.
                </p>
            </div>
        </main>
    )
}

export default Blog;
