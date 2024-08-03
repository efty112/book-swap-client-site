const PopularBookCard = ({ book }) => {
    const { bookImage, bookName, bookDescription, bookProviderImage, bookProviderName } = book;

    return (
        <div className="">
            <div className="card bg-base-100 w-96 h-[500px] shadow-xl mb-12">
                <figure className="h-full">
                    <img
                        className="h-full"
                        src={bookImage}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    <h2 className="text-center font-semibold text-xl">{bookName}</h2>
                    <p className="text-center">{bookDescription}</p>

                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-10 ring-primary ring-offset-base-100 ring ring-offset-2 rounded-full">
                                <img src={bookProviderImage} />
                            </div>
                        </div>

                        <p className="text-lg font-bold">{bookProviderName}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularBookCard;