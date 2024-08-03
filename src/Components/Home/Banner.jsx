import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../assets/Banner Images/1.png'
import img2 from '../../assets/Banner Images/2.png'
import img3 from '../../assets/Banner Images/3.png'
import img4 from '../../assets/Banner Images/4.png'
import img5 from '../../assets/Banner Images/5.png'

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full">
               
                    <SwiperSlide>
                        <img className='w-full h-svh' src={img1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='w-full h-svh' src={img2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='w-full h-svh' src={img3} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='w-full h-svh' src={img4} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='w-full h-svh' src={img5} alt="" />
                    </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;