import { FaBookReader } from "react-icons/fa";
import { PiSwapBold } from "react-icons/pi";
import { BsArrowRepeat } from "react-icons/bs";

const ReadSwap = () => {
    return (
        <div className="lg:flex justify-evenly gap-20 uppercase my-24 space-y-16 lg:space-y-0">
            <div className='text-6xl font-semibold space-y-7 flex flex-col items-center text-[#ff00e2]'>
                <h1 className='text-6xl'>Read</h1>
                <FaBookReader className="text-8xl"/>
            </div>
            
            <div className='text-6xl font-semibold space-y-7 flex flex-col items-center text-[#050deb]'>
                <h1 className='text-6xl'>Swap</h1>
                <PiSwapBold className="text-8xl"/>
            </div>
            
            <div className='text-6xl font-semibold space-y-7 flex flex-col items-center text-[#8906e6]'>
                <h1 className='text-6xl'>Repeat</h1>
                <BsArrowRepeat className="text-8xl"/>
            </div>
        </div>
    );
};

export default ReadSwap;