import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import PopularBookCard from "./PopularBookCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const PopularBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('PopularBooks.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="text-[#050deb]">
                <SectionTitle heading={'Popular Books'}></SectionTitle>
            </div>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={`mySwiper`}
                    breakpoints={{
                        320: { // For small screens like mobile devices
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: { // For medium screens like tablets
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: { // For large screens like desktops
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {
                        books?.map(book =>
                            <SwiperSlide key={book.id}>
                                <PopularBookCard book={book}></PopularBookCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

            </div>

            <div className="text-center my-10">
                <Link to='/allbooks'>
                    <button className="btn btn-active bg-[#050deb] text-white uppercase">See all the books</button>
                </Link>

            </div>
        </div>
    );
};

export default PopularBooks;