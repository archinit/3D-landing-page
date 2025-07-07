import 'boxicons/css/boxicons.min.css';

export const Hero = () => {
    return <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh - 6rem)">

        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 ">
            
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx bx-diamond' ></i>
                    INTRODUCING
                </div>
            </div>
                <h1 className='  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                    EMAIL FOR 
                    <br />
                    DEVELOPERS
                </h1>

                <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quas iste cupiditate deleniti tempora praesentium? Consequuntur officia ex dolore aliquid.
                </p>


                <div>
                    <a href="#">
                        Documentation <i class='bx bx-link-external' ></i>
                    </a>
                </div>
        </div>
    </main>
}