import img from '../../assets/Book_Swap-removebg-preview 2.png'
import SectionTitle from '../Shared/SectionTitle';

const Newsletter = () => {
    return (
        <div className="bg-[#100d28] flex flex-col items-center py-20 my-10">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='text-white text-center uppercase'>
                <SectionTitle heading={'Signup for Newsletter'}></SectionTitle>
            </div>

            <div className="join flex">
                <input className="input input-bordered join-item w-72" placeholder="Email" />
                <button className="btn join-item bg-[#8906e6] text-white hover:bg-[#050deb]">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;