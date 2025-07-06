export const Header = () => {
    return <header className="flex justify-between items-center py-5 px-4 lg:px-20">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
            ACODE
        </h1>

        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider transition-colors hover:text-gray-400 z-50 uppercase" href="#">
                company
            </a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-400 z-50 uppercase" href="#">
                features
            </a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-400 z-50 uppercase" href="#">
                resources
            </a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-400 z-50 uppercase" href="#">
                docs
            </a>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] uppercase py-3 px-8 rounded-full transition-all duration-500 border-none font-medium hover:bg-white z-50 text-black"> 
            signin
        </button>

    </header>
}