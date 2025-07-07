import 'boxicons/css/boxicons.min.css';

export const Header = () => {

    const mobMenu = () => {
        const toggleMenu = document.getElementById('mobile-menu')

        if (toggleMenu.classList.contains('hidden')) {
            toggleMenu.classList.remove('hidden')
        } else {
            toggleMenu.classList.add('hidden')
        }
    }

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

        {/* mobile menu button */}

         <button onClick={mobMenu} className='md:hidden text-3xl p-2 z-50'> 
            <i class='bx bx-menu'></i> 
         </button>


         {/* mobile nav */}
        <div id='mobile-menu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-30 backdrop-blur-lg'>
            <nav className='flex flex-col gap-6 items-center'>
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
        </div>

    </header>
}